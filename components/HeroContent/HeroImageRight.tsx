'use client';

import { type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import { Button, Container, Text, Title } from '@mantine/core';
import classes from './HeroImageRight.module.css';

type HeroImageRightProps = {
  backgroundImage: string;
  title: ReactNode;
  description: ReactNode;
  cta?: { label: string; href: string };
};

export function HeroImageRight({
  backgroundImage,
  title,
  description,
  cta,
}: HeroImageRightProps) {
  const style = backgroundImage
    ? ({ '--hero-image': `url(${backgroundImage})` } as CSSProperties)
    : undefined;

  return (
    <div className={classes.root} style={style}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>{title}</Title>
            <Text className={classes.description} mt={30}>
              {description}
            </Text>
            {cta && (
              <Button size="lg" radius="xl" component={Link} href={cta.href} className={classes.control}>
                {cta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
