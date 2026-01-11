export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface SocialLink {
  iconClass: string;
  url: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}
