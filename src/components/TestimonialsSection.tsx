import React from 'react';
import { Star, Heart, CheckCircle2, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#e5c378] text-xs uppercase tracking-widest font-semibold mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>Opiniones & Experiencias</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal">
            La Confianza de <span className="italic text-[#e5c378]">Nuestras Clientas</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 font-light">
            Historias reales de personas que han transformado su mirada y su rutina diaria.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#131313] rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between hover:border-[#c5a059]/30 transition-all group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c5a059] text-[#c5a059]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#c5a059]/30" />
                </div>

                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white font-serif">{item.name}</h4>
                  <p className="text-[10px] text-[#e5c378] uppercase tracking-wider">{item.service}</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-neutral-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Verificada</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
