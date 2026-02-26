import Link from "next/link";

export default function HomeScreen() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="relative w-[260px] h-[520px] rounded-[40px] border border-white/60 bg-gradient-to-b from-[#f5f7ff] via-[#eef6ff] to-[#e6f6ff] shadow-[0_32px_140px_rgba(15,23,42,0.45)] flex flex-col items-center pt-5 pb-6">
        <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_10%_0%,rgba(96,165,250,0.35),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(56,189,248,0.2),transparent_60%)]" />

        <div className="relative z-10 flex w-full items-center justify-between px-4">
          <IconButton tone="primary">
            <SparklesIcon />
          </IconButton>
          <Link href="/parent">
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </Link>
        </div>

        <div className="relative z-10 mt-6 mb-8">
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.45),transparent_70%)] blur-2xl opacity-80" />
          <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white shadow-[0_24px_60px_rgba(15,23,42,0.35)]">
            <div className="mb-3 flex items-center gap-4">
              <span className="h-4 w-2 rounded-full bg-slate-900/80" />
              <span className="h-4 w-2 rounded-full bg-slate-900/80" />
            </div>
            <div className="flex h-5 w-14 items-center justify-center rounded-full bg-[#dbeafe]">
              <div className="h-3 w-8 rounded-full bg-[#3b82f6]" />
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-auto flex w-full flex-col items-center gap-6">
          <div className="flex w-full items-center justify-between px-6">
            <Link href="/adventure">
              <IconButton tone="soft">
                <GamepadIcon />
              </IconButton>
            </Link>
            <Link href="/alphabet">
              <IconButton tone="soft">
                <BookIcon />
              </IconButton>
            </Link>
          </div>

          <button
            type="button"
            className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#2563eb] via-[#3b82f6] to-[#1d4ed8] shadow-[0_24px_70px_rgba(37,99,235,0.7)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
          >
            <MicrophoneIcon />
          </button>

          <div className="mt-1 h-1.5 w-40 overflow-hidden rounded-full bg-white/70">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#22c1c3]" />
          </div>
        </div>
      </section>
    </main>
  );
}

function IconButton({ children, tone = "default" }) {
  const base =
    "flex h-10 w-10 items-center justify-center rounded-2xl backdrop-blur border text-sky-600";
  const tones = {
    primary:
      "bg-white shadow-[0_10px_25px_rgba(59,130,246,0.45)] border-white/80",
    soft: "bg-white/80 border-white/70 shadow-[0_10px_25px_rgba(148,163,184,0.4)]",
    default:
      "bg-white/70 border-white/80 shadow-[0_10px_25px_rgba(148,163,184,0.45)]",
  };

  return <div className={`${base} ${tones[tone]}`}>{children}</div>;
}

function SparklesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 text-sky-500"
    >
      <path
        d="M5 4.5L6 7l2.5 1-2.5 1L5 11.5 4 9l-2.5-1L4 7 5 4.5zM13.5 4l1.2 3.1L18 8.5l-3.3 1.4-1.2 3.1-1.2-3.1L9 8.5l3.3-1.4L13.5 4zM17 13.5L18 16l2.5 1-2.5 1L17 20.5 16 18l-2.5-1L16 16l1-2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 text-slate-500"
    >
      <path
        d="M12 9.2A2.8 2.8 0 1 0 14.8 12 2.81 2.81 0 0 0 12 9.2zm8.2 2.1-1.4-.8a6.45 6.45 0 0 0-.4-1l.2-1.6a1 1 0 0 0-1-1.1h-1.7a6.45 6.45 0 0 0-1-.4L13.7 3a1 1 0 0 0-1.4 0l-1 1.4a6.45 6.45 0 0 0-1 .4H8.6a1 1 0 0 0-1 1.1l.2 1.6a6.45 6.45 0 0 0-.4 1l-1.4.8a1 1 0 0 0-.4 1.4l.9 1.5a6.45 6.45 0 0 0 0 1.1l-.9 1.5a1 1 0 0 0 .4 1.4l1.4.8a6.45 6.45 0 0 0 .4 1l-.2 1.6a1 1 0 0 0 1 1.1h1.7a6.45 6.45 0 0 0 1 .4l1 1.4a1 1 0 0 0 1.4 0l1-1.4a6.45 6.45 0 0 0 1-.4h1.7a1 1 0 0 0 1-1.1l-.2-1.6a6.45 6.45 0 0 0 .4-1l1.4-.8a1 1 0 0 0 .4-1.4l-.9-1.5a6.45 6.45 0 0 0 0-1.1l.9-1.5a1 1 0 0 0-.4-1.4zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"
        fill="currentColor"
      />
    </svg>
  );
}

function GamepadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 text-sky-500"
    >
      <path
        d="M7 10.5h1.5V9H10v1.5h1.5V12H10v1.5H8.5V12H7zm8.75-1.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 15.75 9zm-1 4a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 14.75 13z"
        fill="currentColor"
      />
      <path
        d="M7.5 6A4.5 4.5 0 0 0 3 10.5v2.75A4.75 4.75 0 0 0 7.75 18H9l1.5-1.5h3L15 18h1.25A4.75 4.75 0 0 0 21 13.25V10.5A4.5 4.5 0 0 0 16.5 6zm0 2h9A2.5 2.5 0 0 1 19 10.5v2.75A2.75 2.75 0 0 1 16.25 16H15l-1.5-1.5h-3L9 16H7.75A2.75 2.75 0 0 1 5 13.25V10.5A2.5 2.5 0 0 1 7.5 8z"
        fill="currentColor"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 text-sky-500"
    >
      <path
        d="M6.5 5A2.5 2.5 0 0 0 4 7.5v10A1.5 1.5 0 0 0 5.5 19H10a2 2 0 0 1 2 2V7.5A2.5 2.5 0 0 0 9.5 5zM9 8h1.5a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1z"
        fill="currentColor"
      />
      <path
        d="M13 7.5V21a2 2 0 0 1 2-2h4.5A1.5 1.5 0 0 0 21 17.5v-10A2.5 2.5 0 0 0 18.5 5H14.5A1.5 1.5 0 0 0 13 6.5zm3-.5h1.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1 0-1z"
        fill="currentColor"
      />
    </svg>
  );
}

function MicrophoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7 text-white"
    >
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

