import React from 'react'
import Fish from '../images/Rectangle 3.png'

import '../css/Card.css'

const Card = ({id,title}) => {
  return (
    <div className='card'>
        <img src={Fish} alt='category'/>
        <h2>{title}</h2>
    </div>
  )
}

export default Card