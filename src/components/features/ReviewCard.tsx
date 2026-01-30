import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../../types';

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
    return (
        <div className="p-12 glass-panel relative group hover:border-gold-500/20 transition-all duration-700">
            <div className="absolute top-10 right-12 text-gold-500/10 font-serif text-[12rem] leading-none font-black select-none pointer-events-none group-hover:text-gold-500/20 transition-colors duration-1000">"</div>

            <div className="flex gap-1.5 mb-10 text-gold-500/80">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#D4AF37" className="animate-pulse-slow" style={{ animationDelay: `${i * 200}ms` }} />)}
            </div>

            <p className="text-xl md:text-2xl text-gray-200 font-light mb-12 relative z-10 leading-relaxed tracking-wide italic">
                "{review.text}"
            </p>

            <div className="flex items-center gap-6 pt-8 border-t border-white/5 group-hover:border-gold-500/10 transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gold-500 font-heading font-black text-sm tracking-tighter">
                    {review.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                    <h4 className="font-heading font-bold text-white uppercase tracking-[0.2em] text-xs mb-1">{review.author}</h4>
                    <p className="text-[10px] text-gold-500/60 uppercase tracking-ultra-wide font-medium">{review.car}</p>
                </div>
            </div>
        </div>
    );
}
