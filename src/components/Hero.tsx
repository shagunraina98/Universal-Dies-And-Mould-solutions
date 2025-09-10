"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slideUp, fadeIn, staggerContainer } from '../lib/animations';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[72vh] flex items-center overflow-hidden">
      {/* Background image (SVG optimized with next/image) */}
      <Image
        src="/hero.jpeg"
        alt=""
        fill
        priority
        role="presentation"
        aria-hidden="true"
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-900/80" aria-hidden="true" />

      <motion.div
        variants={staggerContainer(0.18, 0.05)}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            variants={fadeIn(0.05, 20)}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md"
          >
            Universal Dies &amp; Mould Solutions
          </motion.h1>
          <motion.h2
            variants={slideUp}
            className="mt-6 text-lg sm:text-2xl font-medium text-gray-200 max-w-3xl mx-auto"
          >
            High-quality dies and moulds for precision manufacturing
          </motion.h2>
          <motion.div
            variants={fadeIn(0.2, 30)}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="px-6 py-3 text-sm sm:text-base rounded-lg bg-accent hover:opacity-90 text-gray-900 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition">
              Get a Quote
            </Link>
            <Link href="/products" className="px-6 py-3 text-sm sm:text-base rounded-lg bg-accent hover:opacity-90 text-gray-900 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition">
              View Products
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
