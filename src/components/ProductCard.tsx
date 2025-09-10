"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  image: string; // image path or URL
  badge?: string;
}

export default function ProductCard({ title, description, image, badge }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-shadow"
    >
      {/* Badge */}
      {badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-900 shadow-sm">
          {badge}
        </span>
      )}
      <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={false}
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm md:text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100 line-clamp-1">
          {title}
        </h3>
        <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-1">
          {description}
        </p>
        <div className="mt-4">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-lg bg-accent hover:opacity-90 text-gray-900 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition"

            aria-label={`Enquire about ${title}`}
          >
            Enquire
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
