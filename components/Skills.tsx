"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const skills = [
  {
    number: "01",
    title: "Product Strategy",
    description:
      "Defining product vision, positioning, and multi-horizon roadmaps aligned to business goals and validated user needs.",
  },
  {
    number: "02",
    title: "Cross-functional Leadership",
    description:
      "Aligning engineering, design, data, and go-to-market teams around a shared plan — and keeping that alignment when things change.",
  },
  {
    number: "03",
    title: "User Discovery",
    description:
      "Qualitative and quantitative research to surface unmet needs, challenge assumptions, and validate hypotheses before committing to build.",
  },
  {
    number: "04",
    title: "Roadmap Planning",
    description:
      "Sequencing bets across discovery, delivery, and growth to maximize impact with finite time, budget, and team capacity.",
  },
  {
    number: "05",
    title: "Stakeholder Management",
    description:
      "Navigating competing priorities and building durable alignment with executives, clinical partners, and customers.",
  },
  {
    number: "06",
    title: "Go-to-Market",
    description:
      "Defining launch strategy, positioning, and the feedback loops that turn each release into a learning — not just a ship date.",
  },
  {
    number: "07",
    title: "Data & Metrics",
    description:
      "Establishing KPIs, interpreting product analytics, and using data to inform prioritization and measure outcomes — not just activity.",
  },
  {
    number: "08",
    title: "Agile Execution",
    description:
      "Running lean discovery and delivery loops that keep teams focused on outcomes, not outputs — and moving fast without losing coherence.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 py-24 border-t border-black/10"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9]"
        >
          The full toolkit,
          <br />
          end to end.
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-black/10">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: (i % 4) * 0.06,
              ease: EASE,
            }}
            className="group border-r border-b border-black/10 p-7 hover:bg-black hover:text-white transition-colors duration-400 cursor-default"
          >
            <span className="text-sm font-mono text-black/25 group-hover:text-white/30 block mb-6 transition-colors duration-400">
              {skill.number}
            </span>
            <h3 className="text-base font-bold mb-3 tracking-tight">
              {skill.title}
            </h3>
            <p className="text-sm text-black/45 group-hover:text-white/55 leading-relaxed transition-colors duration-400">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
