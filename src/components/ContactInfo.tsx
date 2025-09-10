"use client";

import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Get in touch</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-prose">We partner with manufacturers and tooling teams to deliver precision dies, moulds, and custom metal forming solutions. Reach out to discuss requirements or request a capability overview.</p>
        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 rounded-md bg-industrialBlue/10 p-2 text-industrialBlue dark:bg-accent/10 dark:text-accent"><MapPin className="h-4 w-4" /></span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Address</p>
              <p className="text-gray-600 dark:text-gray-400">Plot 23, Industrial Estate Phase II, Pune, Maharashtra 411026</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 rounded-md bg-industrialBlue/10 p-2 text-industrialBlue dark:bg-accent/10 dark:text-accent"><Phone className="h-4 w-4" /></span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Phone</p>
              <p className="text-gray-600 dark:text-gray-400">+91-0000-000-000 (placeholder)</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 rounded-md bg-industrialBlue/10 p-2 text-industrialBlue dark:bg-accent/10 dark:text-accent"><Mail className="h-4 w-4" /></span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Email</p>
              <p className="text-gray-600 dark:text-gray-400">contact@universaldies.example (placeholder)</p>
            </div>
          </li>
        </ul>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="mini-name" className="block text-xs font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input id="mini-name" type="text" required className="block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-industrialBlue focus:ring-industrialBlue dark:focus:border-accent dark:focus:ring-accent text-sm" placeholder="Your name" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="mini-email" className="block text-xs font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input id="mini-email" type="email" required className="block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-industrialBlue focus:ring-industrialBlue dark:focus:border-accent dark:focus:ring-accent text-sm" placeholder="you@company.com" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="mini-message" className="block text-xs font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea id="mini-message" rows={4} required className="block w-full resize-none rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-industrialBlue focus:ring-industrialBlue dark:focus:border-accent dark:focus:ring-accent text-sm" placeholder="Briefly describe your requirement" />
        </div>
        <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          <Send className="h-4 w-4" />
          Send
        </button>
      </form>
    </section>
  );
}
