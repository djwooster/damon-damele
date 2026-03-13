"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { EASE } from "@/lib/motion";

export default function CaseStudy() {
  const project = projects[0];

  return (
    <section id="work" className="px-6 md:px-12 py-24 border-t border-black/10">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-md tracking-widest uppercase text-black/60">
          Case Study
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="group flex flex-col gap-6 py-4"
        >
          {/* Thumbnail */}
          <motion.div
            className="w-full h-[60vw] md:h-[40vw] lg:h-[32vw] overflow-hidden relative bg-black/4"
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black/8 to-transparent">
                <span className="text-[10px] tracking-[0.3em] uppercase text-black/20">
                  Preview
                </span>
              </div>
            )}
          </motion.div>

          {/* Meta */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm tracking-widest uppercase text-black/40 mb-2">
                {project.client} · {project.year}
              </p>
              <h3 className="text-xl md:text-3xl font-black tracking-tight leading-tight transition-transform duration-300 ease-out group-hover:translate-x-2">
                {project.title}
              </h3>
              <p className="text-base text-black/50 mt-3 max-w-2xl leading-relaxed">
                {project.tldr?.slice(0, 160)}…
              </p>
            </div>
            <span className="text-xl text-black/20 group-hover:text-black group-hover:translate-x-2 transition-all duration-300 shrink-0 mt-1">
              →
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-black/15 text-[10px] font-medium tracking-widest uppercase text-black/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
