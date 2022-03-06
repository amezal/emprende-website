import React from "react"
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import '../styles/style.scss';

import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import NuestroImpacto from '../components/home/NuestroImpacto';


const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <NuestroImpacto />
    </Layout>
  )
}

export default HomePage;
