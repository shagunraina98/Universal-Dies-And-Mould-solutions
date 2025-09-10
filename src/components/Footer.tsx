import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-gray-950 border-t border-gray-800 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(30,58,138,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:gap-16 md:grid-cols-3">
          {/* Column 1: Brand + Address + Contact */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold tracking-tight text-white">Universal Dies &amp; Mould Solutions</h3>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Shop No.201, Plot No.PAP-179, Block-J, Pooja Complex, Near Quality Circle, Telco Road, MIDC, Bhosari, Pune, Maharashtra 411026
            </p>
            <p className="text-sm text-gray-400">
              <span className="block">Phone: <span className="text-gray-300">+91-00000 00000</span></span>
              <span className="block">Email: <span className="text-gray-300">info@universaldies.in</span></span>
            </p>
          </div>
          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          {/* Column 3: Business Hours */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Business Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between max-w-xs"><span>Mon–Sat</span><span className="text-gray-300">9:00 AM – 7:00 PM</span></li>
              <li className="flex justify-between max-w-xs"><span>Sunday</span><span className="text-gray-500">Closed</span></li>
            </ul>
          </div>
        </div>
        {/* Social Row */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link href="#" aria-label="Instagram" className="group rounded-md border border-gray-700 bg-gray-800/40 p-2 text-gray-400 transition-colors hover:text-white hover:border-industrialBlue/60 hover:bg-industrialBlue/20">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="group rounded-md border border-gray-700 bg-gray-800/40 p-2 text-gray-400 transition-colors hover:text-white hover:border-industrialBlue/60 hover:bg-industrialBlue/20">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="WhatsApp" className="group rounded-md border border-gray-700 bg-gray-800/40 p-2 text-gray-400 transition-colors hover:text-white hover:border-green-600/60 hover:bg-green-600/20">
            <MessageCircle className="h-5 w-5" />
          </Link>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {year} Universal Dies &amp; Mould Solutions. All rights reserved.</p>
          <p className="flex gap-2"><span>Privacy</span><span>•</span><span>Terms</span></p>
        </div>
      </div>
    </footer>
  );
}
