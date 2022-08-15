import React, { useState } from 'react';
import {UilPen} from '@iconscout/react-unicons'; 
import './InfoCard.scss';
import ProfileModal from '../ProfileModal/ProfileModal';



const InfoCard = () => {

    const [modelOpened, setModelOpened] = useState(false);


  return (
    <div className="InfoCard">
        <div className='infoHead'>
            <h4>Your info</h4>
            <div>
                <UilPen width='2rem' height='1.2rem' onClick={() => setModelOpened(true)}/>

            {/* to open the form */}
            <ProfileModal modelOpened={modelOpened} setModelOpened={setModelOpened}/>
            </div>
        </div>
        <div className="info">
            <span><b>Status</b></span>
            <span> In Relationship</span>
        </div>
        <div className="info">
            <span><b>Lives in</b></span>
            <span> Lagos</span>
        </div>
        <div className="info">
            <span><b>Works at</b></span>
            <span> Lagos Island</span>
        </div>
        <button className='button logOut-btn'>Log Out</button>
    </div>
  )
}

export default InfoCard
