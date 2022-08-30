import React from 'react'

import './ProfileCard.scss';

// import cover from '../../img/cover.jpg';
// import profileImg from '../../img/profileImg.jpg';
import {useSelector} from 'react-redux';

import {Link} from 'react-router-dom';



const ProfileCard = (location) => {
  
  // extract user info from redux store
  const {user} = useSelector((state) => state.authReducer.authData)
const posts = useSelector ((state) => state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  
  // to costomize the card according to individual user profile
  // const ProfilePage = false;



  return (
    <div className='ProfileCard'>
      <div className="ProfileImages">
        <img src={user.coverPicture? serverPublic + user.coverPicture: serverPublic + "defaultCover.jpg"} alt="" />
        <img src={user.defaultProfile? serverPublic + user.defaultProfile: serverPublic + "defaultProfile.jpg"} alt="" />
      </div>
      <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt? user.worksAt: "Write about yourself"}</span> 
      </div>
      <div className="followStatus">
        <hr />
        <div className="follows">
            <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
        </div>
        <div className="vl"></div>
        <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
        </div>
        {location === 'profilePage' && (
          <>
            <div className="vl">

            </div>
            <div className="follow">
              <span>{posts.filter((post) => post.uderId === user._id.length)}</span>
              <span>Posts</span> 
            </div>
          </>
        )}
        </div>
        <hr />
      </div>
      {/* to disable my prfoile link if the page is true */}
      {location === 'profilePage'? "": 
      <span className='profileLink'><Link style={{textDecoration: "none", color: "inherit"}} to = {`/profile/${user._id}`}>My Profile</Link></span>}
    </div>
  )
}

export default ProfileCard
