"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const fadeUp = { hidden:{opacity:0,y:40}, visible:{opacity:1,y:0} };
const stagger = { hidden:{}, visible:{ transition:{ staggerChildren:0.12 } } };

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Message sent (simulation).');
    setTimeout(() => setStatus(null), 3000);
    setForm({ name: '', email: '', phone: '', message: '' });
  }

  return (
    <div className="w-full flex flex-col">
      {/* Hero Header */}
      <motion.section initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration:0.6,ease:'easeOut'}} variants={fadeUp} className="relative h-[260px] sm:h-[320px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src="/contact.jpeg" alt="Abstract industrial background" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-lg">Contact Us</motion.h1>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger} transition={{duration:0.6,ease:'easeOut'}} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Form Column */}
          <motion.div variants={fadeUp} className="flex h-full">
            <div className="flex flex-col h-full w-full rounded-2xl border border-gray-200 bg-white shadow-md p-6 sm:p-8">
              <motion.h2 variants={fadeUp} className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Send a Message</motion.h2>
              <motion.form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1" variants={stagger}>
                <div className="grid gap-6 sm:grid-cols-2">
                  {['name','email'].map((field,i)=>(
                    <motion.div key={field} variants={fadeUp} className="flex flex-col gap-2">
                      <label htmlFor={field} className="text-sm font-medium text-gray-700">{field==='name'?'Name':'Email'}</label>
                      <input id={field} name={field} type={field==='email'?'email':'text'} required value={(form as any)[field]} onChange={handleChange} className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder={field==='name'?'Your name':'you@company.com'} />
                    </motion.div>
                  ))}
                  <motion.div variants={fadeUp} className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                    <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="+91-XXXXXXXXXX" />
                  </motion.div>
                </div>
                <motion.div variants={fadeUp} className="flex flex-col gap-2 flex-1">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" required value={form.message} onChange={handleChange} className="min-h-[160px] md:min-h-[200px] rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none flex-1" placeholder="How can we help you?" />
                </motion.div>
                <motion.div variants={fadeUp} className="flex items-center gap-4 pt-2">
                  <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} type="submit" className="inline-flex items-center justify-center rounded-md bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-500 text-gray-900 text-sm font-semibold shadow-sm px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Send Message</motion.button>
                  {status && <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-sm text-green-600">{status}</motion.p>}
                </motion.div>
              </motion.form>
            </div>
          </motion.div>

          {/* Company Info Column */}
          <motion.div variants={fadeUp} className="flex h-full">
            <div className="flex flex-col h-full w-full rounded-2xl border border-gray-200 bg-white shadow-md p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Company Details</h3>
              <ul className="space-y-6 text-sm text-gray-700 flex-1">
                <li>
                  <p className="font-medium">Universal Dies &amp; Mould Solutions</p>
                  <p className="mt-1 leading-relaxed">Shop No.201, Plot No.PAP-179, Block-J, Pooja Complex, Near Quality Circle, Telco Road, MIDC, Bhosari, Pune, Maharashtra 411026</p>
                </li>
                <li>
                  <p className="font-medium">Phone</p>
                  <p className="mt-1">+91-XXXXXXXXXX</p>
                </li>
                <li>
                  <p className="font-medium">Email</p>
                  <p className="mt-1">info@universaldies.com</p>
                </li>
                <li>
                  <p className="font-medium">Working Hours</p>
                  <p className="mt-1">Mon - Sat: 9:00 AM – 6:00 PM</p>
                </li>
              </ul>
              <div className="pt-6 text-xs text-gray-400">Updated • {new Date().getFullYear()}</div>
            </div>
          </motion.div>
        </motion.div>

  {/* FAQ Section */}
  <FAQ />

  {/* Connect Section */}
  <ConnectSection />
      </section>
    </div>
  );
}

// FAQ Component
interface QA { q: string; a: string; }
const faqs: QA[] = [
  { q: 'What services do you provide?', a: 'We design and manufacture precision dies, moulds, progressive press tools, custom tooling assemblies, and related fixturing & inserts for industrial production.' },
  { q: 'How can I request a quotation?', a: 'Use the contact form above or email us your part drawings / basic specs at info@universaldies.com. We usually respond within one business day.' },
  { q: 'What are your business hours?', a: 'We operate Monday to Saturday, 9:00 AM – 6:00 PM IST. Urgent production support can be arranged on request.' },
  { q: 'Do you offer custom die & mould solutions?', a: 'Yes. Most of our output is custom engineered. We collaborate on DFM, material selection, cooling strategies, and life optimization.' }
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null); // start with none open
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger} transition={{duration:0.6,ease:'easeOut'}} className="max-w-4xl mx-auto w-full">
      <motion.h2 variants={fadeUp} className="text-2xl font-semibold tracking-tight text-gray-900 mb-8 text-center">Frequently Asked Questions</motion.h2>
      <motion.ul variants={stagger} className="space-y-4">
        {faqs.map((item,i)=>{
          const isOpen = open === i;
          return (
            <motion.li variants={fadeUp} key={item.q} className="border border-gray-200 rounded-xl bg-white shadow-sm transition hover:shadow-md overflow-hidden">
              <button type="button" onClick={()=>setOpen(o=>o===i?null:i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={isOpen} aria-controls={`faq-panel-${i}`}>
                <span className="font-medium text-gray-900">{item.q}</span>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen?'rotate-180':''}`} />
              </button>
              <motion.div
                id={`faq-panel-${i}`}
                initial={false}
                animate={isOpen? 'open':'collapsed'}
                variants={{
                  open:{height:'auto',opacity:1},
                  collapsed:{height:0,opacity:0}
                }}
                transition={{duration:0.35,ease:'easeInOut'}}
                className="px-5 pt-0 overflow-hidden"
                aria-hidden={!isOpen}
              >
                <motion.p initial={{opacity:0}} animate={{opacity: isOpen?1:0}} transition={{duration:0.3}} className="pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</motion.p>
              </motion.div>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
}

function ConnectSection(){
  const socials = [
    { label: 'LinkedIn', icon: faLinkedin, href: 'https://linkedin.com/company/your-page' },
    { label: 'Instagram', icon: faInstagram, href: 'https://instagram.com/your-handle' },
    { label: 'Facebook', icon: faFacebook, href: 'https://facebook.com/your-page' },
    { label: 'WhatsApp', icon: faWhatsapp, href: 'https://wa.me/your-number' }
  ];
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{duration:0.6,ease:'easeOut'}} className="max-w-3xl mx-auto w-full text-center">
      <motion.h2 variants={fadeUp} className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Connect With Us</motion.h2>
      <motion.div variants={stagger} initial="visible" className="flex items-center justify-center gap-6 sm:gap-8">
        {socials.map(s=>{
          const isInstagram = s.label==='Instagram';
          const isLinkedIn = s.label==='LinkedIn';
          const isWhatsApp = s.label==='WhatsApp';
          const isFacebook = s.label==='Facebook';
          const wrapperBase = 'group relative inline-flex items-center justify-center transition';
          const circleStyle = 'h-14 w-14 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md';
          const useCircle = !(isInstagram||isLinkedIn||isWhatsApp||isFacebook);
          return (
            <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.95}} key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={`${wrapperBase} ${useCircle?circleStyle:'h-14 w-14'}`}>
              {isInstagram ? (
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] transition-transform group-hover:scale-110">
                  <FontAwesomeIcon icon={s.icon} className="h-5 w-5 text-white" />
                </span>
              ) : isLinkedIn ? (
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A66C2] transition-transform group-hover:scale-110">
                  <FontAwesomeIcon icon={s.icon} className="h-6 w-6 text-white" />
                </span>
              ) : isWhatsApp ? (
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-b from-[#25D366] to-[#128C7E] transition-transform group-hover:scale-110">
                  <FontAwesomeIcon icon={s.icon} className="h-6 w-6 text-white" />
                </span>
              ) : isFacebook ? (
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1877F2] transition-transform group-hover:scale-110">
                  <FontAwesomeIcon icon={s.icon} className="h-6 w-6 text-white" />
                </span>
              ) : (
                <>
                  <FontAwesomeIcon icon={s.icon} className="h-6 w-6 text-gray-600 transition-colors group-hover:text-yellow-500" />
                  <span className="absolute inset-0 rounded-full ring-0 group-hover:ring-4 ring-yellow-200/60 transition" />
                </>
              )}
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
