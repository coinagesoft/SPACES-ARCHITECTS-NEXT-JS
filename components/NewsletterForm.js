"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email"
        className="border-b border-line bg-transparent py-1.5 text-[14px] uppercase tracking-wide outline-none placeholder:text-faint transition-colors focus:border-accent"
      />
      <button
        type="submit"
        className="mt-1 self-start border-b border-line px-3 py-1 text-[14px] tracking-widest2 uppercase transition-colors hover:border-accent hover:text-accent"
      >
        Join
      </button>
    </form>
  );
}
