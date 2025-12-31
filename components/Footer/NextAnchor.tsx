'use client';

import Link from 'next/link';
import { Anchor } from '@mantine/core';
import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type NextAnchorProps = PropsWithChildren<
    {
        href: string;
        underline?: 'always' | 'hover';
    } & Omit<ComponentPropsWithoutRef<typeof Anchor>, 'href' | 'component'>
>;

export function NextAnchor({ href, children, ...props }: NextAnchorProps) {
    return (
        <Anchor component={Link} href={href} {...props}>
            {children}
        </Anchor>
    );
}
