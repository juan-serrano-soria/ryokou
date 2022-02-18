import React from 'react'
import '../../App.css'

// scroll restoration
function scrollToTop() {
  window.scrollTo(0,0);
}

function Services() {
  scrollToTop();
  return (
    <h1 className='services'>
      Services
    </h1>
  )
}

export default Services
