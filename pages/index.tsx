import Hero from '@/components/home/Hero';
import Main from '@/components/home/Main';
import Layout from '@/components/layouts/Layout';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <Main />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
