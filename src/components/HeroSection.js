import React from 'react';
import { Button } from './Button';

import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Fish.mp4' autoPlay muted loop />
      <h1>Discover Japan</h1>
      <p>Your adventure awaits</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' link='services'>
          GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' link='services'>
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
