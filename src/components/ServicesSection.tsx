import React, { useState } from 'react';
import { Sparkles, Clock, Check, Calendar, ArrowUpRight, Shield, Layers, HelpCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectServiceForBooking: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectServiceForBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeServiceDetail, setActiveServiceDetail] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Servicios' },
    { id: 'cejas', label: 'Cejas (Shading & Microblading)' },
    { id: 'labios', label: 'Labios (Aquarelle Blush)' },
    { id: 'ojos', label: 'Ojos (Eyeliner & Lash)' },
    { id: 'paramedica', label: 'Paramédica & Areolar' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <section id="servicios" className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#e5c378] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Carta de Tratamientos de Alta Precisión</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal tracking-tight">
            Servicios Exclusivos & <span className="italic text-[#e5c378]">Tarifas Transparentes</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 font-light">
            Cada tratamiento incluye visagismo facial digital previo, anestesia tópica de confort, pigmentos minerales homologados y la sesión de retoque de perfeccionamiento.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#c5a059] text-black shadow-lg shadow-[#c5a059]/25 scale-105'
                  : 'bg-[#151515] text-neutral-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#121212] rounded-3xl overflow-hidden border border-white/10 hover:border-[#c5a059]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#c5a059]/10"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative h-56 w-full overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
                  
                  {/* Category & Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-black/80 backdrop-blur-md text-[#e5c378] border border-[#c5a059]/30 text-[10px] uppercase font-bold tracking-wider py-1 px-3 rounded-full">
                      {service.categoryLabel}
                    </span>
                    {service.badge && (
                      <span className="bg-[#c5a059] text-black text-[10px] uppercase font-bold tracking-wider py-1 px-2.5 rounded-full shadow-md">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Price Tag in Image */}
                  <div className="absolute bottom-3 right-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-[#c5a059]/40 text-right">
                    <span className="text-xl font-serif font-bold text-[#e5c378]">
                      {service.price}€
                    </span>
                    <span className="block text-[8px] text-neutral-400 uppercase tracking-wider">
                      Retoque incl.
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif text-white font-medium group-hover:text-[#e5c378] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 font-light line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Specs Quick Pills */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5 text-[11px] text-neutral-300">
                    <div className="flex items-center gap-1.5 bg-white/[0.02] p-2 rounded-xl border border-white/5">
                      <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/[0.02] p-2 rounded-xl border border-white/5">
                      <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>{service.durability}</span>
                    </div>
                  </div>

                  {/* Service Key Bullets */}
                  <div className="mt-5 space-y-2">
                    {service.details.slice(0, 3).map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-light">
                        <div className="w-4 h-4 rounded-full bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="line-clamp-1">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => onSelectServiceForBooking(service)}
                  className="flex-1 py-3 rounded-full bg-[#c5a059] hover:bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-[#c5a059]/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reservar Este</span>
                </button>
                <button
                  onClick={() => setActiveServiceDetail(service)}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Ver ficha técnica completa"
                >
                  <ArrowUpRight className="w-4 h-4 text-[#c5a059]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeServiceDetail && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] border border-[#c5a059]/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="relative h-64 w-full bg-[#1e1e1e]">
              <img
                src={activeServiceDetail.image}
                alt={activeServiceDetail.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
              <button
                onClick={() => setActiveServiceDetail(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="bg-[#c5a059] text-black text-xs uppercase font-bold py-1 px-3 rounded-full">
                  {activeServiceDetail.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-semibold mt-2">
                  {activeServiceDetail.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {activeServiceDetail.description}
              </p>

              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#1a1a1a] border border-white/5 text-center">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400">Tarifa Completa</p>
                  <p className="text-xl font-serif font-bold text-[#e5c378] mt-0.5">{activeServiceDetail.price}€</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400">Duración Sesión</p>
                  <p className="text-xs font-semibold text-white mt-1.5">{activeServiceDetail.duration}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400">Durabilidad</p>
                  <p className="text-xs font-semibold text-white mt-1.5">{activeServiceDetail.durability}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#e5c378] font-bold mb-3">
                  ¿Qué incluye el procedimiento?
                </h4>
                <div className="space-y-2.5">
                  {activeServiceDetail.details.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-neutral-300">
                      <div className="w-5 h-5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30">
                <p className="text-xs font-semibold text-[#e5c378] uppercase tracking-wider mb-1">
                  Recomendado para:
                </p>
                <p className="text-xs text-neutral-200 font-light">
                  {activeServiceDetail.recommendedFor}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onSelectServiceForBooking(activeServiceDetail);
                    setActiveServiceDetail(null);
                  }}
                  className="flex-1 py-3.5 rounded-full bg-[#c5a059] hover:bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#c5a059]/25 text-center"
                >
                  Continuar a Reserva con Este Servicio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
