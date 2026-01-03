import { Box, Container, Text, Title } from '@mantine/core';
import classes from './OurMission.module.css';

export function OurMission() {
  return (
    <Box component="section" id="mission" py="xl">
      <Container size="lg">
        <Title order={2} className={classes.title} my="md">
          Our Mission
        </Title>
        <Text className={classes.description} size="md">
          Empowering individuals on their journey to optimal physical health and well-being.
          Through personalized and evidence-based care, we strive to facilitate recovery, alleviate
          pain, and enhance functional abilities, enabling our clients to lead active and fulfilling
          lives.
        </Text>
      </Container>
    </Box>
  );
}
