    + FullyQualifiedErrorId : UnauthorizedAccess
PS C:\Users\tejas\Desktop\Coiange\SPACES-ARCHITECTS-NEXT-JS> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
>> .\scripts\verify-deindex.ps1

Target: http://localhost:3000

MUST BE 410 â€ injected spam URLs -ForegroundColor Yellow
Test-Url /shop/product.653955302.html                 @(410)
Test-Url /shop/                                       @(410)
Test-Url /951421/Mosquitera-Para-Puerta-210x100-Cm     @(410)
Test-Url /1359041/12-Rollos-De-Papel                   @(410)
Test-Url /cate-video-games                             @(410)
Test-Url /cate-hina-dolls                              @(410)
Test-Url /category/irish-online-casinos                @(410)
Test-Url /category/no-kyc-casinos-eu-com/              @(410)
Test-Url /author/nishant/page/2/                       @(410)
Test-Url /crypto-casino-solution-essentials-for-players-and/ @(410)
Test-Url /tongobet-casino-bonus-terms-explained-2/     @(410)
Test-Url /understanding-the-crypto-faucet-casino-ecosystem @(410)
Test-Url /wp-login.php                                 @(410)
Test-Url /xmlrpc.php                                   @(410)
Test-Url /some-old-post/feed                           @(410)

Write-Host "
Write-Host MUST BE 301 â€ legacy URLs that carry link equity
  PASS /portfolio-item/haveli-dharampura                    got 301   want 301     
  PASS /portfolio-item/slender-house                        got 301   want 301     
  PASS /portfolio-item/golden-haveli                        got 301   want 301     
  FAIL /portfolio-category/residential/                     got 308   want 301     
  PASS /team                                                got 301   want 301     
  PASS /gandhi-darshan                                      got 301   want 301     

MUST BE 200 â€ real pages must not be caught by the rules -ForegroundColor Yellow
Test-Url /                                             @(200)
Test-Url /projects                                     @(200)
Test-Url /projects/haveli-dharampura                   @(200)
Test-Url /projects/golden-haveli                       @(200)
Test-Url /projects/the-urban-nest                      @(200)
Test-Url /blog/heritage-conservation-in-india           @(200)
Test-Url /faq                                          @(200)
Test-Url /about                                        @(200)
Test-Url /teams                                        @(200)
Test-Url /awards                                       @(200)
Test-Url /robots.txt                                   @(200)
Test-Url /sitemap.xml                                  @(200)

Write-Host "
Write-Host MUST NOT BE 500 â€ malformed encoding guard (safeDecode)
  PASS /%                                                   got 404   want 404/410 a 500 here keeps spam indexed
  PASS /%E0                                                 got 404   want 404/410 truncated percent-escape
  PASS /%zz                                                 got 404   want 404/410 invalid hex

1 FAILED, 8 passed

If the 410s return 200: middleware.js is in the wrong place.
It must sit beside package.json, NOT inside app/.
If the 301s return 404: a VERIFY line in legacy-redirects.js
points at a slug that does not exist. Delete that line.

