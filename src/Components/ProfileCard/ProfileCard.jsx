import React from 'react'

import './ProfileCard.scss';

import cover from '../../img/cover.jpg';
import profileImg from '../../img/profileImg.jpg'

const ProfileCard = () => {
  // to costomize the card according to individual user profile
  const ProfilePage = true;

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
        {ProfilePage && (
          <>
            <div className="vl">

            </div>
            <div className="follow">
              <span>3</span>
              <span>Posts</span> 
            </div>
          </>
        )}
        </div>
        <hr />
      </div>
      {/* to disable my prfoile link if the page is true */}
      {ProfilePage? '': 
      <span className='profileLink'>My Profile</span>}
    </div>
  )
}

export default ProfileCard
