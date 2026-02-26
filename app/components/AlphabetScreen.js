import Link from "next/link";

export default function AlphabetScreen() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 bg-slate-100">
      <section className="relative w-[320px] h-[640px] rounded-[32px] bg-[#fefcf5] shadow-[0_32px_120px_rgba(15,23,42,0.35)] border border-white overflow-hidden flex flex-col">
        <HeaderBar />
        <ProgressStrip />
        <LessonCard />
        <EncouragementCard />
        <SpeakArea />
      </section>
    </main>
  );
}

function HeaderBar() {
  return (
    <header className="flex items-center justify-between px-5 pt-4 pb-3">
      <Link
        href="/"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(15,23,42,0.18)]"
      >
        <span className="inline-block h-3 w-3 border-l-2 border-b-2 border-slate-500 rotate-45 translate-x-[1px]" />
      </Link>

      <div className="flex flex-col items-center gap-0.5">
        <p className="text-xs tracking-[0.16em] font-semibold text-slate-400 uppercase">
          Alphabet Fun
        </p>
        <p className="text-[11px] font-medium text-amber-500">Level 1</p>
      </div>

      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(15,23,42,0.18)]"
      >
        <DotsIcon />
      </button>
    </header>
  );
}

function ProgressStrip() {
  return (
    <div className="flex items-center justify-between px-6 pb-3 text-[11px] text-slate-500">
      <span className="font-medium tracking-wide">Your Progress</span>
      <span className="font-semibold text-emerald-500">1 / 26</span>
    </div>
  );
}

function LessonCard() {
  return (
    <section className="mx-5 rounded-[28px] bg-[#fff9e7] border border-[#f7e3b9] shadow-[0_18px_40px_rgba(250,204,21,0.25)] px-6 pt-8 pb-7 relative overflow-hidden">
      <BackgroundShapes />

      <div className="relative z-10">
        <p className="text-[56px] leading-none font-extrabold text-[#2563eb]">
          Aa
        </p>

        <div className="mt-4 flex items-center justify-center">
          <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-white to-slate-100 shadow-[0_18px_40px_rgba(148,163,184,0.45)] flex items-center justify-center overflow-hidden">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[#f97316] via-[#f43f5e] to-[#b91c1c]" />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold tracking-[0.16em] text-slate-700 uppercase">
            Apple
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Can you say &quot;Apple&quot;?
          </p>
        </div>
      </div>
    </section>
  );
}

function BackgroundShapes() {
  return (
    <>
      <div className="pointer-events-none absolute -left-6 top-10 h-16 w-16 rounded-full bg-[#fde68a] opacity-60" />
      <div className="pointer-events-none absolute -right-10 bottom-4 h-20 w-20 rounded-full bg-[#f97316] opacity-20" />
      <div className="pointer-events-none absolute right-8 top-8 h-6 w-6 rounded-full border border-amber-300" />
    </>
  );
}

function EncouragementCard() {
  return (
    <section className="mt-4 px-5">
      <div className="rounded-2xl bg-white border border-emerald-100 shadow-[0_12px_32px_rgba(16,185,129,0.18)] px-4 py-3 flex items-center justify-between text-[11px]">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.18em] text-emerald-400 font-semibold">
            You&apos;re doing great!
          </span>
          <span className="mt-1 text-[11px] text-slate-500">
            Keep practicing the sound of &quot;A&quot;.
          </span>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white text-sm font-bold">
          ⭐
        </div>
      </div>
    </section>
  );
}

function SpeakArea() {
  return (
    <footer className="mt-auto pt-6 pb-7 px-5">
      <div className="relative flex flex-col items-center justify-center rounded-[32px] bg-white shadow-[0_-10px_40px_rgba(15,23,42,0.18)] pt-7 pb-6">
        <div className="absolute -top-10 flex flex-col items-center gap-1">
          <div className="flex gap-1">
            <span className="h-4 w-1 rounded-full bg-sky-300" />
            <span className="h-6 w-1 rounded-full bg-sky-400" />
            <span className="h-8 w-1 rounded-full bg-sky-500" />
            <span className="h-5 w-1 rounded-full bg-sky-400" />
            <span className="h-3 w-1 rounded-full bg-sky-300" />
          </div>
        </div>

        <button
          type="button"
          className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] via-[#3b82f6] to-[#1d4ed8] shadow-[0_24px_70px_rgba(37,99,235,0.7)] border-4 border-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
        >
          <MicIcon />
        </button>

        <p className="mt-4 text-[11px] tracking-[0.22em] text-slate-400 uppercase">
          Tap and speak
        </p>
      </div>
    </footer>
  );
}

function DotsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-slate-500">
      <circle cx="5" cy="12" r="1.4" fill="currentColor" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      <circle cx="19" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 text-white">
      <path
        d="M12 4a2.5 2.5 0 0 0-2.5 2.5v5A2.5 2.5 0 0 0 12 14a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12 4z"
        fill="currentColor"
      />
      <path
        d="M7.5 11.5A.75.75 0 0 0 6 11.5 6 6 0 0 0 12 17.5V19H9.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5H12V17.5A6 6 0 0 0 18 11.5a.75.75 0 0 0-1.5 0 4.5 4.5 0 0 1-9 0 .75.75 0 0 0-1.5 0z"
        fill="currentColor"
      />
    </svg>
  );
}

