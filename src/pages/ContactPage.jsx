export default function ContactPage() {
  return (
    <section className="container-shell py-16 sm:py-24">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Contact</p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-5xl">Let’s improve your website performance</h1>
        <p className="mt-4 text-slate-300">
          Tell us about your current website challenges. We’ll recommend the fastest path to a safer, faster, and easier-to-manage WordPress site.
        </p>

        <form className="mt-8 grid gap-4 sm:grid-cols-2">
          <input className="rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none" placeholder="Your name" />
          <input className="rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none" placeholder="Business email" type="email" />
          <input className="rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none sm:col-span-2" placeholder="Website URL" type="url" />
          <textarea className="min-h-32 rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none sm:col-span-2" placeholder="What do you need help with?" />
          <button className="rounded-xl bg-gradient-to-r from-sky-400 to-teal-400 px-6 py-3 font-medium text-slate-900 transition hover:scale-[1.02] sm:col-span-2 sm:w-fit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
