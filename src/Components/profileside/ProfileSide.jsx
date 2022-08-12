import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch';
import './Profileside.scss';
import ProfileCard from '../ProfileCard/ProfileCard';
import Followers from '../Followers/FollowersData';



const ProfileSide = () => {
  return (
    <div className='profileSide'>
      <LogoSearch/>
      <ProfileCard/>
      <Followers/>
    </div>
  )
}

export default ProfileSide;
