import React from 'react';
import './Home.scss'; 
import ProfileSide from '../../Components/profileside/ProfileSide';
import PostSide from '../../Components/PostSide/PostSide';

const Home = () => {
  return (
    <div className='home'>
      <ProfileSide/>
      <PostSide/>
      <div className="rightside">sidebar</div>
    </div>
  )
}

export default Home
