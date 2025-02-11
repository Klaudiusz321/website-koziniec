import React from 'react';
import Hero from '../components/Hero';
import StoreInvitationSection from '../components/StoreInvitationSection';
import About from '../components/About';
import Meetings from '../components/Meetings';



const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <StoreInvitationSection />
      <About />
      <Meetings />
    </>
  );
};

export default Home;