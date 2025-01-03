import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';

const App: React.FC = () => {
  return (
    <div>
      <section id="home" className="h-screen bg-gray-100">
        <Navbar />
        <Hero />
        <About />
      </section>
    </div>
  );
};

export default App;