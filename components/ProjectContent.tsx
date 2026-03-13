"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type {
  Project,
  ProjectAct,
  ActIteration,
  BusinessGoal,
  ProcessPhase,
  ResearchQuote,
} from "@/lib/projects";
import { EASE } from "@/lib/motion";

function PlaceholderImage({
  label,
  tall = false,
}: {
  label: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`w-full bg-black/[0.04] flex items-center justify-center ${tall ? "h-[60vw] md:h-[50vh]" : "h-[45vw] md:h-[40vh]"}`}
    >
      <span className="text-[10px] tracking-[0.3em] uppercase text-black/20">
        {label}
      </span>
    </div>
  );
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

function BusinessGoalsSection({ goals }: { goals: BusinessGoal[] }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="px-6 md:px-12 py-20 border-b border-black/10"
    >
      <h2 className="text-3xl font-bold tracking-[-.03em] uppercase text-black mb-10">
        Business Goals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.06]">
        {goals.map((goal) => (
          <div key={goal.number} className="bg-white p-8 flex flex-col gap-6">
            <span className="text-5xl md:text-6xl font-black tracking-tight text-black/15">
              {goal.number}
            </span>
            <div>
              <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-black/80 leading-snug mb-3">
                {goal.title}
              </h3>
              {goal.description && (
                <p className="text-sm text-black/55 leading-relaxed">
                  {goal.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function ProcessPhasesSection({ phases }: { phases: ProcessPhase[] }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="px-6 md:px-12 py-20 border-b border-black/10"
    >
      <h2 className="text-3xl font-bold tracking-[-.03em] uppercase text-black mb-10">
        Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-black/[0.06]">
        {phases.map((phase) => (
          <div
            key={phase.number}
            className="bg-white p-8 flex flex-col gap-6"
          >
            <span className="text-[10px] font-mono text-black/25">
              {phase.number}
            </span>
            <div>
              <h3 className="text-sm font-black tracking-[0.1em] uppercase text-black mb-3">
                {phase.name}
              </h3>
              <p className="text-[11px] text-black/40 leading-relaxed italic">
                {phase.question}
              </p>
            </div>
            <ul className="space-y-2 mt-auto pt-2 border-t border-black/[0.06]">
              {phase.methods.map((method) => (
                <li key={method} className="flex items-center gap-2.5">
                  <div className="w-1 h-1 bg-black/25 shrink-0" />
                  <span className="text-[11px] tracking-widest uppercase text-black/50">
                    {method}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function ResearchQuoteSection({ data }: { data: ResearchQuote }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="px-6 md:px-12 py-20 border-b border-black/10"
    >
      <h2 className="text-3xl font-bold tracking-[-.03em] uppercase text-black mb-10">
        What We Heard
      </h2>
      <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-black/80 max-w-3xl mb-3 border-l-2 border-black/20 pl-8">
        &ldquo;{data.quote}&rdquo;
      </blockquote>
      <p className="text-xs tracking-widest uppercase text-black/35 pl-8 mb-14">
        — {data.author}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.insights.map((insight, i) => (
          <div
            key={i}
            className="border border-black/10 bg-black/[0.02] p-8"
          >
            <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-black/80 mb-4">
              {insight.title}
            </h3>
            <p className="text-sm text-black/55 leading-relaxed">
              {insight.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function ActSection({ act }: { act: ProjectAct }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="px-6 md:px-12 py-20 border-b border-black/10"
    >
      {/* Act header */}
      <div className="mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-black/35 mb-2">
          Act {act.number} · {act.surface.split("·")[0].trim()}
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
          {act.name}
        </h2>
      </div>

      {/* Outcome */}
      <p className="text-3xl font-bold tracking-[-.03em] uppercase text-black mb-8 max-w-3xl">
        {act.outcome}
      </p>

      {/* Product decision */}
      <p className="text-base md:text-lg text-black/65 leading-relaxed max-w-2xl mb-14">
        {act.decision}
      </p>

      {/* Research insights */}
      {act.researchInsights && (
        <div className="mb-14 border-t border-black/10 pt-10">
          <h3 className="text-3xl font-bold tracking-[-.03em] uppercase text-black mb-6">
            Key Insights
          </h3>
          <ul className="space-y-5 max-w-2xl">
            {act.researchInsights.map((insight, i) => (
              <li key={insight} className="flex gap-5">
                <span className="text-xs font-mono text-black/25 flex-shrink-0 pt-[3px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm md:text-base text-black/65 leading-relaxed">
                  {insight}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Iterations */}
      {act.iterations && (
        <div className="mb-14 border-t border-black/10 pt-10">
          <p className="text-xs tracking-[0.3em] uppercase text-black/35 mb-8">
            What We Tested
          </p>
          <div className="space-y-16">
            {act.iterations.map((iteration: ActIteration) => (
              <div key={iteration.title} className="bg-white">
                <div className="py-8 pb-6">
                  <h3 className="text-3xl font-bold tracking-[-.03em] uppercase text-black mb-3">
                    {iteration.title}
                  </h3>
                  <p className="text-base md:text-lg text-black/65 leading-relaxed max-w-2xl">
                    {iteration.description}
                  </p>
                </div>
                {iteration.image ? (
                  <Image
                    src={iteration.image}
                    alt={iteration.imageLabel ?? iteration.title}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="w-full md:w-[60%] h-auto"
                  />
                ) : (
                  <div className="mx-8 mb-8 bg-black/[0.04] flex items-center justify-center h-48">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-black/20">
                      {iteration.imageLabel ?? "Wireframe"}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Solution */}
      {act.solutionText && (
        <div className="mb-14 border-t border-black/10 pt-10">
          <h3 className="text-3xl font-bold tracking-[-.03em] uppercase text-black mb-6">
            What Shipped
          </h3>
          <p className="text-base md:text-lg text-black/65 leading-relaxed max-w-2xl">
            {act.solutionText}
          </p>
        </div>
      )}

      {/* Images */}
      {act.images && act.images.length > 0 ? (
        <div className="flex flex-col gap-8">
          {act.images.map((src, i) => (
            <Image
              key={`${src}-${i}`}
              src={src}
              alt={`${act.name} interface`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full max-w-[80vw] h-auto block"
            />
          ))}
        </div>
      ) : (
        <PlaceholderImage label={`${act.name} — Interface`} />
      )}
    </motion.section>
  );
}

export default function ProjectContent({ project }: { project: Project }) {
  return (
    <article>
      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="px-6 md:px-12 py-8 border-b border-black/10"
      >
        {project.heroImage ? (
          <Image
            src={project.heroImage}
            alt={project.title}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 60vw"
            className="w-[75vw] h-auto mx-auto block"
            priority
          />
        ) : (
          <PlaceholderImage label="Hero Image — Full Width" tall />
        )}
      </motion.div>

      {/* Context */}
      {project.context && (
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="px-6 md:px-12 py-14 border-b border-black/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {(
              [
                { label: "Role", value: project.context.role },
                { label: "Timeline", value: project.context.timeline },
                { label: "Team", value: project.context.team },
                { label: "Scope", value: project.context.scope },
              ] as { label: string; value: string }[]
            ).map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs tracking-[0.3em] uppercase text-black/35 mb-2">
                  {label}
                </p>
                <p className="text-sm text-black/70 leading-relaxed">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Problem */}
      {project.problem && (
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="px-6 md:px-12 py-20 border-b border-black/10"
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
            <h2 className="text-3xl font-bold tracking-[-.03em] uppercase text-black pt-1">
              The Problem
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-black/80">
              {project.problem}
            </p>
          </div>
        </motion.section>
      )}

      {/* Business Goals */}
      {project.businessGoals && (
        <BusinessGoalsSection goals={project.businessGoals} />
      )}

      {/* Process Phases */}
      {project.processPhases && (
        <ProcessPhasesSection phases={project.processPhases} />
      )}

      {/* Research quote */}
      {project.researchQuote && (
        <ResearchQuoteSection data={project.researchQuote} />
      )}

      {/* Acts */}
      {project.acts && project.acts.map((act) => (
        <ActSection key={act.number} act={act} />
      ))}

      {/* Systems note */}
      {project.systemsNote && (
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="px-6 md:px-12 py-20 border-b border-black/10"
        >
          <h2 className="text-3xl font-bold tracking-[-.03em] uppercase text-black mb-6">
            Cross-surface Coherence
          </h2>
          <p className="text-base md:text-lg text-black/65 leading-relaxed max-w-2xl">
            {project.systemsNote}
          </p>
        </motion.section>
      )}

      {/* Outcome */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="px-6 md:px-12 py-20"
      >
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <h2 className="text-3xl font-bold tracking-[-.03em] uppercase text-black pt-1">
            Outcome
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-black/65">
            {project.outcome}
          </p>
        </div>
      </motion.section>
    </article>
  );
}
