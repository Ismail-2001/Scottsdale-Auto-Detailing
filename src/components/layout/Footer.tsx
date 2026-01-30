import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 border-t border-white/5 text-center bg-obsidian relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} N/SCOTTSDALE.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-gold-500 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-gold-500 transition-colors">Terms</a>
                    <a href="#" className="hover:text-gold-500 transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
};
