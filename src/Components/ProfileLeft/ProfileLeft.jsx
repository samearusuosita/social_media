import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import Followers from '../Followers/FollowersData';

// import './ProfileLeft.scss';

const ProfileLeft = () => {
  return (
    <div className='profileSide'>
      <LogoSearch/>
      <InfoCard/>
      <Followers/>
    </div>
  )
}

export default ProfileLeft
