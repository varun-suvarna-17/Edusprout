"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuthStore } from "@/Store/useAuthStore";

export default function LoginPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message || "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = isSignUp ? handleSignUp : handleLogin;

  return (
    <div className="min-h-screen px-4 py-12 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_24px_80px_-40px_rgba(15,23,42,0.45)] md:grid-cols-2">
        <section className="bg-gradient-to-br from-teal-800 via-cyan-800 to-slate-900 p-10 text-white">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            AI Workspace
          </p>
          <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">
            AI Feedback Analyzer
          </h1>
          <p className="mt-4 max-w-md text-sm text-cyan-100/90 md:text-base">
            Upload feedback or paste text, then receive structured insights with a
            clean analysis history.
          </p>

          <div className="mt-10 space-y-3 text-sm text-cyan-50">
            <div className="rounded-xl border border-white/15 bg-white/10 p-4">
              Analyze comments, reports, and CSV data quickly.
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-4">
              Save every run with timestamps and full context.
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-4">
              Keep your current backend and workflow unchanged.
            </div>
          </div>
        </section>

        <section className="p-8 md:p-10">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Account Access
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
              {isSignUp ? "Create your account" : "Welcome back"}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {isSignUp
                ? "Use email and password to create a new workspace login."
                : "Sign in to continue analyzing feedback."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                Email
              </span>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-200"
                required
              />
            </label>

            <label className="block space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                Password
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-200"
                required
              />
            </label>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-[var(--danger)]">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[var(--brand)] py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? isSignUp
                  ? "Creating account..."
                  : "Signing in..."
                : isSignUp
                ? "Create Account"
                : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-sm text-[var(--muted)]">
            {isSignUp ? "Already registered?" : "Need a new account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp((prev) => !prev)}
              className="font-semibold text-teal-700 underline decoration-teal-500 underline-offset-4"
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>
        </section>
      </div>
    </div>
  );
}
