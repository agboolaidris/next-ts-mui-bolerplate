import { Typography, Box } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { IBlog } from '../../interface/blog';
import Layout from '../../layout';
import BlogCard from '../../ui/molecules/blogCard';
import LearnMore from '../../ui/molecules/learnMore';
import SEO from '../../ui/molecules/seo';
interface PROPS {
  blogs: IBlog[];
}

function Blogs({ blogs }: PROPS) {
  return (
    <Layout>
      <SEO title="Blog✍️ | Agboola Idris" />
      <Box
        sx={{
          width: '1000px',
          maxWidth: '100%',
          marginX: 'auto',
        }}
      >
        <Box sx={{ width: '700px', maxWidth: '100%' }}>
          <Typography variant="h3">Blog✍️ </Typography>
          <Typography>
            I like sharing content related to the stuff that I have learned over
            a long time in software development so it can offer assistance to
            other individuals in the Dev Community
          </Typography>
          <Box sx={{ marginTop: 8 }}>
            {blogs.map((blog, index) => {
              return (
                <Box key={index} sx={{ marginTop: 4 }}>
                  <BlogCard {...blog} />
                </Box>
              );
            })}
          </Box>
          <LearnMore text="Reach out to me" href="/contact" />
        </Box>
      </Box>
    </Layout>
  );
}

export default Blogs;

export async function getStaticProps() {
  try {
    const params = { username: 'agboolaidris', per_page: 1000 };
    const headers = { 'api-key': process.env.NEXT_PUBLIC_DEV_APIKEY };
    const { data } = await axios.get(`https://dev.to/api/articles/me`, {
      params,
      headers,
    });
    return { props: { blogs: data } };
  } catch (error) {
    return { props: { blogs: [] } };
  }
}
