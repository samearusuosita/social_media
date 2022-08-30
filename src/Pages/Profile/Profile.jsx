import React from 'react';
import Posts from '../../Components/PostSide/Posts/Posts';
import PostShare from '../../Components/PostSide/PostShare/PostShare';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft';
import RightSide from '../../Components/RightSide/RightSide';
import './Profile.scss';


const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft/>
      <div className="profileCenter">
        {/* adding location to profile card */}
        <ProfileCard location = "profilePage"/>
        <PostShare/>
        <Posts/>
      </div>
      <RightSide/>
    </div>
  )
}

export default Profile
