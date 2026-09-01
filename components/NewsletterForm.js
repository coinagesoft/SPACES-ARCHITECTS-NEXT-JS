"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email"
        className="border-b border-line bg-transparent text-xs uppercase tracking-wide py-2 outline-none placeholder:text-faint focus:border-accent transition-colors"
      />
      <button
        type="submit"
        className="self-start text-xs tracking-widest2 uppercase mt-2 border border-ink px-4 py-2 hover:bg-ink hover:text-white transition-colors"
      >
        Join
      </button>
    </form>
  );
}
