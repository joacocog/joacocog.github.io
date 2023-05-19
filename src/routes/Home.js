import React from 'react';
import NavBar from "../components/NavBar";
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';
import AboutContent from '../components/AboutContent';
import Form from '../components/Form';

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroImage />
      <PricingCard />
      <Work />
      <AboutContent />
      <Form />
      <Footer />
    </div>
  )
}

export default Home