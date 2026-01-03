'use client';

import React, { use } from "react";
import {
    Container,
    Box,
    Group,
    Stack,
    Title,
    Text,
    Button,
    Badge,
    SimpleGrid,
    Card,
    Image,
    Divider,
    ThemeIcon,
    Paper,
    Avatar,
    Center,
    Anchor,
} from "@mantine/core";
import {
    IconCalendarEvent,
    IconStethoscope,
    IconDiscountCheck,
    IconHeartHandshake,
    IconMapPin,
    IconSparkles,
    IconArrowRight,
    IconQuote,
} from "@tabler/icons-react";

export default function HomeTemplateMantine() {
    return (
        <Box>

            {/* HERO */}
            <HeroSection />

            {/* TRUST STRIP */}
            <TrustStrip />

            {/* ABOUT */}
            <AboutSection />

            {/* SERVICES */}
            <ServicesSection />

            {/* HOW IT WORKS */}
            <HowItWorksSection />

            {/* MISSION + WHY CHOOSE */}
            <Container size="lg" py={64}>
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                    <MissionCard />
                    <WhyChooseCard />
                </SimpleGrid>
            </Container>

            {/* TESTIMONIALS */}
            <TestimonialsSection />

            {/* FINAL CTA */}
            <FinalCTA />

            {/* FOOTER */}
            {/* <FooterSection /> */}
        </Box>
    );
}

/* ----------------------------- Header ----------------------------- */

function HeaderBar() {
    return (
        <Box
            component="header"
            style={{
                position: "sticky",
                top: 0,
                zIndex: 50,
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(8px)",
                borderBottom: "1px solid var(--mantine-color-gray-2)",
            }}
        >
            <Container size="lg" py="sm">
                <Group justify="space-between">
                    <Group gap="sm">
                        <ThemeIcon radius="xl" variant="light">
                            <IconSparkles size={18} />
                        </ThemeIcon>
                        <Text fw={700}>Heavenly Hands</Text>
                    </Group>

                    <Group gap="lg" visibleFrom="sm">
                        <Anchor href="#about" underline="never">
                            About
                        </Anchor>
                        <Anchor href="#services" underline="never">
                            Services
                        </Anchor>
                        <Anchor href="#contact" underline="never">
                            Contact
                        </Anchor>
                        <Button radius="xl">Book Appointment</Button>
                    </Group>

                    <Button radius="xl" hiddenFrom="sm">
                        Book
                    </Button>
                </Group>
            </Container>
        </Box>
    );
}

/* ------------------------------ Hero ------------------------------ */

function HeroSection() {
    return (
        <Box
            style={{
                background:
                    "radial-gradient(1200px 500px at 20% 20%, rgba(0, 150, 136, 0.12), transparent 60%), radial-gradient(900px 400px at 80% 30%, rgba(33, 150, 243, 0.10), transparent 55%)",
            }}
        >
            <Container size="lg" py={72}>
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" style={{ alignItems: "center" }}>
                    <Stack gap="md">
                        <Badge variant="light" radius="xl" w="fit-content">
                            Serving KWC since 2020
                        </Badge>

                        <Title order={1} style={{ lineHeight: 1.05 }}>
                            Care that helps your body heal — and your mind slow down.
                        </Title>

                        <Text c="dimmed" size="lg">
                            Personalized massage & wellness therapies in Cambridge, Kitchener & Waterloo.
                            Book online in minutes.
                        </Text>

                        <Group>
                            <Button radius="xl" size="md" rightSection={<IconArrowRight size={16} />}>
                                Book Your Session
                            </Button>
                            <Button radius="xl" size="md" variant="light">
                                View Treatments
                            </Button>
                        </Group>

                        <Group gap="xs" mt="sm">
                            <Text size="sm" c="dimmed">
                                ⭐ 4.9 Google Rating
                            </Text>
                            <Text size="sm" c="dimmed">
                                •
                            </Text>
                            <Text size="sm" c="dimmed">
                                Registered therapists • Direct billing
                            </Text>
                        </Group>
                    </Stack>

                    <Box>
                        {/* “Organic mask” vibe via large radius + padding */}
                        <Paper radius={36} p={10} shadow="md" style={{ overflow: "hidden" }}>
                            <Image
                                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop"
                                alt="Wellness hero"
                                h={360}
                                style={{ borderRadius: 28 }}
                            />
                        </Paper>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

/* ---------------------------- Trust Strip ---------------------------- */

function TrustStrip() {
    const items = [
        { icon: IconStethoscope, label: "Registered Therapists" },
        { icon: IconDiscountCheck, label: "Direct Billing" },
        { icon: IconHeartHandshake, label: "Personalized Care" },
        { icon: IconMapPin, label: "Modern Clinic" },
    ];

    return (
        <Box style={{ borderTop: "1px solid var(--mantine-color-gray-2)", borderBottom: "1px solid var(--mantine-color-gray-2)" }}>
            <Container size="lg" py="md">
                <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md">
                    {items.map((it) => (
                        <Group key={it.label} gap="sm">
                            <ThemeIcon variant="light" radius="xl">
                                <it.icon size={18} />
                            </ThemeIcon>
                            <Text size="sm" fw={600}>
                                {it.label}
                            </Text>
                        </Group>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

/* ------------------------------ About ------------------------------ */

function AboutSection() {
    return (
        <Container id="about" size="lg" py={72}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" style={{ alignItems: "center" }}>
                <Paper radius={28} shadow="sm" p={10} style={{ overflow: "hidden" }}>
                    <Image
                        src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop"
                        alt="Clinic reception"
                        h={340}
                        style={{ borderRadius: 20 }}
                    />
                </Paper>

                <Stack gap="md">
                    <Title order={2}>About Heavenly Hands</Title>
                    <Text c="dimmed">
                        We create a calm, welcoming space where personalized care meets evidence-based
                        therapy — so you leave feeling lighter, stronger, and supported.
                    </Text>

                    <Group>
                        <Badge radius="xl" variant="light">
                            Founded in 2020
                        </Badge>
                        <Button radius="xl" variant="light" rightSection={<IconArrowRight size={16} />}>
                            Meet Our Team
                        </Button>
                    </Group>
                </Stack>
            </SimpleGrid>
        </Container>
    );
}

/* ----------------------------- Services ----------------------------- */

function ServicesSection() {
    const services = [
        {
            title: "Registered Massage Therapy",
            tag: "Recovery",
            desc: "Relieve pain, improve mobility, and recover faster with targeted treatment.",
            img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Acupuncture",
            tag: "Balance",
            desc: "Support healing, reduce stress, and restore balance with traditional techniques.",
            img: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Pregnancy Massage",
            tag: "Prenatal",
            desc: "Gentle, supportive care for comfort through every stage of pregnancy.",
            img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Pelvic Health Physiotherapy",
            tag: "Specialty",
            desc: "Personalized assessment and treatment for pelvic health and core stability.",
            img: "https://images.unsplash.com/photo-1576670159805-3814762d4d19?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    return (
        <Box id="services" style={{ background: "var(--mantine-color-gray-0)" }}>
            <Container size="lg" py={72}>
                <Group justify="space-between" align="flex-end" mb="lg">
                    <Stack gap={2}>
                        <Title order={2}>What We Do Best</Title>
                        <Text c="dimmed">Choose a service that matches your goals — relaxation or recovery.</Text>
                    </Stack>

                    <Button radius="xl" variant="light" rightSection={<IconArrowRight size={16} />} visibleFrom="sm">
                        View All Services
                    </Button>
                </Group>

                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                    {services.map((s) => (
                        <ServiceCard key={s.title} {...s} />
                    ))}
                </SimpleGrid>

                <Center mt="xl" hiddenFrom="sm">
                    <Button radius="xl" variant="light" rightSection={<IconArrowRight size={16} />}>
                        View All Services
                    </Button>
                </Center>
            </Container>
        </Box>
    );
}

function ServiceCard(props: { title: string; tag: string; desc: string; img: string }) {
    return (
        <Card
            radius="lg"
            shadow="sm"
            padding="md"
            style={{ overflow: "hidden", transition: "transform 160ms ease, box-shadow 160ms ease" }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0px)";
            }}
        >
            <Card.Section>
                <Image src={props.img} alt={props.title} h={160} />
            </Card.Section>

            <Stack gap={8} mt="sm">
                <Group justify="space-between">
                    <Text fw={700}>{props.title}</Text>
                    <Badge radius="xl" variant="light">
                        {props.tag}
                    </Badge>
                </Group>
                <Text c="dimmed" size="sm">
                    {props.desc}
                </Text>
                <Button variant="subtle" radius="md" rightSection={<IconArrowRight size={16} />} px={0}>
                    Learn more
                </Button>
            </Stack>
        </Card>
    );
}

/* --------------------------- How it Works --------------------------- */

function HowItWorksSection() {
    const steps = [
        { n: "1", title: "Book Online", desc: "Pick a service, therapist, and time that fits your schedule." },
        { n: "2", title: "Personalized Treatment", desc: "We tailor each session to your body and goals." },
        { n: "3", title: "Feel Better", desc: "Walk out relaxed, restored, and supported." },
    ];

    return (
        <Container size="lg" py={72}>
            <Stack gap="lg">
                <Stack gap={4}>
                    <Title order={2} ta="center">
                        Your Visit, Made Simple
                    </Title>
                    <Text c="dimmed" ta="center">
                        Clear steps that reduce stress and set expectations.
                    </Text>
                </Stack>

                <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
                    {steps.map((s) => (
                        <Paper key={s.n} radius="lg" p="lg" withBorder>
                            <Group mb="sm">
                                <ThemeIcon radius="xl" size="lg" variant="light">
                                    <Text fw={800}>{s.n}</Text>
                                </ThemeIcon>
                                <Text fw={700}>{s.title}</Text>
                            </Group>
                            <Text c="dimmed" size="sm">
                                {s.desc}
                            </Text>
                        </Paper>
                    ))}
                </SimpleGrid>

                <Center>
                    <Button radius="xl" size="md" leftSection={<IconCalendarEvent size={18} />}>
                        Book Appointment
                    </Button>
                </Center>
            </Stack>
        </Container>
    );
}

/* --------------------------- Mission + Why -------------------------- */

function MissionCard() {
    return (
        <Paper radius="xl" p="xl" withBorder>
            <Group align="flex-start" gap="md">
                <ThemeIcon radius="xl" variant="light" size="lg">
                    <IconQuote size={18} />
                </ThemeIcon>
                <Stack gap="sm">
                    <Title order={3} style={{ lineHeight: 1.2 }}>
                        Our mission is simple — help you feel better in your body, every single day.
                    </Title>
                    <Text c="dimmed">Heavenly Hands Wellness</Text>
                </Stack>
            </Group>
        </Paper>
    );
}

function WhyChooseCard() {
    const items = [
        { title: "Highly Trained Therapists", desc: "Carefully selected practitioners focused on outcomes." },
        { title: "Flexible Scheduling", desc: "Appointments that fit real life — online booking included." },
        { title: "Personalized Plans", desc: "Sessions tailored to your pain points and goals." },
        { title: "Trusted in KWC", desc: "Serving the community with consistent, quality care." },
    ];

    return (
        <Paper radius="xl" p="xl" withBorder>
            <Title order={3} mb="md">
                Why Choose Heavenly Hands?
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                {items.map((it) => (
                    <Stack key={it.title} gap={6}>
                        <Text fw={700}>{it.title}</Text>
                        <Text c="dimmed" size="sm">
                            {it.desc}
                        </Text>
                    </Stack>
                ))}
            </SimpleGrid>

            <Group mt="xl">
                <Button radius="xl">Start Your Wellness Journey</Button>
                <Button radius="xl" variant="light">
                    Contact
                </Button>
            </Group>
        </Paper>
    );
}

/* ---------------------------- Testimonials --------------------------- */

function TestimonialsSection() {
    const testimonials = [
        {
            name: "A. Client",
            role: "Massage Therapy",
            quote: "The most relaxing and effective session I’ve had. I felt better immediately.",
        },
        {
            name: "B. Client",
            role: "Prenatal Massage",
            quote: "Super professional, calming environment. Exactly what I needed during pregnancy.",
        },
        {
            name: "C. Client",
            role: "Acupuncture",
            quote: "Thoughtful care and clear explanations. I noticed improvements within weeks.",
        },
    ];

    return (
        <Box style={{ background: "var(--mantine-color-gray-0)" }}>
            <Container size="lg" py={72}>
                <Stack gap="lg">
                    <Stack gap={4}>
                        <Title order={2} ta="center">
                            What Our Clients Say
                        </Title>
                        <Text c="dimmed" ta="center">
                            A few words from the people we’ve helped.
                        </Text>
                    </Stack>

                    <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
                        {testimonials.map((t) => (
                            <Card key={t.name} radius="lg" shadow="sm" padding="lg">
                                <Stack gap="sm">
                                    <Text style={{ fontStyle: "italic" }}>"{t.quote}"</Text>
                                    <Divider />
                                    <Group>
                                        <Avatar radius="xl" />
                                        <Stack gap={0}>
                                            <Text fw={700}>{t.name}</Text>
                                            <Text size="sm" c="dimmed">
                                                {t.role}
                                            </Text>
                                        </Stack>
                                    </Group>
                                </Stack>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}

/* ----------------------------- Final CTA ---------------------------- */

function FinalCTA() {
    return (
        <Container size="lg" py={72}>
            <Paper radius="xl" p="xl" shadow="sm" withBorder>
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" style={{ alignItems: "center" }}>
                    <Stack gap="sm">
                        <Title order={2}>Ready to Feel Better?</Title>
                        <Text c="dimmed">
                            Book your appointment today and take the first step toward better wellness.
                        </Text>
                        <Group>
                            <Button radius="xl" size="md">
                                Book Appointment
                            </Button>
                            <Button radius="xl" variant="light" size="md">
                                View Services
                            </Button>
                        </Group>
                    </Stack>

                    <Paper radius="lg" p="lg" withBorder>
                        <Stack gap={6}>
                            <Text fw={700}>Clinic Hours</Text>
                            <Text size="sm" c="dimmed">
                                Mon–Fri: 9:00 AM – 6:00 PM
                            </Text>
                            <Text size="sm" c="dimmed">
                                Sat: 10:00 AM – 5:00 PM
                            </Text>
                            <Text size="sm" c="dimmed">
                                Sun: Closed
                            </Text>
                        </Stack>
                    </Paper>
                </SimpleGrid>
            </Paper>
        </Container>
    );
}

/* -------------------------------- Footer -------------------------------- */

function FooterSection() {
    return (
        <Box id="contact" style={{ borderTop: "1px solid var(--mantine-color-gray-2)" }}>
            <Container size="lg" py={36}>
                <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
                    <Stack gap="xs">
                        <Group gap="sm">
                            <ThemeIcon radius="xl" variant="light">
                                <IconSparkles size={18} />
                            </ThemeIcon>
                            <Text fw={700}>Heavenly Hands</Text>
                        </Group>
                        <Text size="sm" c="dimmed">
                            Massage therapy & wellness care in Cambridge, Kitchener & Waterloo.
                        </Text>
                    </Stack>

                    <Stack gap={6}>
                        <Text fw={700}>Contact</Text>
                        <Text size="sm" c="dimmed">
                            122 Example St, Cambridge, ON
                        </Text>
                        <Text size="sm" c="dimmed">
                            (519) 555-1234
                        </Text>
                        <Text size="sm" c="dimmed">
                            hello@heavenlyhands.ca
                        </Text>
                    </Stack>

                    <Stack gap={6}>
                        <Text fw={700}>Quick Links</Text>
                        <Anchor href="#services" underline="hover">
                            Services
                        </Anchor>
                        <Anchor href="#about" underline="hover">
                            About
                        </Anchor>
                        <Anchor href="#" underline="hover">
                            Privacy Policy
                        </Anchor>
                    </Stack>
                </SimpleGrid>

                <Divider my="lg" />

                <Text size="sm" c="dimmed">
                    © {new Date().getFullYear()} Heavenly Hands. All rights reserved.
                </Text>
            </Container>
        </Box>
    );
}
