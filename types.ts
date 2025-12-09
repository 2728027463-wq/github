import { LucideIcon } from 'lucide-react';

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  icon: LucideIcon; // Changed from imageUrl to icon
  isOfficial?: boolean;
}

export interface SubSection {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  links: LinkItem[];
}

export interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  sections: SubSection[];
}

export interface BrandConcept {
  name: string;
  tagline: string;
  rationale: string;
}

export interface LogoConcept {
  element: string;
  colorPalette: string;
  philosophy: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}