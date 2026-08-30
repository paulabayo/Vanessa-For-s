import React from 'react';
import { Calendar, MessageCircle, Menu, X } from 'lucide-react';
import { StudioConfig } from '../types';
import logoFallback from '../assets/images/vanessa_fores_logotipo_1788101706636.jpg';

interface NavbarProps {
  config: StudioConfig;
  onOpenDocManager: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onOpenDocManager }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <a href="#inicio" className="flex items-center gap-3.5 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#c5a059] p-0.5 bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
            <img
              src={config.logoImage}
              alt="Logo Vanessa Forés"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (target.src !== logoFallback) {
                  target.src = logoFallback;
                }
              }}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-brand font-semibold tracking-[0.18em] text-[#e5c378] uppercase transition-colors group-hover:text-white">
              VANESSA FORÉS
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-neutral-400 font-medium">
              MICROPIGMENTACIÓN ESTÉTICA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[12px] uppercase tracking-widest text-neutral-300 font-medium">
          <a href="#inicio" className="hover:text-[#e5c378] transition-colors py-1">Inicio</a>
          <a href="#servicios" className="hover:text-[#e5c378] transition-colors py-1">Servicios</a>
          <a href="#documentos" className="hover:text-[#e5c378] transition-colors py-1 flex items-center gap-1.5 text-[#e5c378]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse"></span>
            Guía & Docs
          </a>
          <a href="#antes-despues" className="hover:text-[#e5c378] transition-colors py-1">Antes/Después</a>
          <a href="#metodo" className="hover:text-[#e5c378] transition-colors py-1">Método</a>
          <a href="#especialista" className="hover:text-[#e5c378] transition-colors py-1">Especialista</a>
          <a href="#faq" className="hover:text-[#e5c378] transition-colors py-1">FAQ</a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${config.whatsapp}?text=Hola%20${encodeURIComponent(config.specialistName)},%20quisiera%20pedir%20cita.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs text-[#25D366] hover:text-white bg-[#1a1a1a] hover:bg-[#25D366]/20 rounded-full border border-[#25D366]/30 transition-all cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#reservar"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-black font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#c5a059]/20 hover:shadow-[#c5a059]/40 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Pedir Cita</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white bg-white/5 rounded-lg border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0e0e0e] border-b border-white/10 px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-neutral-300 hover:text-[#e5c378] py-2 border-b border-white/5"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-neutral-300 hover:text-[#e5c378] py-2 border-b border-white/5"
          >
            Servicios & Tarifas
          </a>
          <a
            href="#documentos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-[#e5c378] font-semibold py-2 border-b border-white/5 flex items-center justify-between"
          >
            <span>Documentos & Ficha Clínica</span>
            <span className="text-[10px] bg-[#c5a059]/20 text-[#c5a059] px-2 py-0.5 rounded-full">5 Guías</span>
          </a>
          <a
            href="#antes-despues"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-neutral-300 hover:text-[#e5c378] py-2 border-b border-white/5"
          >
            Antes y Después
          </a>
          <a
            href="#metodo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-neutral-300 hover:text-[#e5c378] py-2 border-b border-white/5"
          >
            El Método Paso a Paso
          </a>
          <a
            href="#especialista"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-neutral-300 hover:text-[#e5c378] py-2 border-b border-white/5"
          >
            Sobre la Especialista
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider text-neutral-300 hover:text-[#e5c378] py-2 border-b border-white/5"
          >
            Preguntas Frecuentes
          </a>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="#reservar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-[#c5a059] text-black font-bold text-xs uppercase tracking-wider"
            >
              Pedir Cita Online
            </a>
            <a
              href={`https://wa.me/${config.whatsapp}?text=Hola,%20quisiera%20información%20sobre%20micropigmentación.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-full bg-[#1a1a1a] border border-[#25D366]/40 text-[#25D366] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Directo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
