"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../lib/animations';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={fadeIn(0, -8)}
      className="sticky top-0 z-50 border-b border-gray-200/60 dark:border-gray-800/60 bg-white/90 dark:bg-gray-950/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-950/70"
    >
      <div className="h-16 flex items-center px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Universal Dies & Mould Solutions Home">
            <Image
              src="/logo.png"
              alt="Universal Dies & Mould Solutions logo"
              width={40}
              height={32}
              priority
              className="h-8 w-auto rounded-sm"
            />
            <span className="hidden sm:inline text-sm font-semibold tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-industrialBlue transition-colors">
              Universal Dies & Mould Solutions
            </span>
          </Link>
        </div>

        {/* Middle: Nav links (desktop) */}
        <nav className="mx-auto hidden md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative text-gray-600 dark:text-gray-300 hover:text-industrialBlue dark:hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-industrialBlue dark:after:bg-accent after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: CTA + Mobile Toggle */}
        <div className="ml-auto flex items-center gap-3 md:gap-6">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex btn bg-accent text-gray-900 text-xs sm:text-sm px-4 py-2 shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"

          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-industrialBlue dark:focus:ring-accent"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>{open && (
        <motion.nav
          key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
        >
          <ul className="flex flex-col py-3 px-4 text-sm font-medium divide-y divide-gray-200/70 dark:divide-gray-800/70">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-gray-700 dark:text-gray-300 hover:text-industrialBlue dark:hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full text-sm justify-center py-2"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}</AnimatePresence>
    </motion.header>
  );
}
