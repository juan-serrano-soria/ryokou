import React from 'react'
import Carditem from './Carditem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these popular destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            <Carditem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
