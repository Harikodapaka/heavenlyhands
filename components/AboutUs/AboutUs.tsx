'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Container, Stack, Text, Title } from '@mantine/core';
import aboutImage from '@/public/interior.png';
import classes from './AboutUs.module.css';

export function AboutUs() {
    return (
        <Box component="section" id="about" className={classes.section}>
            <Container size="lg" className={classes.inner}>
                <Stack gap="md" className={classes.content}>
                    <Title order={2} className={classes.title} m="md">
                        About Us
                    </Title>
                    <Text className={classes.description}>
                        At Heavenly Hands, we believe in the power of creating a nurturing environment that
                        fosters balance and helps you achieve a state of overall wellness. Our team is
                        committed to providing personalized care, ensuring that you receive the attention and
                        support you need on your journey to optimal health.
                    </Text>
                    <Text className={classes.description}>
                        Step into our warm and welcoming space, and let us guide you towards a healthier,
                        happier you.
                    </Text>
                    <Button
                        component={Link}
                        href="#team"
                        size="md"
                        radius="xl"
                        color="themeColor1"
                        className={classes.cta}
                    >
                        Meet the Team
                    </Button>
                </Stack>

                <Box className={classes.imageWrap}>
                    <Image
                        src={aboutImage}
                        alt="Relaxing wellness studio interior"
                        fill
                        sizes="(max-width: 62em) 100vw, 40vw"
                        className={classes.image}
                        priority
                    />
                </Box>
            </Container>
        </Box>
    );
}
