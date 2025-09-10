"use client";
import React from 'react';
import Link from 'next/link';
import { Factory, Workflow, ShieldCheck, Target, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export default function AboutPage() {
  const metrics = [
    { label: 'Product Quality', value: '98%' },
    { label: 'On-Time Delivery', value: '96%' },
    { label: 'Dimensional Precision', value: '±0.01mm' }
  ];
  const reviews = [
    { quote: 'Their tooling quality reduced our rework cycles dramatically. Consistency has been excellent.', author: 'Production Manager, Automotive Supplier' },
    { quote: 'Responsive team with clear communication. Delivered complex dies ahead of schedule.', author: 'Plant Head, Components OEM' },
    { quote: 'Dimensional accuracy and surface finish exceeded expectations—great partner for repeat programs.', author: 'Tooling Engineer, Engineering Firm' },
    { quote: 'They supported our trials and fine-tuning on short notice. Reliability we depend on.', author: 'Operations Lead, Industrial Manufacturer' }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} variants={fadeUp}
        className="relative h-[260px] sm:h-[360px] w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/contact.jpeg"
            alt="Industrial workshop background"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-lg">About Us</motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-sm sm:text-base text-gray-100/90 font-medium">Precision in Manufacturing Dies &amp; Moulds</motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 space-y-20">
        {/* Mission & Vision */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              icon: <Target className="h-7 w-7 text-accent" />,
              title: 'Our Mission',
              text: 'To engineer and deliver precision dies, moulds, and tooling solutions that enhance manufacturing reliability, reduce downtime, and enable consistent, scalable production quality for our customers.'
            },
            {
              icon: <Award className="h-7 w-7 text-accent" />,
              title: 'Our Vision',
              text: 'To be a trusted long-term partner for high‑precision engineered tooling—recognized for innovation, craftsmanship, service integrity, and measurable performance improvements across customer operations.'
            }
          ].map(item => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Ratings Summary */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <motion.div variants={stagger} initial="visible" className="text-center md:text-left">
              <motion.h3 variants={fadeUp} className="text-2xl font-semibold text-gray-900 mb-2 flex items-center justify-center md:justify-start gap-2">
                <Star className="h-7 w-7 text-accent" /> Customer Rating
              </motion.h3>
              <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-start gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </motion.div>
              <motion.p variants={fadeUp} className="text-sm text-gray-600">4.9 / 5 average across recent client feedback</motion.p>
            </motion.div>
            <motion.div variants={stagger} initial="visible" className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
              {metrics.map(metric => (
                <motion.div variants={fadeUp} key={metric.label} className="rounded-xl bg-white border border-gray-200 shadow-sm px-5 py-4 text-center">
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-medium">{metric.label}</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">{metric.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Our Story */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} transition={{ duration: 0.6, ease: 'easeOut' }} className="flex flex-col md:flex-row items-center gap-8 py-12">
          <motion.div variants={fadeUp} className="flex-1 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Factory className="h-8 w-8 text-accent" /> Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Universal Dies &amp; Mould Solutions was founded with a singular focus: delivering dependable, high-performance tooling
              for demanding industrial applications. Over the years we have refined a methodology that couples engineering rigor with
              practical manufacturability—ensuring each die or mould provides dimensional accuracy, longevity, and process stability.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We invest in modern CNC machining, EDM, precision grinding, and inspection technologies while maintaining the craft
              mindset required for fine toolmaking. Every project—whether a prototype tool or a multi-cavity production system—is
              approached with the same commitment to precision and reliability.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="flex-1 order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
              <img src="/story.jpeg" alt="Toolroom equipment" className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
            </div>
          </motion.div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} transition={{ duration: 0.6, ease: 'easeOut' }} className="flex flex-col md:flex-row items-center gap-8 py-12">
          <motion.div variants={fadeUp} className="flex-1">
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
              <img src="/choose.jpeg" alt="Precision machining process" className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Workflow className="h-8 w-8 text-accent" /> Why Choose Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We manage the complete lifecycle: concept review, DFM, precision machining, heat treatment coordination, finishing,
              validation, and on-time delivery. This integrated approach reduces iteration loops and safeguards quality at each step.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our tooling emphasizes dimensional stability, optimized cooling (where applicable), reduced maintenance downtime, and
              consistent production performance. Transparent communication keeps you informed—no guesswork, no hidden issues.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond manufacturing, we act as a technical partner—supporting trials, continuous improvement, and lifecycle extension strategies.
            </p>
          </motion.div>
        </motion.section>

        {/* Reviews */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} transition={{ duration: 0.6, ease: 'easeOut' }} className="space-y-10">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 text-center">Client Reviews</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map(r => (
              <motion.div variants={fadeUp} key={r.quote} className="relative rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm flex-1">“{r.quote}”</p>
                <p className="mt-4 text-xs font-medium text-gray-500">{r.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value / Testimonial Statement */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }} className="max-w-4xl mx-auto w-full">
          <div className="rounded-2xl bg-accent/90 px-8 py-12 shadow-md text-center">
            <ShieldCheck className="mx-auto h-12 w-12 text-gray-900 mb-6" />
            <p className="text-gray-900 italic text-lg leading-relaxed font-medium">
              "Precision isn’t a tagline for us—it is the measurable outcome of disciplined process control, skilled craftsmanship, and
              a partnership mindset focused on production uptime and part quality."
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }} className="w-full flex justify-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accent/90 text-gray-900 text-sm font-semibold shadow-md px-6 py-3 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
