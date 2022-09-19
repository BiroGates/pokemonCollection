import React from 'react'
import './index.scss';

export default function Card({setCardReveal}) {

    return (
    <div className='card-comp'>
        <div className='card-container'><img onClick={()=> setCardReveal(false)} src="/assets/images/placeholder.png" alt="" /></div>
    </div>
  )
}
