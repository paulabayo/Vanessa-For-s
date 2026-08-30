import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Award, Heart, CheckCircle2, MessageCircle, Star } from 'lucide-react';
import { StudioConfig, ServiceItem } from '../types';
import heroFallback from '../assets/images/vanessa_hero_burriana_1788101724851.jpg';
import logoFallback from '../assets/images/vanessa_fores_logotipo_1788101706636.jpg';

interface HeroSectionProps {
  config: StudioConfig;
  services: ServiceItem[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, services }) => {
  return (
    <section id="inicio" className="relative pt-6 pb-16 md:py-16 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#d4af37]/5 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Brand & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Studio & Specialist Brand Header */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#e5c378] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{config.specialistName} • Estudio de Autor</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/25 text-[#e5c378] text-[11px] font-medium">
                <Award className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Premio PMU World</span>
              </div>
              
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-neutral-400">
                <Star className="w-3.5 h-3.5 text-[#c5a059] fill-[#c5a059]" />
                <span>Burriana (Castellón)</span>
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.08] text-white tracking-tight font-normal">
                Redefine tu <br />
                <span className="italic text-[#e5c378] font-normal">belleza natural.</span>
              </h1>
              
              <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mt-4 max-w-xl">
                Técnicas hiperrealistas de micropigmentación que realzan tu mirada, definen tus labios y armonizan tus rasgos con la máxima naturalidad y elegancia.
              </p>
            </div>

            {/* Quick Treatment Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300">
                ✨ Cejas Shading & Microblading
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300">
                💋 Aquarelle Lip Blush
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300">
                👁️ Eyeliner Soft Interciliar
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300">
                🌸 Paramédica & Areolar
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#reservar"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#c5a059] to-[#d4af37] hover:from-[#d4af37] hover:to-[#e5c378] text-black font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#c5a059]/25 hover:shadow-[#c5a059]/40 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Pedir Cita Online</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${config.whatsapp}?text=Hola%20${encodeURIComponent(config.specialistName)},%20quisiera%20consultar%20sobre%20un%20tratamiento%20de%20micropigmentación.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-[#161616] hover:bg-[#202020] border border-[#25D366]/40 text-[#25D366] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href="#documentos"
                className="px-4 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-neutral-300 hover:text-white font-medium text-xs tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span className="hidden sm:inline">Guía & Ficha Médica</span>
              </a>
            </div>

            {/* Trust Reassurance Badges */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-3 text-left">
              <div>
                <p className="text-sm sm:text-base font-serif font-bold text-[#e5c378]">+1.500</p>
                <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Tratamientos de Éxito</p>
              </div>
              <div>
                <p className="text-sm sm:text-base font-serif font-bold text-[#e5c378]">REACH UE</p>
                <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Pigmentos Seguros</p>
              </div>
              <div>
                <p className="text-sm sm:text-base font-serif font-bold text-[#e5c378]">30 Días</p>
                <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Retoque Incluido</p>
              </div>
            </div>

          </div>

          {/* Right Column: Central Hero Portrait of Vanessa Forés in consultation */}
          <div className="lg:col-span-6 relative">
            
            {/* Outer Luxury Card Framing */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#c5a059]/60 bg-[#141414] p-3 sm:p-4 shadow-2xl shadow-black/90 group">
              
              {/* Inner Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5.2] sm:aspect-[4/5] bg-black flex items-center justify-center">
                
                {/* Vanessa Forés in Session Image */}
                <img
                  src={config.heroImage}
                  alt={`Vanessa Forés - Micropigmentación Facial`}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src !== heroFallback) {
                      target.src = heroFallback;
                    }
                  }}
                  className="w-full h-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle luxury vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/35 pointer-events-none" />
                <div className="absolute inset-0 border border-[#c5a059]/20 rounded-2xl pointer-events-none" />

                {/* Top Left: Nueva Consulta en Burriana Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="bg-black/90 backdrop-blur-md text-[#e5c378] border border-[#c5a059]/50 text-[10px] sm:text-xs font-semibold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-xl flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                    <span>Nueva Consulta en Burriana</span>
                  </div>
                </div>

                {/* Top Right: Official Logo Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#c5a059] p-0.5 shadow-xl overflow-hidden">
                    <img
                      src={config.logoImage}
                      alt="Logo V. Forés"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>

                {/* Floating Highlight 1: Award Winner Badge */}
                <div className="absolute top-1/4 -left-2 sm:left-3 z-10 bg-black/90 backdrop-blur-md border border-[#c5a059]/50 rounded-xl py-2 px-3.5 shadow-2xl max-w-[210px]">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#e5c378] shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase font-bold text-[#e5c378] tracking-wider leading-tight">PREMIO PMU WORLD</p>
                      <p className="text-[9px] text-neutral-300 font-light">Master Artist Internacional</p>
                    </div>
                  </div>
                </div>

                {/* Floating Highlight 2: Address */}
                <div className="absolute bottom-20 -right-2 sm:right-3 z-10 bg-black/90 backdrop-blur-md border border-[#c5a059]/50 rounded-xl py-2 px-3.5 shadow-2xl max-w-[210px] text-right">
                  <p className="text-[10px] uppercase font-bold text-[#e5c378] tracking-wider">Calle Benicarló 8</p>
                  <p className="text-[9px] text-neutral-300 font-light">Burriana (Castellón)</p>
                </div>

                {/* Bottom Specialist Info Card */}
                <div className="absolute bottom-3 left-3 right-3 z-10 bg-black/90 backdrop-blur-md p-3.5 rounded-xl border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#c5a059] p-0.5 overflow-hidden shrink-0">
                      <img
                        src={config.logoImage}
                        alt="Logo V. Forés"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white font-serif tracking-wide">Vanessa Forés</p>
                      <p className="text-[10px] text-[#e5c378] uppercase tracking-wider font-medium">Micropigmentación Facial</p>
                    </div>
                  </div>
                  
                  <a
                    href="tel:605470721"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059]/30 border border-[#c5a059]/40 text-[#e5c378] text-xs font-semibold tracking-wider transition-colors"
                  >
                    <span>605 470 721</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 4 Feature Pillars Underneath Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex items-center gap-3 hover:border-[#c5a059]/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center text-[#c5a059] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-white">Diseño Personalizado</p>
              <p className="text-[11px] text-neutral-400">Medición geométrica áurea</p>
            </div>
          </div>

          <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex items-center gap-3 hover:border-[#c5a059]/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center text-[#c5a059] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-white">Máxima Bioseguridad</p>
              <p className="text-[11px] text-neutral-400">Material 100% desechable</p>
            </div>
          </div>

          <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex items-center gap-3 hover:border-[#c5a059]/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center text-[#c5a059] shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-white">Confort Absoluto</p>
              <p className="text-[11px] text-neutral-400">Anestesia tópica secundaria</p>
            </div>
          </div>

          <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex items-center gap-3 hover:border-[#c5a059]/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center text-[#c5a059] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-white">Retoque a los 30 Días</p>
              <p className="text-[11px] text-neutral-400">Fijación de color incluida</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
