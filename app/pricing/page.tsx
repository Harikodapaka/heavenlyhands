'use client';

import Link from 'next/link';
import {
  Accordion,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { HeroImageRight } from '@/components/HeroContent/HeroImageRight';
import { BOOKING_JANEAPP_URL } from '@/utils/constants';
import { policyItems } from './policy-items';
import { pricing } from './pricing';

export default function PricingPage() {
  return (
    <>
      <HeroImageRight
        backgroundImage="/yoga-on-beach-scaled.jpg"
        title="Pricing"
        description="Transparent pricing for the services we offer. All sessions include an individualized consultation and a tailored treatment plan."
        cta={{
          label: 'Read Appointment Policy',
          href: '#appointment-policies'
        }}
      />
      <Box component="section" id="pricing">
        <Container size="lg" py={80}>
          <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="lg">
            {pricing.map((item) => (
              <Card key={item.title} withBorder radius="md" padding="lg">
                <Group justify="space-between" mb="xs">
                  <Text fw={600}>{item.title}</Text>
                  {item.highlight && <Badge color="themeColor4">{item.highlight}</Badge>}
                </Group>
                <Stack gap={6} mt="md" mb="md">
                  {item.details.map((detail) => (
                    <Text key={detail} size="sm" c="dimmed">
                      {detail}
                    </Text>
                  ))}
                </Stack>
                <Stack gap={6} mt="auto" mb="md">
                  {item.sessions.map((session) => (
                    <Group key={session.duration} justify="space-between" gap="xs">
                      <Text size="sm" c="dimmed">
                        {session.duration}
                      </Text>
                      <Text size="sm" fw={600}>
                        {session.price}
                      </Text>
                    </Group>
                  ))}
                </Stack>
                <Button
                  component={Link}
                  href={BOOKING_JANEAPP_URL}
                  color="themeColor1"
                  fullWidth
                  radius="md"
                >
                  Book Appointment
                </Button>
              </Card>
            ))}
          </SimpleGrid>
          <Stack gap={6} mt="xl">
            <Text size="sm" fw={600}>
              ** ALL PRICES INCLUDE HST
            </Text>
            <Text size="sm" c="dimmed">
              PLEASE NOTE: We do not offer direct billing at this time. Payments must be made at
              time of treatment and a receipt will be issued for you to submit to your health care
              insurance provider.
            </Text>
          </Stack>
        </Container>
      </Box>
      <Box component="section" id="appointment-policies">
        <Container size="lg" pt={0} pb={60}>
          <Stack gap="md">
            <Title order={2}>Appointment Policies</Title>
            <Text>
              Our appointment policies are strictly enforced here at HeavenlyHands. We kindly ask
              that if you are unable to keep your appointment, please provide a minimum of 24 hours
              notice in order to avoid being charged a fee. This allows us time to offer your
              booking to someone else in need.
            </Text>
            <Text>
              Your appointment time is reserved especially for you. All appointments will begin at
              their originally scheduled times. Should you be late, you may receive treatment for
              the remainder of time however will be charged the full amount of your original
              booking.
            </Text>
            <Text>
              Please note that email reminders are a courtesy and not guaranteed. When booking, you
              are agreeing to take full responsibility for your appointment. Please mark your
              appointments down in your calendar and if you have any questions please call.
            </Text>
            <Text fw={600}>
              When booking online with us you are accepting the cancellation policy. If any further
              clarification is needed please contact us.
            </Text>
            <Accordion variant="separated" radius="md">
              {policyItems.map((item) => (
                <Accordion.Item key={item.value} value={item.value}>
                  <Accordion.Control>{item.title}</Accordion.Control>
                  <Accordion.Panel>
                    {item.body.map((text, index) => (
                      <Text
                        key={`${item.value}-${index}`}
                        fw={item.emphasized?.includes(index) ? 600 : undefined}
                        mt={index === 0 ? 0 : 'sm'}
                      >
                        {text}
                      </Text>
                    ))}
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
