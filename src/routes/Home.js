import React from 'react';
import NavBar from "../components/NavBar";
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';
import SkillsCard from '../components/SkillsCard';
import Work from '../components/Work';
import AboutContent from '../components/AboutContent';
import Form from '../components/Form';

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroImage />
      <AboutContent />
      <SkillsCard />
      <Work />
      <Form />
      <Footer />
    </div>
  )
}

export default Home