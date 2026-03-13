"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";
import { experience } from "@/lib/experience";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="px-6 md:px-12 py-24 border-t border-black/10"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9] mb-16"
      >
        Where I&apos;ve
        <br />
        done the work.
      </motion.h2>

      {/* Accordion */}
      <div className="border-t border-black/10">
        {experience.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              className="border-b border-black/10"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                {/* Left: company + title */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-xl md:text-2xl font-black tracking-tight group-hover:opacity-60 transition-opacity duration-200">
                    {item.company}
                  </span>
                  <span className="text-xl md:text-2xl font-light text-black/40 tracking-tight">
                    {item.title}
                  </span>
                </div>

                {/* Right: years + chevron */}
                <div className="flex items-center gap-6 shrink-0 ml-4">
                  <span className="text-sm tracking-widest uppercase text-black/40 hidden sm:block">
                    {item.years}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="text-black/30 text-xl leading-none"
                  >
                    +
                  </motion.span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8">
                      <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
