import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { HERO_IMAGE } from '../../data';

export const Hero: React.FC = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="relative h-screen flex items-center justify-center overflow-hidden bg-obsidian-deep">
            {/* Background Image with Cinematic Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] z-10"></div>
                <picture>
                    <source srcSet={`${HERO_IMAGE}&w=800`} media="(max-width: 768px)" />
                    <img
                        src={HERO_IMAGE}
                        alt="Luxury Car Detail"
                        className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite]"
                        loading="eager"
                    />
                </picture>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
                <div className="animate-fade-in-up [animation-delay:200ms] mb-12">
                    <div className="inline-flex items-center gap-3 px-6 py-2 glass-panel rounded-full border border-white/10">
                        <Star className="text-gold-500 fill-gold-500" size={10} />
                        <span className="text-[10px] uppercase tracking-ultra-wide font-bold text-gray-300">Arizona's Concierge Detailing</span>
                        <Star className="text-gold-500 fill-gold-500" size={10} />
                    </div>
                </div>

                <h1 className="animate-fade-in-up [animation-delay:400ms] font-heading text-6xl md:text-8xl lg:text-[10rem] font-black text-white mb-8 uppercase tracking-tightest leading-[0.85] drop-shadow-2xl">
                    Stealth <br />
                    <span className="text-stroke text-transparent opacity-40">Luxury</span>
                </h1>

                <p className="animate-fade-in-up [animation-delay:600ms] text-gray-400 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-16 leading-relaxed tracking-wide">
                    The pinnacle of automotive care for the uncompromising owner. <br className="hidden md:block" />
                    Bespoke mobile detailing serving <span className="text-white font-medium">North Scottsdale</span> and beyond.
                </p>

                <div className="animate-fade-in-up [animation-delay:800ms] flex flex-col md:flex-row items-center justify-center gap-10">
                    <Button variant="gold" onClick={scrollToContact} className="px-12 py-6 text-sm tracking-widest uppercase font-bold hover:scale-105 transition-transform">
                        Request a Quote
                    </Button>
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center gap-4 text-xs font-bold text-white uppercase tracking-ultra-wide group cursor-pointer"
                    >
                        <span className="opacity-60 group-hover:opacity-100 transition-opacity">Explore Services</span>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold-500/50 group-hover:bg-white/5 transition-all duration-500">
                            <ChevronRight size={16} className="text-gold-500 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30">
                <span className="text-[10px] uppercase tracking-ultra-wide text-gray-500">Scroll to Reveal</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            </div>
        </header>
    );
};
