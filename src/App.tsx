import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { Footer } from './components/layout/Footer';
import { SectionHeading } from './components/ui/SectionHeading';
import { RevealOnScroll } from './components/ui/RevealOnScroll';
import { ServiceCard } from './components/features/ServiceCard';
import { ReviewCard } from './components/features/ReviewCard';
import { ProcessSection } from './components/features/ProcessSection';
import { ContactSection } from './components/features/ContactSection';
import { SERVICES, REVIEWS } from './data';

export default function App() {
  console.log('App is rendering full content');
  return (
    <div className="min-h-screen bg-obsidian text-white overflow-x-hidden font-sans selection:bg-gold-500/30">
      <Navbar />
      <Hero />

      {/* Social Proof / Stats */}
      <section className="py-32 border-b border-white/5 bg-obsidian-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.03)_0%,_transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-16 text-center relative z-10">
          {[
            { label: 'Vehicles Perfected', value: '2,850+' },
            { label: 'Scottsdale Rating', value: '5.0' },
            { label: 'Master Artisans', value: '15+' },
            { label: 'Insured Value', value: '$10M+' },
          ].map((stat, i) => (
            <RevealOnScroll key={i} delay={i * 150}>
              <div className="flex flex-col items-center group">
                <span className="font-heading text-4xl md:text-6xl font-black text-white mb-4 group-hover:text-gold-500 transition-all duration-700 tracking-tightest">{stat.value}</span>
                <div className="w-8 h-[1px] bg-gold-500/20 mb-4 group-hover:w-12 group-hover:bg-gold-500 transition-all duration-700"></div>
                <span className="text-[9px] uppercase tracking-ultra-wide text-gray-500 group-hover:text-gray-300 transition-colors font-bold">{stat.label}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-60 relative bg-obsidian">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading
              title="Curated Protocols"
              subtitle="Precision treatments for the discerning automotive collector"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <RevealOnScroll key={service.id} delay={idx * 200} className="h-full">
                <ServiceCard service={service} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-obsidian-deep">
        <ProcessSection />
      </div>

      {/* Reviews */}
      <section id="reviews" className="py-60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="flex flex-col items-center text-center mb-32">
              <div className="w-12 h-px bg-gold-500/30 mb-8"></div>
              <SectionHeading title="Client Chronicles" subtitle="Trusted by Scottsdale's most prestigious collections" />
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {REVIEWS.map((review, idx) => (
              <RevealOnScroll key={review.id} delay={idx * 300}>
                <ReviewCard review={review} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}