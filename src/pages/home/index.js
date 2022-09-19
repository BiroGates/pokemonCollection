import React, { useEffect, useState } from 'react'
import './index.scss';

// Components
import Card from '../../components/card';


export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [cardReveal, setCardReveal] = useState();
  const getTimeNow = () => setCurrentTime(new Date());

  useEffect(() => {
    const interval = setInterval(()=>{
      getTimeNow();
    }, 1000);
    return () => clearInterval(interval);
  },[]);
  return (
    <main className='page-home'>
      {cardReveal &&
        <Card
        setCardReveal={setCardReveal}
        />
      }
      <div className='title'>
        <div className='info'>
          <div className='img'><img src="/assets/images/charizard.png" alt="" /></div>
          <div className='text'>BIRO'S POKEMON TCG COLLECTION</div>
        </div>
      </div>
      <div className='nav-bar'>
        <span>Profile</span>
        <span>My Collection</span>
        <span>About</span>
      </div>
      <div className='expansion'>
        <img src="/assets/images/logo.png" alt="" />
        <span>Edition</span>
      </div>
      <div className='pokeball'>
        {cardReveal &&
          <img src="/assets/images/pokeballclosed.png" alt="" />
        }
        {!cardReveal && 
          <img onClick={()=> setCardReveal(true)} src="/assets/images/pokeball.png" alt="" />
        }
      </div>
      <div className='clock'>{ currentTime.toLocaleTimeString() }</div>
    </main>
  )
}
