'use client';

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  Menu,
  ScrollArea,
  Stack,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconMoonStars, IconSun } from '@tabler/icons-react';
import logoImage from '@/public/heavenly-hands-logo.png';
import classes from './Header.module.css';

export type HeaderLink = {
  label: string;
  href?: string;
  links?: { label: string; href: string }[];
};

type HeaderProps = {
  links: HeaderLink[];
  logo?: { src: StaticImageData; alt: string; href?: string };
  cta?: { label: string; href: string };
};

export function Header({ links, logo, cta }: HeaderProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const resolvedLogo = logo ?? { src: logoImage, alt: 'Heavenly Hands', href: '/' };
  const toggleColorScheme = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  const desktopLinks = links.map((link) =>
    link.links?.length ? (
      <Menu key={link.label} trigger="hover" withinPortal>
        <Menu.Target>
          <UnstyledButton className={classes.link}>
            <span>{link.label}</span>
            <IconChevronDown size={14} className={classes.chevron} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          {link.links.map((item) => (
            <Menu.Item key={item.label} component={Link} href={item.href}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    ) : (
      <Link key={link.label} className={classes.link} href={link.href ?? '#'}>
        {link.label}
      </Link>
    )
  );

  const mobileLinks = links.map((link) =>
    link.links?.length ? (
      <Box key={link.label}>
        <Text className={classes.drawerLabel}>{link.label} <IconChevronDown size={14} /></Text>
        <Stack gap="md" pl="md" pt="md">
          {link.links.map((item) => (
            <Link key={item.label} className={classes.drawerLink} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
        </Stack>
      </Box>
    ) : (
      <Link key={link.label} className={classes.drawerLink} href={link.href ?? '#'} onClick={close}>
        {link.label}
      </Link>
    )
  );

  return (
    <Box component="header" className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Link href={resolvedLogo.href ?? '/'} className={classes.logo}>
          <Image
            src={resolvedLogo.src}
            alt={resolvedLogo.alt}
            height={40}
            width={160}
            className={classes.logoImage}
            priority
          />
        </Link>
        <Group gap="lg" visibleFrom="sm">
          {desktopLinks}

          {cta && (
            <Button component={Link} href={cta.href} color="themeColor1">
              {cta.label}
            </Button>
          )}
          <ActionIcon
            variant="subtle"
            color="themeColor1"
            size="lg"
            aria-label="Toggle color scheme"
            onClick={toggleColorScheme}
          >
            {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" aria-label="Toggle menu" />
      </Container>

      <Drawer opened={opened} onClose={close} size="100%" padding="md" hiddenFrom="sm">
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Stack px="md" gap="lg">
            {mobileLinks}
            {cta && (
              <>
                <Divider />
                <Button component={Link} href={cta.href} color="themeColor4" onClick={close}>
                  {cta.label}
                </Button>
              </>
            )}
            <ActionIcon
              variant="light"
              color="themeColor1"
              size="lg"
              aria-label="Toggle color scheme"
              onClick={toggleColorScheme}
              w="100%"
            >
              {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
          </Stack>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
