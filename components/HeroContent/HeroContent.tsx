import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroContent.module.css';
import { BOOKING_JANEAPP_URL } from '@/utils/constants';

export function HeroContent() {
    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container} size="lg">
                <Title className={classes.title}>Nurturing Wellness & Empowering Lives</Title>
                <Text className={classes.description} size="md" mt="xl">
                    Heavenly Hands Restore balance and harmony with Heavenly Hands' therapeutic massages. Our expert therapists can help alleviate pain, reduce stress, and improve overall well-being.
                </Text>

                <Button size="xl" radius="xl" className={classes.control} component='a' href={BOOKING_JANEAPP_URL}>
                    Book Appointment
                </Button>
            </Container>
        </div>
    );
}