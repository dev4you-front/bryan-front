// Types et interfaces pour l'application Bryan Littré

export interface SiteMetadata {
  title: string;
  description: string;
  icons?: {
    icon?: string;
    shortcut?: string;
    apple?: string;
  };
}

export interface ConfItem {
  src: string;
  title: string;
}

export interface Formation {
  title?: string;
  description: string;
  video?: string;
  videos?: ConfItem[];
}

export interface Article {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
  link: string;
  contentPath: string;
  category?: string;
}

export interface PhysiomapsSection {
  title: string;
  description: string;
  url: string;
}

export interface FormationsData {
  sport: {
    formations: Formation[];
  };
  neuro: {
    formations: Formation[];
  };
  vasculaire: {
    formations: Formation[];
    videos?: ConfItem[];
  };
  geriatrie: {
    formations: Formation[];
  };
}

export interface UpcomingFormation {
  id: string;
  date: string;
  endDate?: string; // Pour les formations sur plusieurs jours
  city: string;
  country: string;
  organizer: string;
  type: 'neuro' | 'sport';
  link?: string;
  isSpecial?: boolean; // Pour marquer les masterclass ou formations spéciales
  specialLabel?: string; // Label pour les formations spéciales (ex: "MASTERCLASS")
}