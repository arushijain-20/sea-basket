import React from 'react'
import '../css/ReadCard.css'

const ReadCard = ({title,content}) => {
  return (
    <div className='read_card'>
        <h2>
            {title}
        </h2>
        <p>
        {content}
        </p>
        <div className='link'>
        <a href='/'>Read more &gt; </a></div>
    </div>
  )
}

export default ReadCard