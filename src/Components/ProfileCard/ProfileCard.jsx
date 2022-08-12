import React from 'react'

import './ProfileCard.scss';

import cover from '../../img/cover.jpg';
import profileImg from '../../img/profileImg.jpg'

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
      <div className="ProfileImages">
        <img src={cover} alt="" />
        <img src={profileImg} alt="" />
      </div>
      <div className="ProfileName">
        <span>Samuel Osita</span>
        <span>UI/UX Designer</span> 
      </div>
      <div className="followStatus">
        <hr />
        <div className="follows">
            <div className="follow">
            <span>5,600</span>
            <span>Following</span>
        </div>
        <div className="vl"></div>
        <div className="follow">
            <span>12</span>
            <span>Followers</span>
        </div>
        </div>
        <hr />
      </div>
      <span className='profileLink'>My Profile</span>
    </div>
  )
}

export default ProfileCard
