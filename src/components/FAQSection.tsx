import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQItem, StudioConfig } from '../types';

interface FAQSectionProps {
  faqs: FAQItem[];
  config: StudioConfig;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs, config }) => {
  const [openFaqId, setOpenFaqId] = useState<string>(faqs[0]?.id || '');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas las Preguntas' },
    { id: 'dolor', label: 'Dolor & Molestia' },
    { id: 'duracion', label: 'Duración & Retoque' },
    { id: 'cuidados', label: 'Cuidados & Cicatrización' },
    { id: 'general', label: 'Pigmentos & Salud' }
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? faqs
    : faqs.filter(f => f.category === selectedCategory);

  return (
    <section id="faq" className="py-20 bg-[#0d0d0d] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#e5c378] text-xs uppercase tracking-widest font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas Claras & Rigor Clínico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal">
            Preguntas <span className="italic text-[#e5c378]">Frecuentes</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 font-light">
            Todo lo que necesitas saber antes de tu primera sesión de micropigmentación.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#c5a059] text-black shadow-md'
                  : 'bg-[#161616] text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#141414] rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#c5a059]/40 bg-[#161616]' : 'border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-serif text-white font-medium">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-neutral-400">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#e5c378]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 animate-in fade-in-50 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help card */}
        <div className="mt-10 p-6 rounded-2xl bg-[#141414] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm font-semibold text-white">¿Tienes una duda médica no listada?</p>
            <p className="text-xs text-neutral-400 font-light mt-0.5">Escríbenos directamente y te responderemos de forma personalizada.</p>
          </div>
          <a
            href={`https://wa.me/${config.whatsapp}?text=Hola,%20tengo%20una%20pregunta%20sobre%20el%20tratamiento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#1e1e1e] hover:bg-[#252525] border border-[#25D366]/40 text-[#25D366] text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Preguntar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
