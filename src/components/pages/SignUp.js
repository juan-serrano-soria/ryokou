import React from 'react'
import '../../App.css'

// scroll restoration
function scrollToTop() {
  window.scrollTo(0,0);
}

function SignUp() {
  scrollToTop();
  return (
    <h1 className='sign-up'>
      SignUp
    </h1>
  )
}

export default SignUp
