"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiSpringboot,
  SiNodedotjs,
  SiMysql,
  SiMariadb,
  SiDocker,
  SiGit,
  SiGithub,
  SiJira,
  SiPostman,
  SiWordpress,
  SiPhp,
  SiLaravel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Wrench, Palette, Server } from "lucide-react";

const skillGroups = [
  {
    key: "frontend",
    icon: Palette,
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    key: "backend",
    icon: Server,
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Postman", icon: SiPostman },
      { name: "WordPress", icon: SiWordpress },
    ],
  },
  {
    key: "devops",
    icon: Wrench,
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MariaDB", icon: SiMariadb },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Jira", icon: SiJira },
    ],
  },
];

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="habilidades" className="bg-[#071a33] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center text-3xl font-bold text-cyan-300 md:text-4xl"
        >
          {t("title")}
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <motion.article
                key={group.key}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-slate-600/70 bg-slate-900/60 p-6 shadow-lg transition"
              >
                <div className="mb-5 flex items-center gap-3 border-b border-slate-600/70 pb-5">
                  <GroupIcon className="h-5 w-5 text-cyan-300" />
                  <h3 className="text-xl font-bold text-cyan-300">
                    {t(`groups.${group.key}`)}
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5">
                  {group.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.1 + skillIndex * 0.04,
                        }}
                        whileHover={{ scale: 1.12, y: -4 }}
                        className="flex flex-col items-center justify-center gap-2 text-center"
                      >
                        <Icon className="h-10 w-10 text-cyan-300" />
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}