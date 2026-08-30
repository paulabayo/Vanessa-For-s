import React, { useState, useRef } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, ZoomIn, Eye } from 'lucide-react';
import { BeforeAfterItem } from '../types';

interface BeforeAfterSectionProps {
  items: BeforeAfterItem[];
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ items }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentItem = items[selectedItemIndex] || items[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="antes-despues" className="py-20 bg-[#0d0d0d] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#e5c378] text-xs uppercase tracking-widest font-semibold mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>Casos Reales de Transformación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal">
            Resultados Reales: <span className="italic text-[#e5c378]">Antes y Después</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 font-light">
            Desliza el tirador central para comparar la naturalidad, simetría y definición logradas tras la cicatrización.
          </p>
        </div>

        {/* Treatment Tabs */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                selectedItemIndex === idx
                  ? 'bg-[#c5a059] text-black shadow-lg shadow-[#c5a059]/25 scale-105'
                  : 'bg-[#161616] text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              {item.service}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider Stage */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#141414] rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl">
            
            {/* Slider Container */}
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[340px] sm:h-[480px] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-black border border-white/5"
            >
              {/* After Image (Background / Full Width) */}
              <img
                src={currentItem.afterImage}
                alt={`${currentItem.title} Después`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* After Label */}
              <div className="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#c5a059]/40 text-[#e5c378] text-xs uppercase font-bold tracking-wider">
                ✨ Después
              </div>

              {/* Before Image (Clipped with width matching slider percentage) */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentItem.beforeImage}
                  alt={`${currentItem.title} Antes`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%'
                  }}
                />
                
                {/* Before Label */}
                <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-neutral-300 text-xs uppercase font-bold tracking-wider">
                  Antes
                </div>
              </div>

              {/* Slider Divider Bar & Grab Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.8)] z-20 flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-10 h-10 -ml-5 rounded-full bg-[#c5a059] text-black flex items-center justify-center shadow-xl shadow-black/80 border-2 border-white pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Hint overlay at bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-[11px] text-neutral-300 px-4 py-1.5 rounded-full border border-white/10 pointer-events-none">
                ↔ Desliza para comparar antes y después
              </div>
            </div>

            {/* Case Details Summary */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
              <div>
                <h3 className="text-xl font-serif text-white font-medium">
                  {currentItem.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-light max-w-xl">
                  {currentItem.description}
                </p>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-[#e5c378]">
                  <span>🔹 Técnica: {currentItem.technique}</span>
                  <span>•</span>
                  <span>🗓 {currentItem.retouchTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="#reservar"
                  className="px-5 py-2.5 rounded-full bg-[#c5a059] hover:bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-md"
                >
                  Quiero este resultado
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Thumbnails Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedItemIndex(index);
                setSliderPosition(50);
              }}
              className={`p-3 rounded-2xl bg-[#141414] border transition-all cursor-pointer flex items-center gap-3.5 ${
                selectedItemIndex === index
                  ? 'border-[#c5a059] ring-1 ring-[#c5a059]/40 bg-[#1a1a1a]'
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-black">
                <img src={item.afterImage} alt={item.service} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">{item.service}</p>
                <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">{item.technique}</p>
                <span className="text-[10px] text-[#e5c378] font-medium mt-1 inline-block">Ver comparador →</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
