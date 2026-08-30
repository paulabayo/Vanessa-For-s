export interface ServiceItem {
  id: string;
  name: string;
  category: 'cejas' | 'labios' | 'ojos' | 'paramedica';
  categoryLabel: string;
  price: number;
  duration: string;
  healingTime: string;
  durability: string;
  description: string;
  details: string[];
  recommendedFor: string;
  image: string;
  badge?: string;
}

export interface DocumentSection {
  id: string;
  title: string;
  category: 'consentimiento' | 'previos' | 'posteriores' | 'cicatrizacion' | 'bioseguridad' | 'personalizado';
  categoryLabel: string;
  iconName: string;
  summary: string;
  importantNote?: string;
  points: {
    title: string;
    description: string;
    warning?: boolean;
    dayRange?: string;
  }[];
  printable?: boolean;
  lastUpdated?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  service: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  technique: string;
  retouchTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'dolor' | 'duracion' | 'cuidados';
}

export interface StudioConfig {
  studioName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  logoImage: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  email: string;
  location: string;
  schedule: string;
  specialistName: string;
  specialistTitle: string;
  specialistBio: string;
}
