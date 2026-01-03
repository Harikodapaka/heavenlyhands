import Image from 'next/image';
import Link from 'next/link';
import { ActionIcon, Anchor, Box, Container, Divider, Group, Stack, Text } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconExternalLink } from '@tabler/icons-react';
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
} from '@/app/utils/constants';
import logoImage from '@/public/heavenly-hands-logo.png';
import classes from './Footer.module.css';

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', color: '#0866FF', icon: IconBrandFacebook },
  { label: 'Instagram', href: 'https://instagram.com', color: '#C13584', icon: IconBrandInstagram },
];

const hours = [
  'Mon - Fri: 9:00 AM - 6:00 PM',
  'Sat: 10:00 AM - 5:00 PM',
  'Sun: Closed',
];

const contactLinks = [
  { label: CONTACT_ADDRESS },
  { label: CONTACT_PHONE, href: `tel:${CONTACT_PHONE_TEL}` },
  { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
];

export function Footer() {
  return (
    <Box component="footer" className={classes.footer} bg={{ light: 'gray.1', dark: 'dark.7' }}>
      <Container size="lg" className={classes.inner}>
        <Stack gap="sm" flex={1}>
          <Image src={logoImage} alt="Heavenly Hands" height={32} width={140} />
          <Text size="sm">Massage Therapy in Cambridge, Kitchener & Waterloo</Text>
          <Group gap="xs" className={classes.social}>
            {socialLinks.map(({ label, href, color, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={classes.socialLink}
              >
                <ActionIcon size="lg" variant="outline" radius="xl" color={color}>
                  <Icon size={18} color={color} />
                </ActionIcon>
              </Link>
            ))}
          </Group>
        </Stack>

        <Stack gap="sm">
          <Text size="lg" fw={500}>
            Opening hours
          </Text>
          {hours.map((line) => (
            <Text key={line} size="sm">
              {line}
            </Text>
          ))}
        </Stack>

        <Stack gap="sm">
          <Text size="lg" fw={500}>
            Contact Us
          </Text>
          {contactLinks.map(({ label, href }) =>
            href ? (
              <Anchor key={label} href={href} size="sm">
                {label}
              </Anchor>
            ) : (
              <Text key={label} size="sm">
                {label}
              </Text>
            )
          )}
        </Stack>
      </Container>

      <Container size="lg">
        <Divider my="md" />
        <Group justify="space-between" gap="sm">
          <Text size="sm">
            © 2025 Heavenly Hands Inc. All Rights Reserved |{' '}
            <Link href="/privacy-policy" className={classes.link}>
              Privacy Policy
            </Link>
          </Text>
          <Text size="xs" c="dimmed" ta="left">
            Developed by{' '}
            <Anchor href="https://techstellarconsulting.ca" target="_blank">
              TechStellar <IconExternalLink size={10} />
            </Anchor>
          </Text>
        </Group>
      </Container>
    </Box>
  );
}
