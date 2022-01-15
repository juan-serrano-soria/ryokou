import React from 'react'
import Carditem from './Carditem'

import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore the Land of the Rising Sun</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Carditem 
              src='/images/tokyo.jpg'
              text="Tokyo: the world's most populous metropolis"
              label='#1 destination'
              path='/Services'
            />
            <Carditem 
              src='/images/tokyo.jpg'
              text="Tokyo: the world's most populous metropolis"
              label='#1 destination'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <Carditem 
              src='/images/tokyo.jpg'
              text="Tokyo: the world's most populous metropolis"
              label='#1 destination'
              path='/Services'
            />
            <Carditem 
              src='/images/tokyo.jpg'
              text="Tokyo: the world's most populous metropolis"
              label='#1 destination'
              path='/Services'
            />
            <Carditem 
              src='/images/tokyo.jpg'
              text="Tokyo: the world's most populous metropolis"
              label='#1 destination'
              path='/Services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
