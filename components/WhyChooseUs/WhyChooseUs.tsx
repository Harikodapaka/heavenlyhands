'use client';

import Link from 'next/link';
import { Box, Button, Container, NavLink, Stack, Text, Title } from '@mantine/core';
import classes from './WhyChooseUs.module.css';

export function WhyChooseUs() {
  return (
    <Box component="section" id="why-choose-us" className={classes.section}>
      <Container size="lg" className={classes.inner}>
        <Stack gap="md" className={classes.content}>
          <Title order={2} className={classes.title}>
            Why Choose HeavenlyHands?
          </Title>
          <Text className={classes.description}>
            Serving the Town of Milton since 2010, HeavenlyHands Wellness Clinic prides itself in
            supporting the health and wellness of our community. All our therapists and
            practitioners are
            highly trained and experienced to treat a broad spectrum of therapeutic needs including
            Sports Injuries, Prenatal Aches and Pains, Migraine and Headache Treatments or a simple
            Relaxation Massage to destress and unwind.
          </Text>
          <Text className={classes.description}>
            No matter your reason for visiting us, rest assured you are in great healing hands.
          </Text>
          <Text className={classes.description}>
            Our number one priority is to help you achieve optimal health and wellness.
          </Text>
          <Button component={Link} href="/" size="xl" radius="xl" className={classes.cta}>
            Book Appointment
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
