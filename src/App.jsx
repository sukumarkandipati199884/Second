import React from 'react';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Features />
      <Workflow />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;