import React, { useState } from 'react';
import { Sliders, Upload, Image as ImageIcon, Check, RefreshCw, Smartphone, MapPin, Sparkles, X } from 'lucide-react';
import { StudioConfig } from '../types';

interface MediaManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: StudioConfig;
  onUpdateConfig: (newConfig: StudioConfig) => void;
}

export const MediaManagerModal: React.FC<MediaManagerModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig
}) => {
  const [formData, setFormData] = useState<StudioConfig>({ ...config });
  const [heroImagePreview, setHeroImagePreview] = useState<string>(config.heroImage);
  const [logoImagePreview, setLogoImagePreview] = useState<string>(config.logoImage);
  const [savedSuccess, setSavedSuccess] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setFormData({ ...config });
      setHeroImagePreview(config.heroImage);
      setLogoImagePreview(config.logoImage);
    }
  }, [isOpen, config]);

  if (!isOpen) return null;

  const handleHeroFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setHeroImagePreview(result);
        setFormData(prev => ({ ...prev, heroImage: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setLogoImagePreview(result);
        setFormData(prev => ({ ...prev, logoImage: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#141414] border border-[#c5a059]/40 rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">
                Personalizar Fotos, Logotipo y Datos
              </h3>
              <p className="text-xs text-neutral-400">
                Sube la foto de la chica, tu logotipo y ajusta los datos del estudio en tiempo real.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          
          {/* Photos Upload Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-2xl bg-[#191919] border border-white/5">
            
            {/* Hero Girl Photo */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#e5c378] font-bold mb-2 flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Foto Principal de la Chica</span>
              </label>
              
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-black mb-3">
                <img
                  src={heroImagePreview}
                  alt="Vista previa modelo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-center font-semibold text-white cursor-pointer transition-colors flex items-center justify-center gap-2">
                  <Upload className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Subir Foto desde tu Equipo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleHeroFileUpload}
                    className="hidden"
                  />
                </label>
                
                <input
                  type="text"
                  placeholder="O pega URL de la foto..."
                  value={formData.heroImage}
                  onChange={(e) => {
                    setFormData({ ...formData, heroImage: e.target.value });
                    setHeroImagePreview(e.target.value);
                  }}
                  className="w-full bg-[#121212] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>
            </div>

            {/* Studio Logo */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#e5c378] font-bold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Logotipo del Estudio</span>
              </label>
              
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-black mb-3 flex items-center justify-center p-4">
                <img
                  src={logoImagePreview}
                  alt="Vista previa logotipo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-center font-semibold text-white cursor-pointer transition-colors flex items-center justify-center gap-2">
                  <Upload className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Subir Logo desde tu Equipo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoFileUpload}
                    className="hidden"
                  />
                </label>

                <input
                  type="text"
                  placeholder="O pega URL del logotipo..."
                  value={formData.logoImage}
                  onChange={(e) => {
                    setFormData({ ...formData, logoImage: e.target.value });
                    setLogoImagePreview(e.target.value);
                  }}
                  className="w-full bg-[#121212] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>
            </div>

          </div>

          {/* Text Info Customization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                Nombre del Estudio
              </label>
              <input
                type="text"
                value={formData.studioName}
                onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                Nombre de la Especialista
              </label>
              <input
                type="text"
                value={formData.specialistName}
                onChange={(e) => setFormData({ ...formData, specialistName: e.target.value })}
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                WhatsApp (sin símbolos, ej. 34612345678)
              </label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                Instagram
              </label>
              <input
                type="text"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                Dirección / Ubicación
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-semibold uppercase tracking-wider"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#c5a059] hover:bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#c5a059]/20 flex items-center gap-2"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡Guardado!</span>
                </>
              ) : (
                <span>Aplicar Cambios a la Web</span>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
