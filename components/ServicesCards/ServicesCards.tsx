'use client';

import { Badge, Box, Button, Card, Container, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { services } from './services';
import classes from './ServicesCards.module.css';

const ServiceCard = ({
    image,
    title,
    isPopular,
    description,
}: {
    image: string;
    title: string;
    isPopular: boolean;
    description: string;
}) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
            <Card.Section>
                <Image
                    src={image}
                    height={160}
                    alt="service image"
                />
            </Card.Section>

            <Group justify="space-between">
                <Text fw={500}>{title}</Text>
                {isPopular && <Badge color="pink">Popular</Badge>}
            </Group>

            <Text size="sm" c="dimmed">
                {description}
            </Text>

            <Button variant='outline' fullWidth radius="md" className={classes.cta}>
                Learn More
            </Button>
        </Card>
    );
};
export function ServicesCards() {
    return (
        <Box component="section" id="services" py="xl">
            <Container size="lg">
                <Stack>
                    <Title order={2} size="xl" my="md" className={classes.title}>
                        What We Do Best
                    </Title>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" verticalSpacing="xl" className={classes.grid}>
                        {services.map((service) => (
                            <ServiceCard
                                key={service.title}
                                image={service.image}
                                title={service.title}
                                isPopular={service.isPopular}
                                description={service.description}
                            />
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    )
}
