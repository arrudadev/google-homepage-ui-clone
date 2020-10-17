import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Main from '../components/Main';

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
