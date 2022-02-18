import React from 'react'
import '../../App.css'

// scroll restoration
function scrollToTop() {
  window.scrollTo(0,0);
}

function Products() {
  scrollToTop();
  return (
    <h1 className='products'>
      Products
    </h1>
  )
}

export default Products
