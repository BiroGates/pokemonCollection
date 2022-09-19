import React, { useEffect, useState } from 'react'
import './index.scss';

// Api
import getCard from '../../api/base.js';

export default function Card({setCardReveal}) {
    const [image, setImage] = useState('');
    const [randomNumber, setRandomNumber] = useState(1);
    const generateNumber = () => {
        
    }

    async function getCardImg() {
        const img = await getCard();
        setImage(img);
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
