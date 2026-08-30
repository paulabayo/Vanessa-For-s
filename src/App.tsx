/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  initialStudioConfig, 
  initialServices, 
  initialDocuments, 
  initialBeforeAfter, 
  initialTestimonials, 
  initialFAQs 
} from './data/initialData';
import { StudioConfig, ServiceItem, DocumentSection } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DocumentOrganizerSection } from './components/DocumentOrganizerSection';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ProcessSection } from './components/ProcessSection';
import { SpecialistSection } from './components/SpecialistSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingCalculatorSection } from './components/BookingCalculatorSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MediaManagerModal } from './components/MediaManagerModal';
import { Sliders } from 'lucide-react';

export default function App() {
  // Config state with local storage persistence
  const [studioConfig, setStudioConfig] = useState<StudioConfig>(() => {
    const saved = localStorage.getItem('vanefores_studio_config') || localStorage.getItem('laurea_studio_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.studioName === "L'Aurea Studio" || parsed.specialistName === "Paula Bayo") {
          return { ...initialStudioConfig, ...parsed, studioName: "Vane Fores", specialistName: "Vane Fores" };
        }
        return { ...initialStudioConfig, ...parsed };
      } catch (e) {
        return initialStudioConfig;
      }
    }
    return initialStudioConfig;
  });

  // Documents state with local storage persistence
  const [documents, setDocuments] = useState<DocumentSection[]>(() => {
    const saved = localStorage.getItem('vanefores_documents') || localStorage.getItem('laurea_documents');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialDocuments;
      }
    }
    return initialDocuments;
  });

  const [services] = useState<ServiceItem[]>(initialServices);
  const [beforeAfterItems] = useState(initialBeforeAfter);
  const [testimonials] = useState(initialTestimonials);
  const [faqs] = useState(initialFAQs);

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [preselectedBookingService, setPreselectedBookingService] = useState<ServiceItem | null>(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('vanefores_studio_config', JSON.stringify(studioConfig));
  }, [studioConfig]);

  useEffect(() => {
    localStorage.setItem('vanefores_documents', JSON.stringify(documents));
  }, [documents]);

  const handleAddDocument = (newDoc: DocumentSection) => {
    setDocuments(prev => [newDoc, ...prev]);
  };

  const handleDeleteDocument = (id: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  const handleSelectServiceForBooking = (service: ServiceItem) => {
    setPreselectedBookingService(service);
    const element = document.getElementById('reservar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] selection:bg-[#c5a059] selection:text-black flex flex-col">
      {/* Navigation Header */}
      <Navbar
        config={studioConfig}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenDocManager={() => {
          const element = document.getElementById('documentos');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Single-Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Showcase */}
        <HeroSection
          config={studioConfig}
          services={services}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* 2. Organized Clinical Documents & Client Protocols */}
        <DocumentOrganizerSection
          documents={documents}
          onAddDocument={handleAddDocument}
          onDeleteDocument={handleDeleteDocument}
        />

        {/* 3. Catalog of Services & Pricing */}
        <ServicesSection
          services={services}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* 4. Interactive Before & After Slider Gallery */}
        <BeforeAfterSection
          items={beforeAfterItems}
        />

        {/* 5. Treatment Steps & Methodology */}
        <ProcessSection />

        {/* 6. Specialist Profile & Certifications */}
        <SpecialistSection
          config={studioConfig}
        />

        {/* 7. Client Testimonials */}
        <TestimonialsSection
          testimonials={testimonials}
        />

        {/* 8. Interactive Booking Calculator & WhatsApp Generator */}
        <BookingCalculatorSection
          config={studioConfig}
          services={services}
          preselectedService={preselectedBookingService}
        />

        {/* 9. Frequently Asked Questions */}
        <FAQSection
          faqs={faqs}
          config={studioConfig}
        />
      </main>

      {/* Footer */}
      <Footer
        config={studioConfig}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Media & Brand Customizer Drawer */}
      <MediaManagerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        config={studioConfig}
        onUpdateConfig={(newConfig) => setStudioConfig(newConfig)}
      />

      {/* Quick Floating Customizer Action for User Convenience */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5">
        <button
          onClick={() => setIsCustomizerOpen(true)}
          className="px-4 py-2.5 rounded-full bg-[#181818]/90 hover:bg-[#222] border border-[#c5a059]/50 text-[#e5c378] hover:text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-2xl flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer"
          title="Cambiar foto de la chica, logo o datos del estudio"
        >
          <Sliders className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="hidden sm:inline">Personalizar Fotos / Logo</span>
        </button>
      </div>
    </div>
  );
}
