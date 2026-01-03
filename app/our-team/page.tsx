'use client';

import Image from 'next/image';
import { Box, Container, Stack, Text, Title } from '@mantine/core';
import classes from './page.module.css';
import { teamMembers } from './teamMembers';

export default function OurTeamPage() {
  return (
    <Box component="section" className={classes.section}>
      <Container size="lg">
        <Stack gap="xl">
          <Title order={1}>Our Team</Title>
          {teamMembers.map((member, index) => (
            <Box key={member.name} className={classes.member}>
              <Image
                src={member.image}
                alt={member.name}
                width={260}
                height={260}
                className={classes.image}
              />
              <details className={classes.details} open={index === 0}>
                <summary className={classes.summary}>
                  <Title order={3} className={classes.name}>
                    {member.name}
                  </Title>
                  <Text c="dimmed">{member.description}</Text>
                  <span className={classes.readMore} aria-hidden="true" />
                </summary>
                {member.story.map((paragraph, i) => (
                  <Text key={`paragraph-${i}`} className={classes.story}>
                    {paragraph}
                  </Text>
                ))}
              </details>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
