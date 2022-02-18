import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection'

// scroll restoration
function scrollToTop() {
  window.scrollTo(0,0);
}

function Home() {
  scrollToTop();
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  )
}

export default Home;
