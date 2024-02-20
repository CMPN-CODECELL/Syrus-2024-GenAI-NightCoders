import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout.js';
import IntroTvacha from '../components/IntroTvacha.js';
import SliderHome from '../components/SliderHome.js';
import Journey from '../components/Journey.js';
import Threefoldway from '../components/Threefoldway.js';
import Donation from '../components/Donation.js';
import Footer from '../components/Footer.js'
import Youtube from '../components/Youtube.js';

const HomePage = () => {
  

  return (
    <>
      <Layout>
        <IntroTvacha/>
        <SliderHome/>
        <Journey/>
        <Threefoldway/>
        <Donation/>
        <Youtube/>
        <Footer/>
      </Layout>
    </>
  );
};

export default HomePage;
