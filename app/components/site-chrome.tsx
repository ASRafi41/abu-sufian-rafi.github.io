"use client";

import { ArrowUp, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { personalInfo } from "@/app/lib/data";
import { GithubMark, LinkedinMark } from "@/app/components/brand-icons";

const sections = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "competitive-programming",
  "education",
  "contact",
] as const;

const labelFor = (id: string) =>
  id === "competitive-programming" ? "CP" : id.replace("-", " ");

export function SiteChrome() {
  // Keep first render deterministic for SSR hydration.
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setIsDark(saved === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:pt-5">
        <nav
          className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-2 rounded-2xl border px-3 py-2 transition-all duration-300 md:rounded-full md:px-4 ${
            scrolled
              ? "border-white/10 bg-slate-950/70 shadow-xl shadow-black/30 backdrop-blur-xl"
              : "border-white/5 bg-slate-950/30 backdrop-blur-md"
          }`}
        >
          <Link
            href="#home"
            className="shrink-0 rounded-full px-2 text-base font-bold tracking-tight text-white"
          >
            ASR<span className="text-cyan-400">.</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {sections.map((id) => {
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`relative rounded-full px-3 py-1.5 text-sm capitalize transition-colors ${
                    isActive ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500/80 to-cyan-400/80 shadow-lg shadow-cyan-500/20"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {labelFor(id)}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200 sm:inline-flex"
            >
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="rounded-full border border-white/15 p-2 text-slate-200 lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="mx-3 mt-20 rounded-2xl border border-white/10 bg-slate-900/90 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 gap-2">
                {sections.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-3 py-2.5 text-sm capitalize transition ${
                      active === id
                        ? "bg-gradient-to-r from-blue-500/80 to-cyan-400/80 text-white"
                        : "bg-white/5 text-slate-200 hover:bg-white/10"
                    }`}
                  >
                    {labelFor(id)}
                  </a>
                ))}
              </div>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block rounded-xl bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-900"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 bg-slate-900/80 p-2.5 text-slate-200 backdrop-blur transition hover:scale-110 hover:border-cyan-300 hover:text-cyan-200"
          aria-label="GitHub"
        >
          <GithubMark size={18} />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 bg-slate-900/80 p-2.5 text-slate-200 backdrop-blur transition hover:scale-110 hover:border-cyan-300 hover:text-cyan-200"
          aria-label="LinkedIn"
        >
          <LinkedinMark size={18} />
        </a>
        <AnimatePresence>
          {scrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full border border-cyan-300/40 bg-slate-900/80 p-2.5 text-cyan-200 backdrop-blur transition hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
