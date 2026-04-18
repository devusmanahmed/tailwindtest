import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const aboutLinks = [
  ['Who we are', '/about/who-we-are'],
  ['Client reviews', '/about/client-reviews'],
  ['Servers & technology', '/about/servers-technology'],
  ['FAQs', '/about/faqs'],
];

const serviceLinks = [
  ['WordPress hosting', '/services/wordpress-hosting'],
  ['Web design', '/services/web-design'],
  ['Web development', '/services/web-development'],
  ['Website fix', '/services/website-fix'],
];

function Dropdown({ label, links }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <span className={`transition ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>
      <div
        className={`absolute left-0 top-12 w-56 rounded-xl border border-white/10 bg-slate-900/95 p-2 shadow-soft transition ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        {links.map(([text, to]) => (
          <NavLink
            key={to}
            to={to}
            className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            {text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="container-shell flex flex-col gap-6 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-semibold text-white">BlackBuck Host</div>
        <nav className="flex flex-wrap gap-4">
          <a href="#" className="transition hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="transition hover:text-white">
            Terms
          </a>
          <a href="#" className="transition hover:text-white">
            Money-back policy
          </a>
          <a href="#" className="transition hover:text-white">
            Knowledge base
          </a>
        </nav>
      </div>
      <div className="container-shell pb-8 text-xs text-slate-500">© {new Date().getFullYear()} BlackBuck Host. All rights reserved.</div>
    </footer>
  );
}

function MobileMenu({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="border-t border-white/10 bg-slate-950/95 p-4 md:hidden">
      <nav className="space-y-3 text-sm">
        <NavLink to="/" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10">
          Home
        </NavLink>
        <p className="px-3 pt-2 text-xs uppercase tracking-wide text-slate-400">About</p>
        {aboutLinks.map(([label, href]) => (
          <NavLink key={href} to={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10">
            {label}
          </NavLink>
        ))}
        <p className="px-3 pt-2 text-xs uppercase tracking-wide text-slate-400">Services</p>
        {serviceLinks.map(([label, href]) => (
          <NavLink key={href} to={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10">
            {label}
          </NavLink>
        ))}
        <NavLink to="/contact" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-accent-gradient">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="container-shell flex h-16 items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-tight text-white">
            BlackBuck <span className="text-sky-400">Host</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink to="/" className="rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10">
              Home
            </NavLink>
            <Dropdown label="About" links={aboutLinks} />
            <Dropdown label="Services" links={serviceLinks} />
            <NavLink to="/contact" className="rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10">
              Contact
            </NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <button className="rounded-xl border border-sky-400/30 bg-sky-400/15 px-4 py-2 text-sm font-medium text-sky-100 transition hover:bg-sky-400/25">
              Login
            </button>
            <button
              className="rounded-lg border border-white/15 px-3 py-2 text-sm text-slate-200 md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
        </div>
        <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
