"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 transition-all duration-300 hover:border-white/20"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-white pr-4">{item.question}</span>
              <span className="flex-shrink-0 p-1 rounded-full bg-white/5 text-gray-400 group-hover:text-white transition-colors">
                {isOpen ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 text-gray-300 leading-relaxed text-pretty text-base">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
