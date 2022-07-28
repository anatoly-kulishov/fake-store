import * as React from 'react';
import { NextPage } from 'next';

import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import MainHero from '../components/MainHero/MainHero';
import Footer from '../components/Footer/Footer';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Fake Store">
      <Header />
      <MainHero />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
