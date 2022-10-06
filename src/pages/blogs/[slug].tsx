import React from 'react';
import Layout from '../../layout';

function Blog() {
  return (
    <Layout>
      <div>hhhh</div>
    </Layout>
  );
}

export default Blog;

export async function getStaticProps() {
  return {
    props: { data: [] },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'customize-cursor-in-react-app-1j1m' } },
      {
        params: {
          slug: 'best-way-to-manage-state-in-react-project-in-2022-45op',
        },
      },
      {
        params: {
          slug: 'how-to-setup-nextjs-app-mui5-with-typescript-2me7',
        },
      },
    ],
    fallback: false,
  };
}
