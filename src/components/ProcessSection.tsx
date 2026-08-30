import React from 'react';
import { Compass, Palette, Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Compass,
      title: 'Diagnóstico & Visagismo Facial',
      subtitle: 'Mapeo milimétrico de tus rasgos',
      description: 'Analizamos la simetría de tus ojos, huesos faciales y gestos dinámicos. Realizamos un diseño previo con lápiz hasta que quedes 100% enamorada de la forma antes de tocar una sola aguja.',
      detail: 'Aprobación visual garantizada'
    },
    {
      step: '02',
      icon: Palette,
      title: 'Selección de Pigmento REACH',
      subtitle: 'Colorimetría según tu subtono dérmico',
      description: 'Elegimos la formulación mineral u orgánica que mejor se funde con tu tono de piel y cabello natural para asegurar que el color cicatrice suave y no vire a tonos no deseados.',
      detail: 'Pigmentos certificados UE'
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'Tratamiento Indoloro de Precisión',
      subtitle: 'Máximo confort y bioseguridad',
      description: 'Aplicamos anestesia tópica de confort continuo e introducimos el pigmento en las capas superficiales de la epidermis mediante micro-agujas desechables esterilizadas.',
      detail: 'Instrumental 100% de un solo uso'
    },
    {
      step: '04',
      icon: RefreshCw,
      title: 'Sesión de Retoque Perfeccionador',
      subtitle: 'Sellado y durabilidad a los 30-45 días',
      description: 'Tras la regeneración celular completa, revisamos la fijación del color poro a poro, perfeccionamos cualquier pequeño detalle y sellamos el resultado para que dure años impecable.',
      detail: 'Incluido en tu tarifa'
    }
  ];

  return (
    <section id="metodo" className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#e5c378] text-xs uppercase tracking-widest font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>El Protocolo de Excelencia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal">
            Nuestro Método en <span className="italic text-[#e5c378]">4 Pasos Clave</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 font-light">
            Un proceso riguroso, seguro y transparente diseñado para que vivas una experiencia relajante y obtengas resultados que superen tus expectativas.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative bg-[#131313] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#c5a059]/10"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif font-bold text-[#c5a059]/40 group-hover:text-[#c5a059] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#1c1c1c] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-serif text-white font-medium group-hover:text-[#e5c378] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#c5a059] uppercase tracking-wider font-semibold mt-1">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-neutral-400 font-light mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-neutral-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{item.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
