import { HeroImageRight } from '@/components/HeroContent/HeroImageRight';
import { Anchor, Box, Container, Group, Stack, Text } from '@mantine/core';
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from '@/app/utils/constants';
import { IconPhoneCall, IconMapPin, IconMail } from '@tabler/icons-react';

export default function ContactPage() {
    return (
        <>
            <HeroImageRight
                backgroundImage="/yoga-on-beach-scaled.jpg"
                title="Contact Us"
                description="We’re here to assist you on your journey to optimal health and well-being. Please feel free to reach out to us with any questions, concerns, or to schedule an appointment. Our dedicated team is eager to assist you in any way we can. Your health is our priority."
                cta={{ label: 'Reach Us', href: '#contact-us' }}
            />
            <Container size="lg" id="contact-us">
                <Group gap="xl" pt="60" pb="60" align="flex-start" justify="space-between">
                    <Stack flex={1}>
                        <Group>
                            <IconPhoneCall size={30} color="var(--mantine-color-gray-9)" />
                            <>
                                <Anchor href={`tel:${CONTACT_PHONE_TEL}`}>
                                    <Text size="xl">
                                        {CONTACT_PHONE} (SAMANTHA)
                                    </Text>
                                </Anchor>
                            </>
                        </Group>
                        <Text size="sm" c='dimmed'>*If we are busy with a patient please leave a voicemail and we will get back to you. Please note we do not have a receptionist.</Text>
                        <Box h={300} w={400} bg="gray.2">
                            map
                        </Box>
                        <Group>
                            <IconMapPin size={30} color="var(--mantine-color-gray-9)" />
                            <>
                                <Anchor href="https://share.google/dmMaBMBcdsEb7pcFl">
                                    <Text>
                                        {CONTACT_ADDRESS}
                                    </Text>
                                </Anchor>

                            </>
                        </Group>
                        <Group>
                            <IconMail size={30} color="var(--mantine-color-gray-9)" />
                            <>
                                <Anchor href={`mailto:${CONTACT_EMAIL}`}>
                                    <Text>
                                        {CONTACT_EMAIL}
                                    </Text>
                                </Anchor>
                            </>
                        </Group>
                    </Stack>
                    <Stack flex={1} miw={400}>
                        <Text size="xl">
                            Business Hours:
                        </Text>
                        <Text>
                            Monday: 9:00 AM – 6:00 PM
                        </Text>
                        <Text>
                            Tuesday: 9:00 AM – 6:00 PM
                        </Text>
                        <Text>
                            Wednesday: 9:00 AM – 6:00 PM
                        </Text>
                        <Text>
                            Thursday: 9:00 AM – 6:00 PM
                        </Text>
                        <Text>
                            Friday: 9:00 AM – 6:00 PM
                        </Text>
                        <Text>
                            Saturday: Closed
                        </Text>
                        <Text>
                            Sunday: Closed
                        </Text>
                        <Text c="orange">
                            BY APPOINTMENT ONLY
                        </Text>
                    </Stack>
                </Group>
            </Container>
        </>
    );
}
