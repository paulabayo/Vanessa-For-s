import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, MessageCircle, CheckCircle2, ShieldCheck, User, Phone, Mail, MapPin } from 'lucide-react';
import { StudioConfig, ServiceItem } from '../types';

interface BookingCalculatorSectionProps {
  config: StudioConfig;
  services: ServiceItem[];
  preselectedService?: ServiceItem | null;
}

export const BookingCalculatorSection: React.FC<BookingCalculatorSectionProps> = ({
  config,
  services,
  preselectedService
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedService?.id || services[0]?.id || ''
  );
  const [includeComboDuo, setIncludeComboDuo] = useState(false);
  const [includeVipKit, setIncludeVipKit] = useState(true);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('morning');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setSelectedServiceId(preselectedService.id);
    }
  }, [preselectedService]);

  const selectedService = services.find(s => s.id === selectedServiceId) || services[0];
  
  // Calculate pricing
  const basePrice = selectedService ? selectedService.price : 280;
  const comboDiscount = includeComboDuo ? 50 : 0; // 50€ discount on duo
  const comboSecondServicePrice = includeComboDuo ? 240 : 0;
  const vipKitPrice = includeVipKit ? 0 : 0; // Free included kit by default!
  const totalPrice = basePrice + comboSecondServicePrice - comboDiscount;

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `👋 Hola ${config.specialistName} de ${config.studioName},\n\n` +
      `Me gustaría solicitar una cita de Micropigmentación:\n` +
      `✨ *Servicio Principal:* ${selectedService?.name} (${basePrice}€)\n` +
      (includeComboDuo ? `➕ *Combo Duo 2 Zonas:* Añadir Labios/Cejas (-50€ dto especial)\n` : '') +
      `🎁 *Kit Post-Care:* Incluido gratis\n` +
      `💰 *Total Estimado:* ${totalPrice}€ (Retoque incluido)\n` +
      `📅 *Fecha preferida:* ${preferredDate || 'A coordinar'}\n` +
      `⏰ *Franja horaria:* ${preferredTime === 'morning' ? 'Mañanas (10:00 - 14:00)' : 'Tardes (16:00 - 20:00)'}\n` +
      `👤 *Nombre:* ${clientName || 'Clienta'}\n` +
      `📱 *Teléfono:* ${clientPhone || 'No indicado'}\n` +
      (clientNotes ? `📝 *Observaciones/Dudas:* ${clientNotes}\n\n` : '\n') +
      `¡Muchas gracias!`
    );
    window.open(`https://wa.me/${config.whatsapp}?text=${text}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservar" className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#e5c378] text-xs uppercase tracking-widest font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Presupuesto & Citas Online</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal">
            Calcula tu Tratamiento y <span className="italic text-[#e5c378]">Reserva tu Cita</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 font-light">
            Elige tu tratamiento deseado, personaliza tus preferencias y envíanos tu solicitud directa por WhatsApp o formulario.
          </p>
        </div>

        {/* Form and Live Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-[#141414] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in-50 duration-300">
                <div className="w-16 h-16 bg-[#c5a059]/10 border border-[#c5a059] rounded-full flex items-center justify-center text-[#c5a059] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white font-bold">
                  ¡Solicitud Registrada con Éxito!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto font-light">
                  Nos pondremos en contacto contigo en menos de 2 horas para confirmar tu cita y enviarte el recordatorio con los cuidados previos.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleWhatsAppSend}
                    className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Abrir WhatsApp para confirmar al instante
                  </button>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto text-xs text-neutral-400 hover:text-white underline pt-4"
                >
                  Modificar datos de la reserva
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* 1. Select Main Service */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#e5c378] font-bold mb-2">
                    1. Selecciona tu Tratamiento Principal
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((svc) => (
                      <div
                        key={svc.id}
                        onClick={() => setSelectedServiceId(svc.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          selectedServiceId === svc.id
                            ? 'bg-[#1e1e1e] border-[#c5a059] ring-1 ring-[#c5a059]/40'
                            : 'bg-[#181818] border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="pr-2">
                          <p className="text-xs font-semibold text-white">{svc.name}</p>
                          <p className="text-[10px] text-neutral-400">{svc.duration} • {svc.durability}</p>
                        </div>
                        <span className="text-sm font-serif font-bold text-[#e5c378] shrink-0">
                          {svc.price}€
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Add-ons & Promotions */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#e5c378] font-bold mb-2">
                    2. Promociones y Opciones Adicionales
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-3.5 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#c5a059]/30 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={includeComboDuo}
                          onChange={(e) => setIncludeComboDuo(e.target.checked)}
                          className="w-4 h-4 accent-[#c5a059] rounded cursor-pointer"
                        />
                        <div>
                          <p className="text-xs font-semibold text-white">
                            Combo Duo (Cejas + Labios Aquarelle en la misma sesión)
                          </p>
                          <p className="text-[10px] text-neutral-400">Ahorra 50€ al combinar dos zonas</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#e5c378]">+190€ (-50€ dto)</span>
                    </label>

                    <label className="flex items-center justify-between p-3.5 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#c5a059]/30 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={includeVipKit}
                          onChange={(e) => setIncludeVipKit(e.target.checked)}
                          className="w-4 h-4 accent-[#c5a059] rounded cursor-pointer"
                        />
                        <div>
                          <p className="text-xs font-semibold text-white">
                            Kit de Cuidados Post-Tratamiento Clínico
                          </p>
                          <p className="text-[10px] text-neutral-400">Bálsamo regenerador + jabón neutro + toallitas</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#25D366]">GRATIS (Incluido)</span>
                    </label>
                  </div>
                </div>

                {/* 3. Schedule Preferences */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                      Fecha Preferida
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                      Franja Horaria
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="morning">Mañana (10:00 - 14:00)</option>
                      <option value="afternoon">Tarde (16:00 - 20:00)</option>
                      <option value="flexible">Cualquier horario disponible</option>
                    </select>
                  </div>
                </div>

                {/* 4. Client Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                      Tu Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Carmen Gómez"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: +34 600 000 000"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                    Observaciones o dudas médicas (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ej: Tengo una micropigmentación antigua muy suave / Alergia al látex..."
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                {/* Submit Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 rounded-full bg-[#c5a059] hover:bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#c5a059]/20 cursor-pointer"
                  >
                    Confirmar Reserva Online
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1a1a1a] hover:bg-[#222] border border-[#25D366]/40 text-[#25D366] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar por WhatsApp</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Dynamic Price Ticket & Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Calculation Card */}
            <div className="bg-gradient-to-b from-[#181818] to-[#121212] rounded-3xl p-6 sm:p-7 border border-[#c5a059]/30 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#e5c378]">
                  Resumen de tu Presupuesto
                </span>
                <span className="text-[10px] bg-[#c5a059]/20 text-[#c5a059] px-2 py-0.5 rounded-full font-medium">
                  Sin Sorpresas
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center text-neutral-300">
                  <span>{selectedService?.name}</span>
                  <span className="font-semibold text-white">{basePrice}€</span>
                </div>

                {includeComboDuo && (
                  <div className="flex justify-between items-center text-neutral-300">
                    <span>Segunda Zona (Combo Especial)</span>
                    <span className="font-semibold text-[#e5c378]">+{comboSecondServicePrice - comboDiscount}€</span>
                  </div>
                )}

                <div className="flex justify-between items-center text-neutral-300">
                  <span>Sesión de Retoque (a los 30 días)</span>
                  <span className="text-[#25D366] font-semibold">Incluida</span>
                </div>

                <div className="flex justify-between items-center text-neutral-300">
                  <span>Kit Post-Care Profesional</span>
                  <span className="text-[#25D366] font-semibold">Gratis</span>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 block">Total Final</span>
                    <span className="text-[10px] text-[#e5c378]">IVA y retoque incluidos</span>
                  </div>
                  <span className="text-3xl font-serif font-bold text-[#e5c378]">
                    {totalPrice}€
                  </span>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="mt-6 pt-5 border-t border-white/5 space-y-2 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                  <span>Sin pago por adelantado para reservar fecha</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#c5a059]" />
                  <span>Prueba de diseño previa 100% aprobada</span>
                </div>
              </div>
            </div>

            {/* Studio Contact & Location Info */}
            <div className="bg-[#141414] rounded-3xl p-6 border border-white/10 space-y-3.5 text-xs text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Ubicación del Estudio</p>
                  <p className="text-neutral-400 font-light">{config.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Horario de Atención</p>
                  <p className="text-neutral-400 font-light">{config.schedule}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Teléfono Directo</p>
                  <p className="text-neutral-400 font-light">{config.phone}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
