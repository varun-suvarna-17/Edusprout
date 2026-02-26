export default function ParentDashboardScreen() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 bg-slate-100">
      <section className="w-[340px] h-[640px] rounded-[32px] bg-white shadow-[0_32px_120px_rgba(15,23,42,0.35)] border border-slate-100 flex flex-col overflow-hidden">
        <TopBar />
        <ContentArea />
        <BottomNav />
      </section>
    </main>
  );
}

function TopBar() {
  return (
    <header className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-slate-100">
      <h1 className="text-sm font-semibold text-slate-800">Parent Dashboard</h1>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 border border-slate-100"
        >
          <BellIcon />
        </button>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 border border-slate-100"
        >
          <SettingsIcon />
        </button>
      </div>
    </header>
  );
}

function ContentArea() {
  return (
    <div className="flex-1 overflow-y-auto px-5 pt-4 pb-3 space-y-5">
      <ProgressCard />
      <UsageControl />
      <LearningGoals />
      <ApprovedContent />
    </div>
  );
}

function ProgressCard() {
  return (
    <section className="rounded-3xl bg-slate-50 border border-slate-100 px-4 py-3 flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-white font-semibold">
        L
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-xs font-semibold text-slate-800">Leo&apos;s Progress</p>
        <p className="mt-1 text-[11px] text-slate-500 leading-snug">
          &quot;Learning is going great today!&quot;
        </p>
      </div>
    </section>
  );
}

function UsageControl() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
          Usage Control
        </p>
        <span className="text-[11px] text-slate-400">Daily Screen Time</span>
      </div>

      <div className="rounded-3xl bg-slate-50 border border-slate-100 px-4 py-4 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500">Limit how long Leo can play</span>
          <span className="font-semibold text-sky-500">45 min</span>
        </div>
        <Slider />
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>15 min</span>
          <span>120 min</span>
        </div>
      </div>
    </section>
  );
}

function Slider() {
  return (
    <div className="mt-1 h-1.5 rounded-full bg-slate-200 relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-2/3 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
      <div className="absolute left-2/3 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white border border-sky-400 shadow-[0_4px_10px_rgba(56,189,248,0.55)]" />
    </div>
  );
}

function LearningGoals() {
  return (
    <section className="space-y-3">
      <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
        Learning Goals
      </p>
      <div className="space-y-2.5">
        <GoalRow
          title="Alphabet Mastery"
          subtitle="Phonics and letter tracing"
          color="sky"
          completed
        />
        <GoalRow
          title="Number Counting"
          subtitle="Counting 1 to 20"
          color="amber"
          completed
        />
        <GoalRow
          title="Color Recognition"
          subtitle="Primary and secondary colors"
          color="violet"
        />
      </div>
    </section>
  );
}

function GoalRow({ title, subtitle, color, completed }) {
  const colorDot =
    color === "amber"
      ? "bg-amber-400"
      : color === "violet"
      ? "bg-violet-400"
      : "bg-sky-400";

  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-3.5 py-2.5">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${colorDot}`} />
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-slate-800">{title}</span>
          <span className="mt-0.5 text-[11px] text-slate-500">{subtitle}</span>
        </div>
      </div>
      {completed ? (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-white text-[10px]">
          ✓
        </span>
      ) : (
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-slate-300 text-[10px]">
          ✓
        </span>
      )}
    </div>
  );
}

function ApprovedContent() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
          Approved Content
        </p>
        <button
          type="button"
          className="text-[11px] font-semibold text-sky-500"
        >
          Add New
        </button>
      </div>

      <div className="space-y-2.5">
        <ContentRow
          title="Space Adventure Phonics"
          subtitle="Last played 2h ago"
        />
        <ContentRow
          title="Nature Sounds Library"
          subtitle="Last played yesterday"
        />
      </div>
    </section>
  );
}

function ContentRow({ title, subtitle }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-500 to-emerald-400" />
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-slate-800">{title}</span>
          <span className="mt-0.5 text-[11px] text-slate-500">{subtitle}</span>
        </div>
      </div>
      <span className="text-[11px] text-slate-400">⋯</span>
    </div>
  );
}

function BottomNav() {
  return (
    <nav className="border-t border-slate-100 px-4 py-2.5">
      <div className="flex items-center justify-between text-[10px]">
        <BottomNavItem label="Dashboard" active>
          <DashboardIcon />
        </BottomNavItem>
        <BottomNavItem label="Activity">
          <ActivityIcon />
        </BottomNavItem>
        <BottomNavItem label="Help">
          <HelpIcon />
        </BottomNavItem>
        <BottomNavItem label="Profile">
          <ProfileIcon />
        </BottomNavItem>
      </div>
    </nav>
  );
}

function BottomNavItem({ children, label, active }) {
  return (
    <button
      type="button"
      className={`flex flex-col items-center gap-1 ${
        active ? "text-sky-500" : "text-slate-400"
      }`}
    >
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-2xl ${
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
    </button>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 4a4 4 0 0 0-4 4v1.1c0 .62-.24 1.22-.68 1.66L6 12.1A1.5 1.5 0 0 0 7.06 14h9.88A1.5 1.5 0 0 0 18 12.1l-.32-.34A2.35 2.35 0 0 1 17 9.1V8a4 4 0 0 0-4-4zM10 16.5a2 2 0 1 0 4 0z"
        fill="currentColor"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 9.2A2.8 2.8 0 1 0 14.8 12 2.81 2.81 0 0 0 12 9.2zm8.2 2.1-1.4-.8a6.45 6.45 0 0 0-.4-1l.2-1.6a1 1 0 0 0-1-1.1h-1.7a6.45 6.45 0 0 0-1-.4L13.7 3a1 1 0 0 0-1.4 0l-1 1.4a6.45 6.45 0 0 0-1 .4H8.6a1 1 0 0 0-1 1.1l.2 1.6a6.45 6.45 0 0 0-.4 1l-1.4.8a1 1 0 0 0-.4 1.4l.9 1.5a6.45 6.45 0 0 0 0 1.1l-.9 1.5a1 1 0 0 0 .4 1.4l1.4.8a6.45 6.45 0 0 0 .4 1l-.2 1.6a1 1 0 0 0 1 1.1h1.7a6.45 6.45 0 0 0 1 .4l1 1.4a1 1 0 0 0 1.4 0l1-1.4a6.45 6.45 0 0 0 1-.4h1.7a1 1 0 0 0 1-1.1l-.2-1.6a6.45 6.45 0 0 0 .4-1l1.4-.8a1 1 0 0 0 .4-1.4l-.9-1.5a6.45 6.45 0 0 0 0-1.1l.9-1.5a1 1 0 0 0-.4-1.4zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"
        fill="currentColor"
      />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 5.75A1.75 1.75 0 0 1 6.75 4h3.5A1.75 1.75 0 0 1 12 5.75v3.5A1.75 1.75 0 0 1 10.25 11h-3.5A1.75 1.75 0 0 1 5 9.25zm8 0A1.75 1.75 0 0 1 14.75 4h3.5A1.75 1.75 0 0 1 20 5.75v2.5A1.75 1.75 0 0 1 18.25 10h-3.5A1.75 1.75 0 0 1 13 8.25zm-8 8A1.75 1.75 0 0 1 6.75 12h2.5A1.75 1.75 0 0 1 11 13.75v3.5A1.75 1.75 0 0 1 9.25 19h-2.5A1.75 1.75 0 0 1 5 17.25zm8 1.5A1.75 1.75 0 0 1 14.75 14h3.5A1.75 1.75 0 0 1 20 15.75v1.5A1.75 1.75 0 0 1 18.25 19h-3.5A1.75 1.75 0 0 1 13 17.25z"
        fill="currentColor"
      />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 12.75 9 8l4 8 3-4 3 4.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 4a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8zm0 11.5a1.1 1.1 0 1 1 1.1-1.1A1.1 1.1 0 0 1 12 15.5zm1.35-5.22-.75.45a1.47 1.47 0 0 0-.6 1.16V12h-1.4v-.26a2.85 2.85 0 0 1 1.18-2.3l.74-.45a1 1 0 0 0 .46-.84 1.15 1.15 0 0 0-2.26-.32l-1.34-.38A2.57 2.57 0 0 1 14.4 7.5a2.47 2.47 0 0 1-1.05 2.78z"
        fill="currentColor"
      />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 6.5A2.5 2.5 0 1 0 14.5 9 2.5 2.5 0 0 0 12 6.5zm0 4.5a4.5 4.5 0 1 1 4.5-4.5A4.5 4.5 0 0 1 12 11zM7 18.5A3.5 3.5 0 0 1 10.5 15h3A3.5 3.5 0 0 1 17 18.5V19h-1.5v-.5a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2V19H7z"
        fill="currentColor"
      />
    </svg>
  );
}

