"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Award, Target, ClipboardList, Users, BarChart3, GitMerge, RefreshCw, GraduationCap } from "lucide-react";

type Expertise = { title: string; desc: string };
type Achievement = { value: string; label: string };
type Certification = { name: string; issuer: string; year: string };
type Education = { name: string; issuer: string; year: string };

const expertiseIcons = [Target, ClipboardList, Users, BarChart3, GitMerge, RefreshCw];

export default function ProjectManagement() {
  const t = useTranslations("pm");

  const methodologies = t.raw("methodologies") as string[];
  const expertise = t.raw("expertise") as Expertise[];
  const achievements = t.raw("achievements") as Achievement[];
  const certifications = t.raw("certifications") as Certification[];
  const education = t.raw("education") as Education[];
  return (
    <section id="project-management" className="bg-[#071a33] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center text-3xl font-bold text-cyan-300 md:text-4xl"
        >
          {t("title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-slate-300"
        >
          {t("summary")}
        </motion.p>

        {/* Metodologías */}
        <div className="mb-16">
          <h3 className="mb-5 text-xl font-bold text-cyan-300">
            {t("methodologiesTitle")}
          </h3>
          <div className="flex flex-wrap gap-3">
            {methodologies.map((m, i) => (
              <motion.span
                key={m}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-full border border-slate-600/70 bg-slate-900/60 px-4 py-1.5 text-sm font-semibold text-slate-200"
              >
                {m}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Áreas de expertise */}
        <div className="mb-16">
          <h3 className="mb-6 text-xl font-bold text-cyan-300">
            {t("expertiseTitle")}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((e, index) => {
              const Icon = expertiseIcons[index % expertiseIcons.length];
              return (
                <motion.article
                  key={e.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-slate-600/70 bg-slate-900/60 p-6 shadow-lg transition"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h4 className="font-bold text-slate-100">{e.title}</h4>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">{e.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Logros */}
        <div className="mb-16">
          <h3 className="mb-6 text-xl font-bold text-cyan-300">
            {t("achievementsTitle")}
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {achievements.map((a, index) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-slate-600/70 bg-slate-900/60 p-8 text-center shadow-lg transition"
              >
                <div className="mb-2 text-4xl font-bold text-cyan-300">
                  {a.value}
                </div>
                <p className="text-sm text-slate-400">{a.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-cyan-300">
            {t("certificationsTitle")}
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {certifications.map((c, index) => (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="flex items-start gap-4 rounded-2xl border border-slate-600/70 bg-slate-900/60 p-6 shadow-lg transition"
              >
                <Award className="mt-0.5 h-6 w-6 shrink-0 text-cyan-300" />
                <div>
                  <h4 className="font-bold text-slate-100">{c.name}</h4>
                  <p className="text-sm text-slate-400">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
                {/* Formación */}
        <div className="mt-16">
          <h3 className="mb-6 text-xl font-bold text-cyan-300">
            {t("educationTitle")}
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {education.map((e, index) => (
              <motion.article
                key={e.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="flex items-start gap-4 rounded-2xl border border-slate-600/70 bg-slate-900/60 p-6 shadow-lg transition"
              >
                <GraduationCap className="mt-0.5 h-6 w-6 shrink-0 text-cyan-300" />
                <div>
                  <h4 className="font-bold text-slate-100">{e.name}</h4>
                  <p className="text-sm text-slate-400">
                    {e.issuer}{e.year ? ` · ${e.year}` : ""}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}