import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Clock, 
  HeartHandshake, 
  Sparkles, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  Printer, 
  Download, 
  Plus, 
  Trash2, 
  Edit3, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Calendar,
  Share2
} from 'lucide-react';
import { DocumentSection } from '../types';

interface DocumentOrganizerSectionProps {
  documents: DocumentSection[];
  onAddDocument: (doc: DocumentSection) => void;
  onDeleteDocument: (id: string) => void;
}

export const DocumentOrganizerSection: React.FC<DocumentOrganizerSectionProps> = ({
  documents,
  onAddDocument,
  onDeleteDocument
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedDocId, setExpandedDocId] = useState<string>(documents[0]?.id || '');
  const [activePrintDoc, setActivePrintDoc] = useState<DocumentSection | null>(null);
  
  // Custom Doc Creator State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'consentimiento' | 'previos' | 'posteriores' | 'cicatrizacion' | 'bioseguridad' | 'personalizado'>('personalizado');
  const [newSummary, setNewSummary] = useState('');
  const [newNote, setNewNote] = useState('');
  const [newPointsText, setNewPointsText] = useState('');

  const categories = [
    { id: 'all', label: 'Todos los Documentos' },
    { id: 'consentimiento', label: 'Consentimiento & Salud' },
    { id: 'previos', label: 'Preparación Pre-Care' },
    { id: 'posteriores', label: 'Cuidados Post-Care' },
    { id: 'cicatrizacion', label: 'Evolución del Color' },
    { id: 'bioseguridad', label: 'Bioseguridad' }
  ];

  const filteredDocs = selectedCategory === 'all' 
    ? documents 
    : documents.filter(doc => doc.category === selectedCategory);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#c5a059]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#c5a059]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-[#c5a059]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#c5a059]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#c5a059]" />;
      default: return <FileText className="w-5 h-5 text-[#c5a059]" />;
    }
  };

  const handleCreateDocument = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const parsedPoints = newPointsText
      .split('\n')
      .filter(line => line.trim().length > 0)
      .map((line, idx) => {
        const parts = line.split(':');
        if (parts.length > 1) {
          return {
            title: parts[0].trim(),
            description: parts.slice(1).join(':').trim(),
            warning: parts[0].toLowerCase().includes('atención') || parts[0].toLowerCase().includes('prohibido')
          };
        }
        return {
          title: `Punto ${idx + 1}`,
          description: line.trim()
        };
      });

    const newDoc: DocumentSection = {
      id: `custom-doc-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      categoryLabel: categories.find(c => c.id === newCategory)?.label || 'Documento Personalizado',
      iconName: 'FileText',
      summary: newSummary || 'Protocolo personalizado añadido al expediente del estudio.',
      importantNote: newNote,
      points: parsedPoints.length > 0 ? parsedPoints : [
        { title: 'Información General', description: newSummary }
      ],
      printable: true,
      lastUpdated: 'Añadido recientemente'
    };

    onAddDocument(newDoc);
    setShowAddModal(false);
    setNewTitle('');
    setNewSummary('');
    setNewNote('');
    setNewPointsText('');
    setExpandedDocId(newDoc.id);
  };

  const handlePrint = (doc: DocumentSection) => {
    setActivePrintDoc(doc);
    setTimeout(() => {
      window.print();
    }, 200);
  };

  return (
    <section id="documentos" className="py-20 bg-[#0d0d0d] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#e5c378] text-xs uppercase tracking-widest font-semibold mb-3">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Expediente Clínico & Guías Oficiales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal">
              Documentación y <span className="italic text-[#e5c378]">Protocolos del Tratamiento</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-2 font-light">
              Toda la información médica, consentimientos informados y pautas día a día organizadas para la máxima tranquilidad y seguridad de la clienta.
            </p>
          </div>

          {/* Action to Add/Organize New Custom Documents */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2.5 rounded-full bg-[#1c1c1c] hover:bg-[#252525] border border-[#c5a059]/40 text-[#e5c378] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg hover:border-[#c5a059]"
            >
              <Plus className="w-4 h-4 text-[#c5a059]" />
              <span>+ Añadir / Organizar Documento</span>
            </button>
          </div>
        </div>

        {/* Category Selector Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#c5a059] text-black font-semibold shadow-md shadow-[#c5a059]/20'
                  : 'bg-[#151515] text-neutral-400 hover:text-white border border-white/5 hover:border-white/15'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Document Cards Grid / Interactive Accordions */}
        <div className="space-y-5">
          {filteredDocs.map((doc) => {
            const isExpanded = expandedDocId === doc.id;
            return (
              <div
                key={doc.id}
                className={`bg-[#141414] rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'border-[#c5a059]/50 shadow-xl shadow-black/60' : 'border-white/5 hover:border-white/15'
                }`}
              >
                {/* Accordion Header */}
                <div
                  onClick={() => setExpandedDocId(isExpanded ? '' : doc.id)}
                  className="p-5 sm:p-6 flex items-center justify-between cursor-pointer select-none bg-gradient-to-r from-transparent via-white/[0.01] to-transparent hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1c1c1c] border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                      {getCategoryIcon(doc.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-serif text-white font-medium">
                          {doc.title}
                        </h3>
                        <span className="text-[10px] uppercase tracking-wider bg-[#c5a059]/10 text-[#e5c378] border border-[#c5a059]/20 px-2 py-0.5 rounded-full font-medium">
                          {doc.categoryLabel}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-1 font-light line-clamp-1 sm:line-clamp-none">
                        {doc.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrint(doc);
                      }}
                      className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs border border-white/10 transition-colors"
                      title="Imprimir o Guardar PDF para la clienta"
                    >
                      <Printer className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>Imprimir / PDF</span>
                    </button>

                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-[#e5c378]" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Content View */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/5 bg-[#111111] animate-in fade-in-50 duration-200">
                    
                    {/* Important Alert / Notice Banner if present */}
                    {doc.importantNote && (
                      <div className="mb-6 p-4 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-[#e5c378] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-[#e5c378] uppercase tracking-wider">
                            Aviso Clínico Importante
                          </p>
                          <p className="text-xs text-neutral-200 mt-0.5 font-light">
                            {doc.importantNote}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Detailed Points Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {doc.points.map((point, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-xl border transition-all ${
                            point.warning
                              ? 'bg-amber-950/20 border-amber-500/30'
                              : 'bg-[#181818] border-white/5 hover:border-[#c5a059]/20'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              {point.warning ? (
                                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                              ) : (
                                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                              )}
                              <h4 className="text-sm font-semibold text-white">
                                {point.title}
                              </h4>
                            </div>
                            {point.dayRange && (
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/10 text-neutral-300">
                                {point.dayRange}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-neutral-300 font-light leading-relaxed pl-6">
                            {point.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Action Toolbar for this Document */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
                      <div className="flex items-center gap-4">
                        {doc.lastUpdated && (
                          <span className="text-[11px] text-neutral-400">
                            Última actualización: {doc.lastUpdated}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handlePrint(doc)}
                          className="px-3.5 py-2 rounded-lg bg-[#c5a059] text-black font-semibold hover:bg-[#d4af37] transition-all flex items-center gap-1.5"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>Ficha Imprimible para Clienta</span>
                        </button>

                        {doc.id.startsWith('custom-') && (
                          <button
                            onClick={() => onDeleteDocument(doc.id)}
                            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-lg border border-red-500/20 transition-colors"
                            title="Eliminar este documento personalizado"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#171717] via-[#1c1c1c] to-[#171717] border border-[#c5a059]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059] flex items-center justify-center text-[#c5a059] shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-serif text-white font-semibold">
                ¿Tienes dudas médicas o tomas medicación específica?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mt-0.5">
                Realizamos una valoración diagnóstica personalizada previa sin ningún compromiso.
              </p>
            </div>
          </div>
          <a
            href="#reservar"
            className="px-6 py-3 rounded-full bg-[#c5a059] hover:bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-wider whitespace-nowrap transition-all shadow-lg hover:scale-105"
          >
            Consultar con la Especialista
          </a>
        </div>

      </div>

      {/* Modal: Add or Organize Custom Documents */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] border border-[#c5a059]/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <h3 className="text-2xl font-serif text-white font-bold">
                  Organizar Nuevo Documento o Pauta
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Pega o escribe el contenido de tus documentos para integrarlos visualmente en la one-page.
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateDocument} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                  Título del Documento *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Protocolo de Retoque & Mantenimiento Anual"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                    Categoría
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e: any) => setNewCategory(e.target.value)}
                    className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="consentimiento">Consentimiento & Ficha Médica</option>
                    <option value="previos">Cuidados Previos (Pre-Care)</option>
                    <option value="posteriores">Cuidados Posteriores (Post-Care)</option>
                    <option value="cicatrizacion">Evolución del Color</option>
                    <option value="bioseguridad">Bioseguridad & Higiene</option>
                    <option value="personalizado">Guía Personalizada del Estudio</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                    Resumen Breve
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Normas obligatorias para las primeras 72 horas..."
                    value={newSummary}
                    onChange={(e) => setNewSummary(e.target.value)}
                    className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                  Aviso Clínico / Nota de Advertencia (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej: En caso de enrojecimiento excesivo, contactar de inmediato con el estudio."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                  Puntos / Artículos del Documento (Un punto por línea)
                </label>
                <textarea
                  rows={5}
                  placeholder={`Ejemplo:
Higiene diaria: Lavar 2 veces al día con agua fría y secar a toques suaves.
Prohibido rascar: No retirar las pielecillas que se formen bajo ningún concepto.
Sin maquillaje: No aplicar cosméticos en la zona tratada durante 10 días.`}
                  value={newPointsText}
                  onChange={(e) => setNewPointsText(e.target.value)}
                  className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl p-4 text-sm text-white font-mono focus:outline-none focus:border-[#c5a059]"
                />
                <p className="text-[11px] text-neutral-400 mt-1">
                  Tip: Escribe "Título: Explicación" en cada línea para generar títulos en negrita automáticamente.
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-semibold uppercase tracking-wider"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#c5a059] hover:bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#c5a059]/20"
                >
                  Guardar & Organizar en la Web
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Printable Sheet View Overlay (Triggered by window.print()) */}
      {activePrintDoc && (
        <div id="print-sheet" className="hidden print:block fixed inset-0 bg-white text-black p-8 z-[99999]">
          <div className="border-b-2 border-black pb-4 mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold uppercase tracking-wider">L'AUREA MICROPIGMENTACIÓN</h1>
              <p className="text-xs text-gray-600">Documento Informativo para la Paciente</p>
            </div>
            <div className="text-right text-xs text-gray-500">
              <p>Fecha: {new Date().toLocaleDateString()}</p>
              <p>Ficha: {activePrintDoc.id}</p>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-2">{activePrintDoc.title}</h2>
          <p className="text-sm italic text-gray-700 mb-4">{activePrintDoc.summary}</p>

          {activePrintDoc.importantNote && (
            <div className="border-2 border-black p-3 mb-6 bg-gray-100 text-xs font-bold">
              ATENCIÓN: {activePrintDoc.importantNote}
            </div>
          )}

          <div className="space-y-4">
            {activePrintDoc.points.map((pt, i) => (
              <div key={i} className="border-b border-gray-200 pb-2">
                <p className="font-bold text-sm">{i + 1}. {pt.title}</p>
                <p className="text-xs text-gray-800 mt-0.5">{pt.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-300 flex justify-between text-xs text-gray-600">
            <div>
              <p>Firma de la Especialista: ______________________</p>
            </div>
            <div>
              <p>Firma de Conformidad de la Clienta: ______________________</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
