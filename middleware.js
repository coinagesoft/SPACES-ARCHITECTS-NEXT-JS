import { NextResponse } from 'next/server';
import { LEGACY_REDIRECTS } from './legacy-redirects';

/**
 * De-indexing middleware for spacesarchitects-ka.com
 *
 * Purpose: make every URL that is NOT a real page of this site return a hard
 * 410 Gone, so Google drops the ~179,000 injected spam URLs still in the
 * index from the WordPress compromise.
 *
 * Why 410 and not a robots.txt Disallow:
 *   A robots.txt block stops Google CRAWLING the URL, which means it never
 *   sees that the page is gone — blocked URLs can stay indexed indefinitely.
 *   The URL must stay crawlable and answer 410 until it drops out.
 *
 * Why 410 and not 404:
 *   Both deindex, but 410 is unambiguous ("gone, do not come back") and is
 *   acted on faster. With 179k URLs to clear, that difference matters.
 *
 * Order matters: legacy 301s are checked BEFORE the spam rules, so the
 * handful of real old project URLs keep their link equity.
 *
 * SEO metadata: for every real page, the request path and query string are
 * passed to the layout in the x-pathname / x-search request headers, so
 * app/layout.js can pick the right title and description (config/seo.js).
 *
 * FILE LOCATION: project root, beside package.json and the app/ folder.
 * NOT inside app/ — there it is silently ignored with no error.
 */

// Paths that must always pass through untouched.
const PASSTHROUGH = [
  '/_next',
  '/api',
  '/assets',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/llms.txt',
  '/site.webmanifest',
];

/**
 * Injected URL shapes found in the Search Console coverage export.
 * Each was created by the compromise and has no legitimate counterpart.
 */
const SPAM_PATTERNS = [
  /^\/shop(\/|$)/i,                  // /shop/product.653955302.html  (~449 in sample)
  /^\/\d{4,}(\/|$)/,                 // /951421/Mosquitera-Magnetica  (~489 in sample)
  /^\/cate-/i,                       // /cate-video-games
  /^\/category(\/|$)/i,              // /category/irish-online-casinos
  /^\/author(\/|$)/i,                // /author/nishant/page/2/
  /^\/tag(\/|$)/i,                   // WP tag archives
  /^\/wp-(content|admin|includes|json|login)/i,
  /^\/xmlrpc\.php$/i,
  /\/feed\/?$/i,
  /\/(page|amp)\/\d+\/?$/i,
  /\.(php|aspx?|cgi|jsp)$/i,         // nothing on a Next.js site ends in .php
];

/**
 * Gambling / affiliate vocabulary from the injected root-level slugs.
 * Kept deliberately narrow so it cannot match real architecture content.
 */
const SPAM_KEYWORDS =
  /(casino|kasyn|kasino|igraln|gambling|freespin|free-spins|no-deposit|nodeposit|jackpot|sportsbook|betting|bookmaker|wagering|rollover|promo-?code|bonus-?code|crypto-?faucet|jugabet|jokabet|spinbet|spinboss|fansbet|unibet|mrbet|stake-?(casino|bet)|tongobet|nvcasino|casinia)/i;

function isPassthrough(pathname) {
  return PASSTHROUGH.some((p) => pathname === p || pathname.startsWith(p + '/'));
}

/**
 * decodeURIComponent throws URIError on malformed input (a bare "%", a
 * truncated "%E0"). Crawlers and vulnerability scanners send these all day.
 * An uncaught throw in middleware is a 500, and a 500 tells Google to come
 * back later — which KEEPS the spam URL indexed. Never let that happen.
 */
function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function gone() {
  return new NextResponse(
    '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
      '<meta name="robots" content="noindex,nofollow">' +
      '<title>410 Gone</title></head><body>' +
      '<h1>410 — Gone</h1>' +
      '<p>This page does not exist and will not return. ' +
      '<a href="https://spacesarchitects-ka.com/">Go to the homepage</a>.</p>' +
      '</body></html>',
    {
      status: 410,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        // Belt and braces: even if something caches this, it must not index.
        'x-robots-tag': 'noindex, nofollow, noarchive',
        'cache-control': 'public, max-age=86400',
      },
    }
  );
}

/**
 * Let the request through and tell the layout which URL it is rendering.
 * `set` overwrites any x-pathname / x-search a client might send, so these
 * headers can only ever hold the real request path and query string.
 */
function proceed(req) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-pathname', req.nextUrl.pathname);
  requestHeaders.set('x-search', req.nextUrl.search);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export function middleware(req) {
  const { pathname, search } = req.nextUrl;

  if (isPassthrough(pathname)) return NextResponse.next();

  const clean = pathname.replace(/\/+$/, '').toLowerCase() || '/';

  // 1. Real legacy URLs worth preserving -> 301.
  const target = LEGACY_REDIRECTS[clean];
  if (target) {
    return NextResponse.redirect(new URL(target, req.url), 301);
  }

  // 2. Injected query-string URLs, e.g. /?shop/items/J091733437387/
  //    These hit the homepage and return 200, so Google sees duplicates of /.
  if (/^\??shop\//i.test(search.replace(/^\?/, '')) || /[?&]shop\//i.test(search)) {
    return gone();
  }

  // 3. Known injected URL shapes.
  if (SPAM_PATTERNS.some((re) => re.test(clean))) {
    return gone();
  }

  // 4. Injected articles at root level, matched on vocabulary.
  if (SPAM_KEYWORDS.test(safeDecode(clean))) {
    return gone();
  }

  // 5. A real page: pass the URL on so the layout can set the SEO metadata.
  return proceed(req);
}

export const config = {
  // Run on everything except Next internals and static image optimisation.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};