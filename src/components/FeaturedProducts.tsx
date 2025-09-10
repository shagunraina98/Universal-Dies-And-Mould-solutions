"use client";
import React, { useRef, useCallback } from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import { staggerContainer, slideUp } from '../lib/animations';

interface FeaturedProductsProps {
  title?: string;
}

const PRODUCTS = [
  {
    title: 'Injection Mould',
    description: 'High-precision injection mould engineered for durability.',
    image: '/product-1.jpeg',
    badge: 'Core'
  },
  {
    title: 'Die Casting Tool',
    description: 'Robust casting tool delivering consistent complex parts.',
    image: '/product-2.jpeg',
    badge: 'Pro'
  },
  {
    title: 'Tooling Assembly',
    description: 'Layered assembly enabling precise alignment & support.',
    image: '/product-3.jpeg',
    badge: 'New'
  },
  {
    title: 'Progressive Die',
    description: 'Optimized for high-volume progressive operations.',
    image: '/product-4.jpeg'
  },
  {
    title: 'Machining Block',
    description: 'Modular block for adaptable machining workflows.',
    image: '/product-5.jpeg'
  }
];

export default function FeaturedProducts({ title = 'Featured Products' }: FeaturedProductsProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const cardWidth = card ? card.offsetWidth : 280;
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  }, []);

  return (
    <section className="relative">
      <div className="flex items-center justify-between mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <div className="hidden sm:flex items-center gap-2">
          <ArrowButton direction="left" onClick={() => scrollByCard(-1)} />
          <ArrowButton direction="right" onClick={() => scrollByCard(1)} />
        </div>
      </div>
      {/* Scroll area */}
      <div className="group relative">
        {/* Mobile overlay gradient hints */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <motion.div
          ref={scrollerRef}
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700"
          role="list"
          aria-label="Featured products horizontal carousel"
        >
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.title + i}
              variants={slideUp}
              data-card
              className="snap-start shrink-0 w-[260px] sm:w-[280px]"
              role="listitem"
            >
              <ProductCard {...p} />
            </motion.div>
          ))}
        </motion.div>
        {/* Floating buttons (show on small screens as well) */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-1 sm:hidden">
          <ArrowButton direction="left" onClick={() => scrollByCard(-1)} />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-1 sm:hidden">
          <ArrowButton direction="right" onClick={() => scrollByCard(1)} />
        </div>
      </div>
    </section>
  );
}

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

function ArrowButton({ direction, onClick }: ArrowButtonProps) {
  const isLeft = direction === 'left';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isLeft ? 'Scroll products left' : 'Scroll products right'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-industrialBlue dark:focus-visible:ring-accent transition"
    >
      <span className="sr-only">{isLeft ? 'Previous items' : 'Next items'}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        {isLeft ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}
