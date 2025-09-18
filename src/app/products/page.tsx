"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  category: 'Dies' | 'Moulds' | 'Tools';
  image: string;
  badge?: string;
}

const allProducts: Product[] = [
  { id:1, title:'Die Casting Moulds', category:'Moulds', price:'₹48,000+', description:'High thermal stability moulds engineered for complex aluminium and zinc casting geometries.', image:'/product-1.jpeg', badge:'Hot' },
  { id:2, title:'Plastic Injection Moulds', category:'Moulds', price:'₹55,000+', description:'Multi-cavity moulds with balanced flow, hardened inserts & optimized cooling channels.', image:'/product-2.jpeg', badge:'New' },
  { id:3, title:'Progressive Press Dies', category:'Dies', price:'₹65,000+', description:'Progressive / compound dies enabling tight tolerance stamping & material efficiency.', image:'/product-3.jpeg' },
  { id:4, title:'Jigs & Fixtures', category:'Tools', price:'₹15,000+', description:'Custom fixturing that improves repeatability, reduces setup time & supports lean cells.', image:'/product-4.jpeg' },
  { id:5, title:'Precision Machined Components', category:'Tools', price:'₹5,000+', description:'Close‑tolerance machined parts produced with stable dimensional control.', image:'/product-5.jpeg' },
  { id:6, title:'Tooling Inserts & Cores', category:'Tools', price:'₹2,500+', description:'Wear‑resistant inserts & cores using premium steels & surface treatments.', image:'/product-4.jpeg' },
  { id:7, title:'Prototype & Pilot Tools', category:'Dies', price:'₹22,000+', description:'Rapid-turn prototype tooling to validate geometry & process parameters.', image:'/product-2.jpeg' },
  { id:8, title:'Automation Adapter Plates', category:'Tools', price:'₹9,500+', description:'Precision ground base / adapter plates for automated handling layouts.', image:'/product-5.jpeg' },
  { id:9, title:'High Cavitation Injection Stack', category:'Moulds', price:'₹95,000+', description:'High-output stack mould configuration for balanced multi-part production.', image:'/product-1.jpeg' },
  { id:10, title:'Compound Blanking Dies', category:'Dies', price:'₹40,000+', description:'Robust compound dies delivering flatness & burr control in stamping.', image:'/product-3.jpeg' },
  { id:11, title:'Gauge & Inspection Tooling', category:'Tools', price:'₹18,000+', description:'Quality assurance gauges enabling faster in‑process dimensional verification.', image:'/product-4.jpeg' },
  { id:12, title:'Cooling Optimized Core Set', category:'Moulds', price:'₹70,000+', description:'Optimized cooling core set to reduce cycle time & improve part consistency.', image:'/product-2.jpeg' }
];

const FILTERS = ['All','Dies','Moulds','Tools'] as const;

const fadeUp = { hidden:{opacity:0,y:40}, visible:{opacity:1,y:0} };
const stagger = { hidden:{}, visible:{ transition:{ staggerChildren:0.12 } } };

export default function ProductsPage(){
  const [filter,setFilter]=useState<typeof FILTERS[number]>('All');
  const [visible,setVisible]=useState(8);
  const filtered=allProducts.filter(p=>filter==='All'||p.category===filter);
  const showing=filtered.slice(0,visible); const canLoadMore=showing.length<filtered.length;
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <motion.section initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration:0.6,ease:'easeOut'}} variants={fadeUp} className="relative h-[260px] sm:h-[340px] w-full overflow-hidden">
        <img src="/contact.jpeg" alt="Products background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 variants={fadeUp} className="text-5xl font-bold text-white tracking-tight">Our Products</motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-sm sm:text-base text-gray-100/90 max-w-2xl">High-quality Dies, Moulds, and Tools designed for your industry.</motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-2 text-white/70 text-xs font-medium">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white">Products</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Filter Bar */}
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{duration:0.6,ease:'easeOut'}} className="sticky top-16 z-30 backdrop-blur-md bg-white/80 border-b border-gray-200 py-4 mb-8">
          <motion.div variants={stagger} initial="visible" className="flex flex-wrap gap-3">
            {FILTERS.map(f => (
              <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} key={f} onClick={()=>{setFilter(f); setVisible(8);}} type="button" className={`px-4 py-2 rounded-full text-sm transition font-medium ${filter===f ? 'bg-yellow-400 text-gray-900 shadow' : 'bg-gray-100 hover:bg-yellow-200 text-gray-700'}`}>{f}</motion.button>
            ))}
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-200 my-12" />

        {/* Products & Catalogues: Special Springs */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-3xl bg-gradient-to-br from-gray-50 to-white p-8 sm:p-10 lg:p-12 shadow-sm border border-gray-100"
        >
          <div className="text-center">
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Technical Catalogues & Resources
            </motion.h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded-full bg-yellow-400" />
            <motion.p variants={fadeUp} className="mx-auto mt-4 text-sm sm:text-base text-gray-600 max-w-3xl">
              As an authorized dealer of Special Springs (Italy), we provide ISO 10243 Die Springs, JIS-B5012 standards, and more. Download our catalogues for detailed specifications.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={stagger}
            initial="visible"
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[ 
              {
                title: 'Die Springs',
                desc: 'High‑load, color‑coded springs per ISO 10243 for presses, dies, and tooling. Stable rate and long life.',
                icon: 'Spring'
              },
              {
                title: 'Guide Posts',
                desc: 'Precision guide pillars and bushings for accurate die alignment and repeatability with low wear.',
                icon: 'Pillar'
              },
              {
                title: 'Gas Springs',
                desc: 'Compact, high‑force gas springs for die applications with reliable sealing and safety features.',
                icon: 'Gas'
              }
            ].map((c, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-50 ring-1 ring-yellow-200">
                    <span className="h-6 w-6 text-yellow-600">◆</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Resource Links */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-stretch">
            <Link
              href="https://share.google/UvsRbS7mDgNnMCf8B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            >
              View ISO 10243 Wire Springs
            </Link>
            <Link
              href="https://www.specialsprings.com/ipages/flipbook/3?preview=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            >
              Explore Special Springs Flipbook
            </Link>
          </motion.div>
        </motion.section>

        <div className="border-t border-gray-200 my-12" />

        {/* Product Grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger} transition={{duration:0.6,ease:'easeOut'}} className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {showing.map(p => (
            <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.97}} variants={fadeUp} key={p.id} className="group relative rounded-2xl border border-gray-100 shadow-md bg-white overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {p.badge && <span className="absolute m-3 px-3 py-1 rounded-full bg-yellow-400 text-gray-900 text-[10px] font-semibold tracking-wide shadow">{p.badge}</span>}
              <div className="w-full aspect-square bg-gray-100 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{p.title}</h3>
                <p className="text-yellow-600 font-bold text-sm mb-2">{p.price}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">{p.description}</p>
                <div className="mt-auto pt-2">
                  <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} className="inline-flex items-center justify-center rounded-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-semibold px-4 py-2 shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">Enquire</motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {canLoadMore && (
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{duration:0.6,ease:'easeOut'}} className="flex justify-center pt-10">
            <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} onClick={()=>setVisible(v=>v+4)} className="inline-flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-semibold shadow-lg px-8 py-3 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">Load More</motion.button>
          </motion.div>
        )}
        {!canLoadMore && <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}} className="text-center text-xs text-gray-500 pt-10">End of results</motion.p>}

        <div className="border-t border-gray-200 my-12" />

        {/* Testimonials / CTA Section */}
        <motion.section initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{duration:0.6,ease:'easeOut'}} className="rounded-3xl bg-gradient-to-br from-gray-50 to-white p-12 text-center shadow-sm">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industries Worldwide</motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 max-w-2xl mx-auto mb-8">We deliver solutions that power your production.</motion.p>
          <motion.div variants={fadeUp} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">Contact Us</Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
