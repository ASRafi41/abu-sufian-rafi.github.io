"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TypingRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const currentRole = useMemo(() => roles[index % roles.length], [roles, index]);

  useEffect(() => {
    const speed = deleting ? 45 : 80;
    const timer = setTimeout(() => {
      if (!deleting && typed.length < currentRole.length) {
        setTyped(currentRole.slice(0, typed.length + 1));
      } else if (!deleting && typed.length === currentRole.length) {
        setTimeout(() => setDeleting(true), 900);
      } else if (deleting && typed.length > 0) {
        setTyped(currentRole.slice(0, typed.length - 1));
      } else {
        setDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [typed, currentRole, deleting]);

  return (
    <span className="text-cyan-300">
      {typed}
      <span className="animate-pulse text-sky-400">|</span>
    </span>
  );
}

export function AnimatedCounter({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const totalFrames = 45;
    const timer = setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      setCount(Math.round(to * progress));
      if (frame >= totalFrames) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <div ref={ref} className="text-3xl font-bold text-white">
      {count}
      {suffix}
    </div>
  );
}
