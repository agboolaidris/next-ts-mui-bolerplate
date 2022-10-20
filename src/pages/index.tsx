import * as React from 'react';
import type { NextPage } from 'next';
import Layout from '../layout';
import { Text } from '../ui/atoms/text';
import { Button } from '../ui/atoms/button';

const Home: NextPage = () => {
  return (
    <Layout>
      <Text as="h1">Hello world</Text>
      <Text as="h2">Hello world</Text>
      <Text as="h3">Hello world</Text>
      <Text as="h4">Hello world</Text>
      <Text as="h5">Hello world</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic nobis,
        maiores harum eius reprehenderit commodi tempora officiis? Nemo
        blanditiis voluptate inventore soluta corporis possimus commodi
        asperiores animi debitis iusto.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic nobis,
        maiores harum eius reprehenderit commodi tempora officiis? Nemo
        blanditiis voluptate inventore soluta corporis possimus commodi
        asperiores animi debitis iusto.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic nobis,
        maiores harum eius reprehenderit commodi tempora officiis? Nemo
        blanditiis voluptate inventore soluta corporis possimus commodi
        asperiores animi debitis iusto.
      </Text>
      <Text as="a">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic nobis,
        maiores harum eius reprehenderit commodi tempora officiis? Nemo
        blanditiis voluptate inventore soluta corporis possimus commodi
        asperiores animi debitis iusto.{' '}
      </Text>
      <Text as="figcaption"> Lorem ipsum dolor sit amet</Text>
    </Layout>
  );
};

export default Home;
