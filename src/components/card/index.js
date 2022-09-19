import React, { useEffect, useState } from 'react'
import './index.scss';

// Api
import getCard from '../../api/base.js';

export default function Card({setCardReveal}) {
    const [image, setImage] = useState('');

    async function getCardImg() {
        const n = Math.ceil(Math.random() * 130);
        const img = await getCard(n);
        setImage(img.images.large);
    } 
    
    useEffect(()=>{
        if(!image) getCardImg();
    },[]);

    return (
    <div className='card-comp'>
        <div className='card-container'><img onClick={()=> setCardReveal(false)} src={image} alt="" /></div>
    </div>
  )
}
