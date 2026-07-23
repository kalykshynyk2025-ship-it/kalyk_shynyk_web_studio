export interface ServiceItem {
  id: string;
  title: string;
  category: 'mini-site' | 'landing' | 'mini-game' | 'quest';
  description: string;
  exampleUrl: string;
  badge: string;
  badgeColor: 'red' | 'green' | 'black';
  features: string[];
  iconName: string;
}

export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  contactPerson: string;
  telegramUrl: string;
  email: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
