import { Box, Container, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../layout';
import { Button, LinkButton } from '../ui/atoms/button';
import LearnMore from '../ui/molecules/learnMore';
import Link from '../ui/molecules/Link';
import SocailMedia from '../ui/molecules/socailMedia';
import SocialShare from '../ui/molecules/socialShare';
import TextArea from '../ui/molecules/textArea';
import TextInput from '../ui/molecules/textInput';
import { BarLoader } from 'react-spinners';

function About() {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [loading, setloading] = useState(true);
  const theme = useTheme();
  const handleChange = () => {};
  return (
    <Layout>
      <Container sx={{ marginTop: { xs: 4, md: 10 } }}>
        <Typography variant="h3">Contact.</Typography>
        <Typography sx={{ marginY: 5 }}>
          Get in touch or shoot me an email directly on
          <Link href="mailto: agboolaisholaidreez@gmail.com">
            <LinkButton> agboolaisholaidreez@gmail.com</LinkButton>
          </Link>
        </Typography>
        <Box sx={{ width: '600px', maxWidth: '100%' }}>
          <TextInput
            placeholder="Name"
            value={state.name}
            name="name"
            onChange={handleChange}
          />
          <TextInput
            sx={{ marginTop: 2 }}
            placeholder="Email"
            value={state.email}
            name="email"
            onChange={handleChange}
          />
          <TextArea
            sx={{ marginTop: 2 }}
            placeholder="Message"
            value={state.message}
            name="message"
            onChange={handleChange}
          />
          <Button loading={loading} style={{ marginTop: '20px' }}>
            loading
          </Button>
        </Box>
        <LearnMore text="Back Home" />
        <SocailMedia />
      </Container>
    </Layout>
  );
}

export default About;
