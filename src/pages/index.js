import React from "react"
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import '../styles/style.scss';

import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import NuestroProposito from '../components/home/NuestroProposito';
import NuestroImpacto from '../components/home/NuestroImpacto';
import Testimonios from '../components/home/Testimonios';
import NicaraguaLoVale from "../components/home/NicaraguaLoVale";


const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <NuestroProposito />
      <hr />
      <NuestroImpacto />
      <hr />
      <NicaraguaLoVale />
      <hr />
      <Testimonios />
    </Layout>
  )
}

export default HomePage;
