import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import emailjs from '@emailjs/browser';
import { isEmail } from '../helpers/isEmail';
import Layout from '../layout';
import { Button, LinkButton } from '../ui/atoms/button';
import LearnMore from '../ui/molecules/learnMore';
import Link from '../ui/molecules/Link';
import TextArea from '../ui/molecules/textArea';
import TextInput from '../ui/molecules/textInput';

function About() {
  const initialState = { name: '', email: '', message: '' };
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [loading, setloading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e: any) => {
    setErrors(initialState);
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const errorss = { name: '', email: '', message: '' };
    if (state.name.trim() === '') errorss.name = 'name is required';
    if (state.message.trim() === '') errorss.message = 'message is required';
    if (state.email.trim() === '') errorss.email = 'email is required';

    if (
      Object.values(errorss).filter((elem) => elem.trim() !== '').length > 0
    ) {
      setErrors(errorss);
      return;
    }

    if (!isEmail(state.email)) {
      setErrors((prev) => ({ ...prev, email: 'invalid email address' }));
      return;
    }

    setloading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY || '',
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY || '',
        state,
        process.env.NEXT_PUBLIC_EMAIL_SECRET_KEY
      )
      .then(
        () => {
          setloading(false);
          enqueueSnackbar(' message sent successfully!', {
            variant: 'success',
          });
          setState(initialState);
        },
        (err) => {
          setloading(false);
          enqueueSnackbar(err.text, { variant: 'error' });
        }
      );
  };

  return (
    <Layout>
      <Typography variant="h3">Contact.</Typography>
      <Typography sx={{ marginY: 5 }}>
        If you have any questions, feel free to contact me directly at <br />
        <a
          href="mailto: agboolaisholaidreez@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <LinkButton> agboolaisholaidreez@gmail.com</LinkButton>
        </a>
      </Typography>
      <Box sx={{ width: '600px', maxWidth: '100%' }}>
        <TextInput
          placeholder="Name"
          value={state.name}
          error={errors.name}
          name="name"
          onChange={handleChange}
        />
        <TextInput
          sx={{ marginTop: 2 }}
          placeholder="Email"
          value={state.email}
          error={errors.email}
          name="email"
          onChange={handleChange}
        />
        <TextArea
          sx={{ marginTop: 2 }}
          placeholder="Message"
          value={state.message}
          error={errors.message}
          name="message"
          onChange={handleChange}
        />
        <Button
          loading={loading}
          disabled={loading}
          style={{ marginTop: '20px' }}
          onClick={handleSubmit}
        >
          {loading ? 'loading' : 'submit'}
        </Button>
      </Box>
      <LearnMore text="Back Home" />
    </Layout>
  );
}

export default About;
