import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import emailjs from '@emailjs/browser';
import { isEmail } from '../helpers/isEmail';
import Layout from '../layout';
import { Button } from '../ui/atoms/button';
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
  };

  return (
    <Layout>
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
    </Layout>
  );
}

export default About;
