import Image from 'next/image';
import { Box, Container, Stack, Text, Title } from '@mantine/core';
import classes from './ServiceDetail.module.css';

type ServiceDetailProps = {
  title: string;
  description: string[];
  image: { src: string; alt: string };
};

export function ServiceDetail({ title, description, image }: ServiceDetailProps) {
  return (
    <Box component="section" className={classes.section}>
      <Container size="lg" className={classes.inner}>
        <Stack gap="sm" className={classes.content}>
          <Title order={2}>{title}</Title>
          {description.map((text) => (
            <Text key={text} c="dimmed">
              {text}
            </Text>
          ))}
        </Stack>
        <Image src={image.src} alt={image.alt} width={520} height={420} className={classes.image} />
      </Container>
    </Box>
  );
}
