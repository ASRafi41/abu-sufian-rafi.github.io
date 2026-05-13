"use client";

import { Reveal, TypingRoles, AnimatedCounter } from "@/app/components/ui";
import { GithubMark, LinkedinMark } from "@/app/components/brand-icons";
import {
  cpHighlights,
  cpPlatforms,
  education,
  experiences,
  personalInfo,
  projects,
  skills,
  stats,
} from "@/app/lib/data";
import {
  Activity,
  ArrowUpRight,
  Award,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  School,
  Send,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Image from "next/image";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Write at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function PortfolioSections() {
  const { register, handleSubmit, reset, formState } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });
  const [opened, setOpened] = useState(false);

  const onSubmit = (values: ContactFormData) => {
    const subject = `Portfolio inquiry from ${values.name}`;
    const body = `${values.message}\n\n— ${values.name}\n${values.email}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      personalInfo.email,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Open Gmail compose in a new tab — works in any browser regardless of OS mail config.
    window.open(gmail, "_blank", "noopener,noreferrer");
    setOpened(true);
    reset();
  };

  return (
    <main className="mx-auto max-w-6xl space-y-28 px-4 pb-28 pt-24 md:px-8 md:pt-32">
      {/* ---------------- HERO ---------------- */}
      <section
        id="home"
        className="scroll-mt-28 space-y-12 md:space-y-16"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-8 top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-8 left-1/3 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>
        <Reveal className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-xl md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_280px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Available for work
              </span>
              <p className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{personalInfo.name}</span>
              </p>
              <p className="mt-2 text-2xl tracking-tight text-slate-200 md:text-3xl">{personalInfo.title}</p>
              <p className="mt-4 max-w-xl text-lg text-slate-300">{personalInfo.tagline}</p>
              <p className="mt-3 text-base text-slate-400">
                <TypingRoles roles={["Software Engineer", "Flutter Developer", "Competitive Programmer"]} />
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="btn-primary">
                  Download Resume
                </a>
                <a href="#projects" className="btn-secondary">View Projects</a>
                <a href="#contact" className="btn-secondary">Contact Me</a>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="icon-btn">
                  <GithubMark size={16} /> GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="icon-btn">
                  <LinkedinMark size={16} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="mx-auto h-auto w-56 overflow-hidden rounded-3xl border border-cyan-300/30 bg-slate-900/70 p-2 shadow-xl shadow-cyan-500/20">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                width={224}
                height={224}
                className="h-auto w-full rounded-2xl object-contain"
                priority
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="scroll-mt-28 space-y-8">
        <Reveal>
          <h2 className="section-title">About</h2>
        </Reveal>

        <Reveal>
          <p className="max-w-none text-slate-300 leading-relaxed">
            I&apos;m a Software Engineer with a Computer Science &amp; Engineering background,
            focused on building reliable digital products that solve real user problems. I bring a
            competitive programming mindset to software development, with strong analytical
            thinking and disciplined debugging.
          </p>
          <p className="mt-4 max-w-none text-slate-300 leading-relaxed">
            My primary stack includes Flutter and Clean Architecture, and I enjoy collaborating
            across product and engineering teams to ship maintainable features end-to-end. I care
            about code quality, performance, and creating smooth user experiences.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => {
            const StatIcon: LucideIcon = [Code2, Activity, Trophy, Award][i] ?? Sparkles;
            return (
              <Reveal key={item.label}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card flex flex-col items-center text-center"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-200">
                    <StatIcon size={20} />
                  </div>
                  <div className="mt-3">
                    <AnimatedCounter to={item.value} suffix={item.suffix} />
                  </div>
                  <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------------- EXPERIENCE ---------------- */}
      <section id="experience" className="scroll-mt-28 space-y-8">
        <Reveal>
          <h2 className="section-title">Experience</h2>
        </Reveal>
        <div className="relative border-l border-cyan-400/30 pl-6">
          {experiences.map((exp) => (
            <Reveal key={`${exp.company}-${exp.role}`} className="mb-8">
              <div className="glass-card relative">
                <div className="absolute -left-[34px] top-8 h-4 w-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                <h3 className="text-xl font-semibold text-white">
                  {exp.role} — {exp.company}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{exp.period} · {exp.location}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="scroll-mt-28 space-y-6">
        <Reveal>
          <h2 className="section-title">Projects</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              whileHover={{ y: -8, scale: 1.01 }}
              key={project.title}
              className="glass-card group flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-cyan-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a href={project.github} className="icon-btn" target="_blank" rel="noreferrer">
                  <GithubMark size={16} /> GitHub
                </a>
                {project.demo && project.demo !== "#" && (
                  <a href={project.demo} className="icon-btn" target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section id="skills" className="scroll-mt-28 space-y-6">
        <Reveal>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle mt-3">A toolbox built around mobile, game, and full-stack development.</p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map(({ group, items }) => (
            <Reveal key={group} className="glass-card">
              <h3 className="text-lg font-semibold text-white">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- COMPETITIVE PROGRAMMING ---------------- */}
      <section id="competitive-programming" className="scroll-mt-28 space-y-6">
        <Reveal>
          <h2 className="section-title">Competitive Programming</h2>
          <p className="section-subtitle mt-3">
            2,000+ problems solved across platforms, 300+ online contests, and 20+ onsite contests.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cpPlatforms.map((p) => (
            <motion.a
              key={p.platform}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              className="glass-card group flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-white">{p.platform}</span>
                <ArrowUpRight size={18} className="text-slate-400 transition group-hover:text-cyan-300" />
              </div>
              <span className="mt-1 text-sm text-cyan-200">@{p.handle}</span>
            </motion.a>
          ))}
        </div>

        <Reveal className="glass-card">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
            <Trophy size={18} className="text-cyan-300" /> Highlights & Achievements
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {cpHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 size={16} className="mt-1 shrink-0 text-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ---------------- EDUCATION ---------------- */}
      <section id="education" className="scroll-mt-28 space-y-6">
        <Reveal>
          <h2 className="section-title flex items-center gap-3">
            <GraduationCap className="text-cyan-300" /> Education
          </h2>
          <p className="section-subtitle mt-3">My academic journey from school to university.</p>
        </Reveal>
        <div className="space-y-4">
          {education.map((item, idx) => {
            const Icon: LucideIcon =
              item.icon === "GraduationCap"
                ? GraduationCap
                : item.icon === "BookOpenCheck"
                  ? BookOpenCheck
                  : School;
            return (
              <Reveal key={item.institution}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card group relative overflow-hidden"
                >
                  <div
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 to-cyan-600"
                    aria-hidden
                  />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-200">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                          {idx === 0 ? "Undergraduate" : idx === 1 ? "Higher Secondary" : "Secondary"}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold text-white">
                          {item.institution}
                        </h3>
                        <p className="mt-1 text-slate-300">{item.degree}</p>
                        {item.detail && (
                          <p className="mt-1 text-sm font-medium text-cyan-200">{item.detail}</p>
                        )}
                        <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
                          <MapPin size={14} /> {item.location}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                      <CalendarDays size={14} className="text-cyan-300" /> {item.period}
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="scroll-mt-28 space-y-6">
        <Reveal>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle mt-3">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <Reveal className="glass-card">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input {...register("name")} placeholder="Your Name" className="input-field" />
              <input {...register("email")} placeholder="Your Email" className="input-field" />
              <textarea {...register("message")} rows={5} placeholder="Your Message" className="input-field" />
              {Object.values(formState.errors).length > 0 && (
                <p className="text-sm text-rose-300">
                  {Object.values(formState.errors)[0]?.message as string}
                </p>
              )}
              <button type="submit" className="btn-primary">
                <Send size={16} /> Send Message
              </button>
              {opened && (
                <p className="flex items-center gap-2 text-sm text-cyan-300">
                  <CheckCircle2 size={16} /> Compose window opened — review and click Send there to deliver.
                </p>
              )}
            </form>
          </Reveal>
          <Reveal className="glass-card space-y-4 text-sm">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-200">
              <Mail size={18} className="text-cyan-300" /> {personalInfo.email}
            </a>
            <p className="flex items-center gap-3 text-slate-300">
              <MapPin size={18} className="text-cyan-300" /> {personalInfo.location}
            </p>
            <div className="flex gap-3 pt-2">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="icon-btn">
                <GithubMark size={16} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="icon-btn">
                <LinkedinMark size={16} /> LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
