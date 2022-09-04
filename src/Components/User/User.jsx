import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/userAction';

const User = ({person}) => {

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.authReducer.authData);
  const [following, setFollowing] = useState(person.followers.includes(user._id))
  
  // making the follow an unfollow action
  const handleFollow = ()=>{
    following ?
    dispatch(unfollowUser(person._id, user)):
    dispatch(followUser(person._id, user))

    setFollowing((prev) => !prev)
  }

  return (
   <div className="followersdataList" key={person.id}>
            <div>
              <img src={person.profilePicture? serverPublic + person.profilePicture: serverPublic + "defaultProfile.jpg"} alt="Followers_image" className="followerimg" />
              <div className='name'>
                <span>{person.firstname}</span>
                <span>@{person.username}</span>
              </div>
            </div>

            {/* changing the following btn */}
            <button className={following? 'button fc-button unfollowBtn' : 'button fc-button'} onClick={handleFollow}>{following? "Unfollow" : "Follow"}</button>
    </div>
  )
}

export default User
