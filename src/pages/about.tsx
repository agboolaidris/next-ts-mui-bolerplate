import { Container, Typography, Grid } from '@mui/material';
import React from 'react';
import Layout from '../layout';
import ImgBox from '../ui/molecules/imgBox';
import LearnMore from '../ui/molecules/learnMore';
import Link from '../ui/molecules/Link';
import SocailMedia from '../ui/molecules/socailMedia';
import VerticalLinearStepper from '../ui/molecules/stepper';
function About() {
  const items = [
    {
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque dolorum reprehenderit, perspiciatis eligendi
          repudiandae harum atque consectetur. Atque numquam nostrum fugit
          minima quisquam accusantium veniam esse. Incidunt a doloribus
          praesentium.`,
      substitle: 'Engineering',
      link: <Link href="/">view github</Link>,
    },
    {
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque dolorum reprehenderit, perspiciatis eligendi
            repudiandae harum atque consectetur. Atque numquam nostrum fugit
            minima quisquam accusantium veniam esse. Incidunt a doloribus
            praesentium.`,
      substitle: 'Engineering',
    },
    {
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque dolorum reprehenderit, perspiciatis eligendi
                repudiandae harum atque consectetur. Atque numquam nostrum fugit
                minima quisquam accusantium veniam esse. Incidunt a doloribus
                praesentium.`,
      substitle: 'Engineering',
      link: <Link href="/">view github</Link>,
    },
  ];
  return (
    <Layout>
      <Container sx={{ marginTop: { xs: 4, md: 10 } }}>
        <Typography variant="h3">About Me.</Typography>
        <Grid
          container
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{ marginTop: { xs: 4, md: 6 } }}
        >
          <Grid item xs={12} md={6}>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque dolorum reprehenderit, perspiciatis eligendi
              repudiandae harum atque consectetur. Atque numquam nostrum fugit
              minima quisquam accusantium veniam esse. Incidunt a doloribus
              praesentium.
            </Typography>
            <Typography sx={{ marginTop: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque dolorum reprehenderit, perspiciatis eligendi
              repudiandae harum atque consectetur. Atque numquam nostrum fugit
              minima quisquam accusantium veniam esse. Incidunt a doloribus
              praesentium.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              marginBottom: { xs: 5, md: 0 },
              justifyContent: { xs: 'flex-start', md: 'center' },
            }}
          >
            <ImgBox />
          </Grid>
        </Grid>
        <VerticalLinearStepper title="Carrer" items={items} />
        <VerticalLinearStepper title="Hobby" items={items} />
        <LearnMore text="Learn More About Me" />
        <SocailMedia sx={{ marginY: 4 }} />
      </Container>
    </Layout>
  );
}

export default About;
