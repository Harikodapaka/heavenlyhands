import { Header, type HeaderLink } from '@/components/Header/Header';

export const links: HeaderLink[] = [
    { label: 'About', href: '/#about' },
    {
        label: 'Services',
        links: [
            { label: 'Registered Massage Therapy', href: '/massage-therapy' },
            { label: 'Acupuncture', href: '/acupuncture' },
            { label: 'Osteopathy', href: '/osteopathy' },
        ],
    },
    { label: 'Contact', href: '/contact' },
    { label: 'Pricing', href: '/pricing' },
];