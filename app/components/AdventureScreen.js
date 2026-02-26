import Link from "next/link";

export default function AdventureScreen() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 bg-slate-100">
      <section className="relative w-[320px] h-[640px] rounded-[32px] bg-[#fff7ec] shadow-[0_32px_120px_rgba(15,23,42,0.35)] border border-white overflow-hidden flex flex-col">
        <Header />
        <HeroVideo />
        <NextAdventures />
        <BottomNav />
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between px-5 pt-4 pb-3">
      <Link
        href="/"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(15,23,42,0.18)]"
      >
        <span className="inline-block h-3 w-3 border-l-2 border-b-2 border-slate-500 rotate-45 translate-x-[1px]" />
      </Link>

      <div className="flex flex-col items-center gap-0.5">
        <p className="text-xs tracking-[0.16em] font-semibold text-slate-500 uppercase">
          Today&apos;s Adventure
        </p>
        <p className="text-[11px] font-medium text-amber-500 flex items-center gap-1">
          125 Stars
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] text-white">
            ⭐
          </span>
        </p>
      </div>

      <Link
        href="/parent"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(15,23,42,0.18)]"
      >
        <SettingsIcon />
      </Link>
    </header>
  );
}

function HeroVideo() {
  return (
    <section className="mx-5 mt-1 rounded-[28px] bg-gradient-to-b from-[#f97316] via-[#fb923c] to-[#fecaca] shadow-[0_20px_50px_rgba(248,113,113,0.45)] overflow-hidden">
      <div className="relative h-40 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-[11px] text-white/90">
          <span>04:12</span>
          <div className="h-1.5 w-28 rounded-full bg-white/30 overflow-hidden">
            <div className="h-full w-[55%] bg-white" />
          </div>
          <span>12:00</span>
        </div>
        <button
          type="button"
          className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-orange-500 shadow-[0_18px_40px_rgba(15,23,42,0.45)]"
        >
          <PlayIcon />
        </button>
      </div>

      <div className="bg-[#fff7ec] px-5 pt-4 pb-5">
        <p className="text-sm font-semibold text-slate-800">
          The Friendly Robot Learns ABCs
        </p>
        <p className="mt-1 text-[11px] text-slate-500">
          Episode 4 • Reward unlocked!
        </p>
      </div>
    </section>
  );
}

function NextAdventures() {
  return (
    <section className="mt-4 px-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
          Next Adventures
        </p>
        <button
          type="button"
          className="text-[11px] font-semibold text-sky-500"
        >
          See all
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        <AdventureCard
          title="Counting with Kittens"
          badgeText="150 stars"
          locked
        />
        <AdventureCard
          title="Magic Shapes Garden"
          badgeText="200 stars"
          locked
          accent="green"
        />
      </div>
    </section>
  );
}

function AdventureCard({ title, badgeText, locked, accent = "blue" }) {
  const accentClasses =
    accent === "green"
      ? "from-emerald-400/30 to-emerald-500/10 text-emerald-500"
      : "from-sky-400/30 to-sky-500/10 text-sky-500";

  return (
    <article className="min-w-[150px] rounded-3xl bg-white/80 border border-slate-100 shadow-[0_14px_40px_rgba(148,163,184,0.35)] px-4 pt-4 pb-4 flex flex-col justify-between">
      <div className="flex h-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
        {locked && (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(15,23,42,0.35)] text-slate-500">
            <LockIcon />
          </div>
        )}
      </div>
      <p className="mt-3 text-xs font-semibold text-slate-700 leading-snug">
        {title}
      </p>
      <span
        className={`mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r ${accentClasses} text-[10px] font-semibold px-2.5 py-1`}
      >
        {badgeText}
      </span>
    </article>
  );
}

function BottomNav() {
  return (
    <nav className="mt-auto px-4 pt-4 pb-3">
      <div className="flex items-center justify-between rounded-[24px] bg-white shadow-[0_-8px_32px_rgba(15,23,42,0.25)] px-6 py-3 text-[10px]">
        <NavItem label="Home" active href="/adventure">
          <HomeIcon />
        </NavItem>
        <NavItem label="Prizes">
          <GiftIcon />
        </NavItem>
        <NavItem label="Parents" href="/parent">
          <ParentIcon />
        </NavItem>
      </div>
    </nav>
  );
}

function NavItem({ children, label, active, href }) {
  const content = (
    <div
      className={`flex flex-col items-center gap-1 ${
        active ? "text-sky-500" : "text-slate-400"
      }`}
    >
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-2xl ${
          active ? "bg-sky-50" : "bg-transparent"
        }`}
      >
        {children}
      </div>
      <span
        className={`text-[10px] font-semibold tracking-[0.16em] uppercase ${
          active ? "text-sky-500" : "text-slate-400"
        }`}
      >
        {label}
      </span>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="inline-flex">
      {content}
    </Link>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M9 7.75v8.5a.75.75 0 0 0 1.12.65l6.02-4.25a.75.75 0 0 0 0-1.24L10.12 7.16A.75.75 0 0 0 9 7.75z"
        fill="currentColor"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-slate-500">
      <path
        d="M12 9.2A2.8 2.8 0 1 0 14.8 12 2.81 2.81 0 0 0 12 9.2zm8.2 2.1-1.4-.8a6.45 6.45 0 0 0-.4-1l.2-1.6a1 1 0 0 0-1-1.1h-1.7a6.45 6.45 0 0 0-1-.4L13.7 3a1 1 0 0 0-1.4 0l-1 1.4a6.45 6.45 0 0 0-1 .4H8.6a1 1 0 0 0-1 1.1l.2 1.6a6.45 6.45 0 0 0-.4 1l-1.4.8a1 1 0 0 0-.4 1.4l.9 1.5a6.45 6.45 0 0 0 0 1.1l-.9 1.5a1 1 0 0 0 .4 1.4l1.4.8a6.45 6.45 0 0 0 .4 1l-.2 1.6a1 1 0 0 0 1 1.1h1.7a6.45 6.45 0 0 0 1 .4l1 1.4a1 1 0 0 0 1.4 0l1-1.4a6.45 6.45 0 0 0 1-.4h1.7a1 1 0 0 0 1-1.1l-.2-1.6a6.45 6.45 0 0 0 .4-1l1.4-.8a1 1 0 0 0 .4-1.4l-.9-1.5a6.45 6.45 0 0 0 0-1.1l.9-1.5a1 1 0 0 0-.4-1.4zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"
        fill="currentColor"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 6a2.5 2.5 0 0 1 2.5 2.5V10H9.5V8.5A2.5 2.5 0 0 1 12 6zm-4 4V8.5a4 4 0 0 1 8 0V10h.5A1.5 1.5 0 0 1 18 11.5v6A1.5 1.5 0 0 1 16.5 19h-9A1.5 1.5 0 0 1 6 17.5v-6A1.5 1.5 0 0 1 7.5 10z"
        fill="currentColor"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 5.3 6 10v8.5A1.5 1.5 0 0 0 7.5 20h3v-4.5h3V20h3A1.5 1.5 0 0 0 18 18.5V10z"
        fill="currentColor"
      />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M7.5 5A2.25 2.25 0 0 1 9.75 7.25H12V6a2 2 0 0 0-2-2zm9 0H14a2 2 0 0 0-2 2v1.25h2.25A2.25 2.25 0 0 0 16.5 5zM4 9.25A1.25 1.25 0 0 1 5.25 8H11v3H4zM13 8h5.75A1.25 1.25 0 0 1 20 9.25V11h-7zM4 12.5h7V20H6.5A2.5 2.5 0 0 1 4 17.5zm9 7.5v-7.5h7v5A2.5 2.5 0 0 1 17.5 20z"
        fill="currentColor"
      />
    </svg>
  );
}

function ParentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M9 10.5A2.5 2.5 0 1 0 6.5 8 2.5 2.5 0 0 0 9 10.5zm7 0A2.5 2.5 0 1 0 13.5 8 2.5 2.5 0 0 0 16 10.5zM4.5 16.25A2.25 2.25 0 0 1 6.75 14h4.5A2.25 2.25 0 0 1 13.5 16.25v.75H4.5zm8.25 0A2.25 2.25 0 0 1 15 14h2.25A2.25 2.25 0 0 1 19.5 16.25V17H12.75z"
        fill="currentColor"
      />
    </svg>
  );
}

