import React from 'react';
import './FollowersData.scss';

import { Followers } from '../../Data/FollowersData';


const FollowersData = () => {
  return (
    <div className='Followers'>
      <h3>Who is following you</h3>
      {Followers.map((Followers, id) => {
        return(
          <div className="followersdataList" key={Followers.id}>
            <div>
              <img src={Followers.img} alt="Followers_image" className="followerimg" />
              <div className='name'>
                <span>{Followers.name}</span>
                <span>@{Followers.username}</span>
              </div>
            </div>
            <button className='button fc-button'>Follow</button>
          </div>
        )})}
    </div>
  )
}

export default FollowersData
