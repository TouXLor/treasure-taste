export interface MenuItem {
  id: number;
  name: string;
  price?: string;
  image?: string;
  description?: string;
  type: 'corndog' | 'sushi' | 'drink';
  colorTheme?: string;
  accentColor?: string;
}

export interface NavLink {
  label: string;
  href: string;
}