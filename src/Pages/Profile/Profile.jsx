import React from 'react';
import Posts from '../../Components/PostSide/Posts/Posts';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft';
import RightSide from '../../Components/RightSide/RightSide';
import './Profile.scss';


const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft/>
      <div className="profileCenter">
        <ProfileCard/>
        <Posts/>
      </div>
      <RightSide/>
    </div>
  )
}

export default Profile
