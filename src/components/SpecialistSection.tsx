import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { StudioConfig } from '../types';

interface SpecialistSectionProps {
  config: StudioConfig;
}

export const SpecialistSection: React.FC<SpecialistSectionProps> = ({ config }) => {
  return (
    <section id="especialista" className="py-20 bg-[#0d0d0d] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Luxury Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border-2 border-[#c5a059]/40 bg-[#151515] p-2 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                <img
                  src={config.heroImage}
                  alt={config.specialistName}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                
                {/* Floating Seal Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c5a059] text-black flex items-center justify-center font-bold text-base shrink-0">
                    VF
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">{config.specialistName}</p>
                    <p className="text-[10px] text-[#e5c378]">Master Artist & Visagista</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent gold badge */}
            <div className="absolute -top-4 -right-4 bg-[#c5a059] text-black text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-2xl shadow-xl shadow-[#c5a059]/20 hidden sm:block">
              +8 Años de Experiencia
            </div>
          </div>

          {/* Right Column: Bio & Professional Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#e5c378] text-xs uppercase tracking-widest font-semibold mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Sobre la Especialista</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal leading-tight">
                {config.specialistName}: <br />
                <span className="italic text-[#e5c378]">Arte, Visagismo y Pasión</span>
              </h2>
              <p className="text-sm font-semibold text-[#c5a059] uppercase tracking-wider mt-2">
                {config.specialistTitle}
              </p>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              {config.specialistBio}
            </p>

            <blockquote className="p-4 rounded-2xl bg-white/[0.03] border-l-2 border-[#c5a059] italic text-neutral-200 text-xs sm:text-sm font-light">
              "La mejor micropigmentación es aquella que todo el mundo admira por tu luminosidad y descanso facial, pero nadie nota que llevas un procedimiento hecho."
            </blockquote>

            {/* Certifications & Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#151515] p-4 rounded-2xl border border-white/5">
                <p className="text-2xl font-serif font-bold text-[#e5c378]">+1.500</p>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider mt-1">Tratamientos Realizados</p>
              </div>
              <div className="bg-[#151515] p-4 rounded-2xl border border-white/5">
                <p className="text-2xl font-serif font-bold text-[#e5c378]">100%</p>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider mt-1">Garantía REACH & Salud</p>
              </div>
              <div className="bg-[#151515] p-4 rounded-2xl border border-white/5">
                <p className="text-2xl font-serif font-bold text-[#e5c378]">4.9 / 5.0</p>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider mt-1">Valoración Media Clientas</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#reservar"
                className="px-6 py-3.5 rounded-full bg-[#c5a059] hover:bg-[#d4af37] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-105 cursor-pointer"
              >
                Reservar Consulta con Vane
              </a>
              <a
                href={`https://wa.me/${config.whatsapp}?text=Hola%20Vane,%20quisiera%20consultar%20una%20duda%20sobre%20micropigmentación.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm uppercase tracking-wider border border-white/15 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
