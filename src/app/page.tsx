import React from 'react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import ContactInfo from '../components/ContactInfo';

const categories = [
  { title: 'Dies', iconName: 'Cog' },
  { title: 'Mould', iconName: 'Box' },
  { title: 'Industrial Tools', iconName: 'Factory' }
];

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <Hero />

      {/* Categories */}
      <section className="space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Categories</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(cat => (
            <CategoryCard key={cat.title} title={cat.title} iconName={cat.iconName as any} />
          ))}
        </div>
      </section>

      {/* Featured Products Carousel / Grid component */}
      <section className="space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100"></h2>
        </div>
        <FeaturedProducts />
      </section>

      {/* Testimonials */}
      <section className="space-y-10">
        <Testimonials />
      </section>

      {/* Contact Info & Mini Form */}
      <section className="space-y-10">
        <ContactInfo />
      </section>
    </div>
  );
}
