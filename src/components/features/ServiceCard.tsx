import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../types';

export const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
    return (
        <div className="group relative h-full">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-gold-500/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-1000 blur-xl"></div>
            <div className="relative h-full overflow-hidden glass-panel border-white/5 p-10 md:p-12 flex flex-col transition-all duration-700 group-hover:border-gold-500/20">

                {/* Background Image Fade */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 ease-in-out">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale scale-110 group-hover:scale-100 transition-transform duration-1000" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-10 flex justify-between items-start">
                        <span className="font-heading font-bold text-xl text-gold-500 tracking-tighter">{service.price}</span>
                    </div>

                    <h3 className="font-heading text-3xl font-bold text-white mb-6 uppercase tracking-tightest leading-none">{service.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed mb-10 text-base">{service.description}</p>

                    <div className="space-y-4 mb-12 mt-auto">
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300 tracking-wide">
                                <div className="w-1.5 h-1.5 bg-gold-500/60 mr-4 rounded-full"></div>
                                {feature}
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-white/5 group-hover:border-gold-500/20 transition-colors">
                        <button className="flex items-center gap-3 text-[10px] uppercase tracking-ultra-wide text-white/40 group-hover:text-gold-500 transition-colors duration-500">
                            Book This Protocol <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-500" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
