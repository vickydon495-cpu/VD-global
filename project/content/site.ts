import type { NavItem, FooterColumn } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', description: 'Overview of VD Global' },
  { label: 'About', href: '/about', description: 'The firm and its approach' },
  { label: 'Solutions', href: '/solutions', description: 'Advisory services' },
  { label: 'Authority Assessment', href: '/assessment', description: 'Evaluate your authority positioning' },
  { label: 'Knowledge Hub', href: '/knowledge', description: 'Insights and education' },
  { label: 'Case Studies', href: '/case-studies', description: 'Selected engagements' },
  { label: 'Contact', href: '/contact', description: 'Start a conversation' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Firm',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Engage',
    links: [
      { label: 'Authority Assessment', href: '/assessment' },
      { label: 'Knowledge Hub', href: '/knowledge' },
    ],
  },
];

export const FIRM = {
  name: 'VD Global',
  tagline: 'Authority Advisory',
  description:
    'An Authority Advisory Firm helping founders and businesses build Recognition, Credibility, Authority and Trust through ethical PR, media strategy and Wikipedia advisory.',
  email: 'hello@vdglobal.example',
  location: 'Remote · Global',
};
