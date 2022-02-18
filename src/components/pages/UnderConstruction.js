import React from 'react'
import '../../App.css'

// scroll restoration
function scrollToTop() {
  window.scrollTo(0,0);
}

function UnderConstruction() {
  scrollToTop();
  return (
    <>
      <h1 className='under-construction'>
        <div>Under Construction...<br/><i class="fas fa-tools" /></div>
      </h1>
    </>
  )
}

export default UnderConstruction

