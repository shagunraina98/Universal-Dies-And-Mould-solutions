"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { staggerContainer, fadeIn } from '../lib/animations';

interface Testimonial {
  name: string;
  quote: string;
  rating: number; // 1-5
}

const testimonials: Testimonial[] = [
  {
    name: 'Akash P.',
    quote: 'Their precision dies cut our setup time dramatically. Consistent quality every batch.',
    rating: 5,
  },
  {
    name: 'Manisha R.',
    quote: 'Custom mould delivered ahead of schedule and still exceeded tolerance expectations.',
    rating: 5,
  },
  {
    name: 'Vikram S.',
    quote: 'Reliable partnership – tooling that just works and support that is proactive.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-medium tracking-wider text-industrialBlue dark:text-accent uppercase">Trusted by manufacturers & shops</p>
      </div>
      <motion.div
        variants={staggerContainer(0.18, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            variants={fadeIn(idx * 0.05, 20)}
            className="flex h-full flex-col rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm ring-1 ring-transparent transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:ring-industrialBlue/20 dark:hover:ring-accent/30"
            aria-label={`Testimonial from ${t.name}`}
          >
            <div className="mb-4 flex gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < t.rating ? 'text-accent fill-accent/20 dark:fill-accent/30' : 'text-gray-300 dark:text-gray-600'}`}
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <blockquote className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-1">“{t.quote}”</blockquote>
            <div className="mt-4 text-sm font-semibold text-gray-900 dark:text-gray-100">{t.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
