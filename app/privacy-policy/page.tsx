import { Box, Container, Stack, Text, Title } from '@mantine/core';

const sections = [
  {
    title: 'Overview',
    body: [
      'Thank you for visiting our website. This privacy policy explains how we use personal information collected from our website. You can view our website and read most of the information contained herein without giving us any personal information.',
      'We do not collect personal information from users without their permission. When you use our website, you may choose to provide us with personal information for the specific purpose of inquiring into goods and services provided by Heavenly Hands.',
      'Please read this privacy policy before using the site or submitting any personal information. By using our website, you are accepting the practices described in this policy.',
    ],
  },
  {
    title: 'Information You Provide',
    body: [
      'There are pages on our website where we request information from you in order to fulfill a request for further information. Each of these pages is clearly designed as a form with fields clearly labeled.',
      'On these forms, we clearly indicate the information we need to fulfill the request. We use the information we collect to fulfill your request. It is our policy not to resell the information you give us.',
      'We may, from time to time, use this information to notify you of future product availability, company events, and other related information either via email, mail, or telephone. If you do not wish to receive future communications from us, please let us know.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'There are some pages on this website that use a technology called cookies. Cookies are strings of text written by programs on this website to a disk file on your computer.',
      'They contain information to help us better serve you next time you return to the website. Most browsers can be configured to either notify you when websites create cookies or to disallow the creation of cookies.',
      'Refer to the documentation that came with your browser or the online help files supplied with your browser for instructions that will allow you to better control how cookies are written to your hard disk.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Box component="section">
      <Container size="lg" py={80}>
        <Stack gap="xl">
          <Title order={1}>Privacy Policy</Title>
          {sections.map((section) => (
            <Stack key={section.title} gap="sm">
              <Title order={3}>{section.title}</Title>
              {section.body.map((paragraph) => (
                <Text key={paragraph} c="dimmed">
                  {paragraph}
                </Text>
              ))}
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
