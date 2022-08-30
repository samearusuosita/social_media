import React, { useState } from 'react';
import './Post.scss';
import Comment from '../../../img/comment.png';
import Share from '../../../img/share.png';
import Heart from '../../../img/like.png';
import NotLike from '../../../img/notlike.png';
import { useSelector } from 'react-redux';
import { likePost } from '../../../api/postRequest';
// import {likedPost} from '../../../../server/Controllers/PostController';





const Post = ({data}) => {
  // fetching post images

  const {user} = useSelector((state) => state.authReducer.authData)

  // like and unlike post
  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike = () =>{
    setLiked((prev) => !prev)
    likePost(data._id, user._id)
    liked? setLikes((prev) => prev -1) : setLikes((prev) => prev +1)
  }


  return (
    <div className="Post" key={data.index}>
        <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image: ""} alt="post_images" className='postImage'/>

        <div className="postReact">
        <img src={liked ? Heart : NotLike} alt="" className='reactImage' style={{cursor: "pointer"}} onClick={handleLike}/>
        <img src={Comment} alt="" style={{cursor: "pointer"}}/>
        <img src={Share} alt="" style={{cursor: "pointer"}}/>
        </div>

        <span style={{color: 'var(--gray)', fontSize: '15px'}}>{likes} Likes</span>
        <div className="details">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post
