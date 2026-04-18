export default function InnerPage({ eyebrow, title, description, points = [], cta }) {
  return (
    <section className="container-shell py-16 sm:py-24">
      <div className="mx-auto max-w-4xl glass-panel p-8 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-300">{description}</p>
        <ul className="mt-8 grid gap-3 text-slate-200 sm:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              {point}
            </li>
          ))}
        </ul>
        {cta && (
          <button className="mt-8 rounded-xl bg-gradient-to-r from-sky-400 to-teal-400 px-6 py-3 font-medium text-slate-900 transition hover:scale-[1.02]">
            {cta}
          </button>
        )}
      </div>
    </section>
  );
}
