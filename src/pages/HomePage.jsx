import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  BoltIcon,
  ChatIcon,
  CheckIcon,
  CloudIcon,
  PencilIcon,
  RefreshIcon,
  ShieldIcon,
} from '../components/Icons';

const heroPoints = [
  '90+ Google PageSpeed scores',
  'Unlimited free website edits',
  'SSL, security & backups',
  'Plugin updates & maintenance',
  'Single annual fee',
  '100% money-back guarantee',
];

const features = [
  {
    icon: BoltIcon,
    title: 'Speed',
    text: 'Your site is tuned by real developers to consistently target 90+ Google PageSpeed performance.',
  },
  {
    icon: RefreshIcon,
    title: 'Updates',
    text: 'Plugin, core, and compatibility updates are monitored and applied for you with proactive checks.',
  },
  {
    icon: ShieldIcon,
    title: 'Security',
    text: 'SSL, firewall, malware monitoring, and rapid incident handling keep your business website safe.',
  },
  {
    icon: PencilIcon,
    title: 'Edits',
    text: 'Need copy, layout, or image updates? Request unlimited website edits as part of your annual plan.',
  },
  {
    icon: CloudIcon,
    title: 'Backups',
    text: 'Off-site backups with dependable restore points ensure business continuity whenever needed.',
  },
  {
    icon: ChatIcon,
    title: '24/7 Support',
    text: 'A responsive support team is always available so your website never slows down your growth.',
  },
];

const trustpilot = [
  ['4.9/5 Average rating', 'From verified business owners'],
  ['98% Renewal rate', 'Clients stay because performance stays strong'],
  ['<20 min response', 'Support tickets answered fast'],
];

export default function HomePage() {
  return (
    <>
      <section className="container-shell py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Managed WordPress Hosting</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Fast hosting with complete website care plan optimized for your business website
            </h1>
            <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
              {heroPoints.map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-200">
                  <span className="text-sky-300">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                aria-label="Website URL"
                type="url"
                placeholder="Enter your website URL"
                className="h-12 flex-1 rounded-xl border border-white/15 bg-slate-900/60 px-4 text-sm text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
              />
              <button className="h-12 rounded-xl bg-gradient-to-r from-sky-400 to-teal-400 px-6 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]">
                Host your website now
              </button>
            </div>
            <p className="mt-3 text-sm text-slate-300">$295 per year (14-day money-back guarantee)</p>
          </div>
          <div className="glass-panel p-8">
            <p className="text-sm text-sky-300">Trusted by growing teams</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Everything your WordPress site needs, in one clean plan.</h2>
            <p className="mt-4 text-slate-300">
              Premium hosting, proactive maintenance, and expert edits designed to improve speed, reduce risk, and save your team time.
            </p>
            <div className="mt-8 space-y-3">
              {trustpilot.map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-sm text-slate-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-14">
        <div className="glass-panel p-8 sm:p-10">
          <h2 className="section-title">One stop hosting solution</h2>
          <p className="section-copy">
            BlackBuck Host takes full responsibility for hosting, updates, security, speed, and website care so you can focus on sales and operations.
          </p>
        </div>
      </section>

      <section className="container-shell py-14 sm:py-20">
        <div className="space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className={`grid items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:p-8 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-slate-300">{feature.text}</p>
                  <Link to="/services/wordpress-hosting" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-sky-200">
                    Learn more <ArrowRightIcon />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-shell py-14">
        <div className="glass-panel p-8 sm:p-10">
          <h2 className="section-title">Designed for growth</h2>
          <p className="section-copy">Built on AWS cloud infrastructure with scalable resources and no limits on bandwidth or storage.</p>
          <details className="mt-6 rounded-xl border border-white/10 bg-slate-900/50 p-4 text-slate-300">
            <summary className="cursor-pointer text-sm font-medium text-sky-300">See all features</summary>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                'Global AWS-backed reliability',
                'Auto-scaling for traffic spikes',
                'Unlimited bandwidth and storage',
                'Built-in CDN compatibility',
                'Advanced performance caching',
                'Real-time uptime monitoring',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-sky-300">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </section>

      <section className="container-shell pb-20 pt-10">
        <div className="rounded-3xl border border-sky-300/30 bg-gradient-to-r from-sky-400/20 to-teal-400/20 p-8 text-center shadow-soft sm:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-200">Website Recovery</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">We accept broken WordPress websites</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Slow, hacked, or unstable website? Our team can fix, clean, and stabilize your WordPress website before migration.
          </p>
          <Link
            to="/services/website-fix"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]"
          >
            Fix my website
          </Link>
        </div>
      </section>
    </>
  );
}
