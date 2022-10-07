import { Typography, Grid } from '@mui/material';
import React from 'react';
import Layout from '../layout';
import ImgBox from '../ui/molecules/imgBox';
import LearnMore from '../ui/molecules/learnMore';
import aboutItems from '../constants/about';
import VerticalLinearStepper from '../ui/molecules/stepper';
import { LinkButton } from '../ui/atoms/button';
import SEO from '../ui/molecules/seo';

function About() {
  return (
    <Layout>
      <SEO title="About | Agboola Idris" />
      <Typography variant="h3">About Me.</Typography>
      <Grid
        container
        direction={{ xs: 'column-reverse', md: 'row' }}
        sx={{ marginTop: { xs: 4, md: 6 } }}
      >
        <Grid item xs={12} md={6}>
          <Typography>
            Hi! my name is Idris Agboola and I love using my skill set to
            simplify work for enterprises.I also like sharing content related to
            the stuff that I have learned over a long time in software
            development so it can offer assistance to other individuals in the
            Dev Community.
          </Typography>
          <Typography sx={{ marginTop: 2 }}>
            fast-forward to today, I have the opportunity to work in
            <a href="http://www.ritemate.com/" rel="noreferrer" target="_blank">
              <LinkButton> Ritemate technology</LinkButton>,
            </a>
            <a href="https://1worq.com/" rel="noreferrer" target="_blank">
              <LinkButton> 1worq</LinkButton>,
            </a>{' '}
            and{' '}
            <a href="####" rel="noreferrer">
              <LinkButton> Invoke-Creation</LinkButton>,
            </a>{' '}
            as a software developer. These days, I focus on building accessible,
            inclusive products and digital experiences for Invoke-creation.
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
          <ImgBox src="/idris.png" />
        </Grid>
      </Grid>
      {aboutItems.map((item, index) => (
        <VerticalLinearStepper
          title={item.title}
          items={item.item}
          key={index}
        />
      ))}

      <LearnMore text="Reach out to me" href="/contact" />
    </Layout>
  );
}

export default About;
