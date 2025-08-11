// Types globaux pour l'application

export interface ConfItem {
  src: string;
  title: string;
}

export interface Article {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
  link: string;
}

export interface Formation {
  title: string;
  description: string;
  video: string;
  link?: string;
}

export interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

export interface NavLinkConfig {
  href?: string;
  label: string;
  subLinks?: NavLinkConfig[];
}

export interface SiteMetadata {
  title: string;
  description: string;
}