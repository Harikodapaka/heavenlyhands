import { HeroImageRight } from "@/components/HeroContent/HeroImageRight";
import { Anchor, Box, Container, Group, Stack, Text } from "@mantine/core";

export default function ContactPage() {
    return (
        <>
            <HeroImageRight
                backgroundImage="/yoga-on-beach-scaled.jpg"
                title="Contact Us"
                description="We’re here to assist you on your journey to optimal health and well-being.
Please feel free to reach out to us with any questions, concerns, or to schedule an appointment. Our dedicated team is eager to assist you in any way we can. Your health is our priority."
                cta={{ label: 'Reach Us', href: '#contact-us' }}
            />
            <Container size="lg" id="contact-us">
                <Group gap="xl" pt="60" pb="60" align="flex-start" justify="space-between">
                    <Stack flex={1}>
                        <Anchor href="tel:5189998898">
                            <Text size="xl">
                                518-999-8898 (SAMANTHA)
                            </Text>
                        </Anchor>
                        <Text size="sm" c='dimmed'>*If we are busy with a patient please leave a voicemail and we will get back to you. Please note we do not have a receptionist.</Text>
                        <Box h={300} w={400} bg="gray.2">
                            map
                        </Box>
                        <Anchor href="https://share.google/dmMaBMBcdsEb7pcFl">
                            <Text>
                                122 Edward St, Cambridge, Ontario, N3C 1K3
                            </Text>
                        </Anchor>
                        <Anchor href="mailto:5189998898">
                            <Text>
                                samantha.dasilva@hotmail.ca
                            </Text>
                        </Anchor>
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
                        <Text c={"orange"}>
                            BY APPOINTMENT ONLY
                        </Text>
                    </Stack>
                </Group>
            </Container>
        </>
    );
}
