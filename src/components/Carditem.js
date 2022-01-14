import React from 'react'
import { Link } from 'react-router-dom'

function Carditem() {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
            <img src='' alt='Travel Image'/>
          </figure>
        </Link>
      </li>
    </>
  )
}

export default Carditem
