import React from 'react';
import { StudioConfig } from '../types';
import { Instagram, MessageCircle, MapPin, Clock, Phone, Mail, ShieldCheck, Sliders } from 'lucide-react';

interface FooterProps {
  config: StudioConfig;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenCustomizer }) => {
  return (
    <footer className="bg-[#070707] text-[#a0a0a0] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Studio Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#c5a059] p-0.5 bg-[#141414] flex items-center justify-center overflow-hidden">
                {config.logoImage ? (
                  <img src={config.logoImage} alt="Logo" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <span className="text-[#c5a059] font-brand text-sm font-bold">VF</span>
                )}
              </div>
              <span className="text-xl font-brand font-bold tracking-widest text-[#e5c378] uppercase">
                {config.studioName}
              </span>
            </div>
            
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Estudio especializado en micropigmentación hiperrealista, visagismo áureo y estética paramédica. Realzando tu armonía facial con la máxima rigurosidad y elegancia.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://instagram.com/${config.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-300 hover:text-[#e5c378] border border-white/10 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${config.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/20 border border-white/10 transition-colors"
                title="WhatsApp Directo"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenCustomizer}
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[11px] text-neutral-400 hover:text-white border border-white/10 flex items-center gap-1.5 transition-colors"
                title="Personalizar fotos o datos del estudio"
              >
                <Sliders className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Editar Estudio</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Navegación
            </p>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-[#e5c378] transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-[#e5c378] transition-colors">Servicios & Tarifas</a></li>
              <li><a href="#documentos" className="text-[#e5c378] hover:underline transition-colors">Guía Médica & Cuidados</a></li>
              <li><a href="#antes-despues" className="hover:text-[#e5c378] transition-colors">Galería Antes y Después</a></li>
              <li><a href="#metodo" className="hover:text-[#e5c378] transition-colors">El Método de 4 Pasos</a></li>
              <li><a href="#especialista" className="hover:text-[#e5c378] transition-colors">Sobre la Especialista</a></li>
              <li><a href="#reservar" className="hover:text-[#e5c378] transition-colors">Pedir Cita Online</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Estudio & Ubicación
            </p>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="font-light">{config.location}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="font-light">{config.schedule}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span className="font-light">{config.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span className="font-light">{config.email}</span>
              </div>
            </div>

            <div className="pt-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Normativa Sanitaria Europea REACH y Certificación Higiénico-Sanitaria</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 uppercase tracking-wider">
          <div>
            &copy; {new Date().getFullYear()} {config.studioName.toUpperCase()} &bull; MADRID &bull; TODOS LOS DERECHOS RESERVADOS
          </div>
          <div className="flex items-center gap-6 text-[10px]">
            <a href="#documentos" className="hover:text-neutral-300 transition-colors">Consentimiento Informado</a>
            <a href="#documentos" className="hover:text-neutral-300 transition-colors">Aviso Legal</a>
            <a href="#documentos" className="hover:text-neutral-300 transition-colors">Privacidad RGPD</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
