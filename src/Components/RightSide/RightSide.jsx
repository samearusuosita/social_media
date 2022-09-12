import React, {useState} from 'react';
import './RightSide.scss';

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import {UilSetting} from "@iconscout/react-unicons";
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';
import { Link } from 'react-router-dom';




const RightSide = () => {

  const [modelOpened, setModelOpened] = useState(false);


  return (
    <div className='RightSide'>
        <div className="navicons">
            <Link to = '../home' ><img src={Home} alt="Home_page" /></Link>
            <UilSetting/>
            <img src={Noti} alt="Notification" />
            
            <Link to = '../chat'>
              <img src={Comment} alt="Comment" />
            </Link>
        </div>

       <TrendCard/>
     <button className='button btn-trend' onClick={() => setModelOpened(true)}>
      {/* to open the form */}
      Share</button>
      <ShareModal modelOpened={modelOpened} setModelOpened={setModelOpened}/>
    </div>
  )
}

export default RightSide
