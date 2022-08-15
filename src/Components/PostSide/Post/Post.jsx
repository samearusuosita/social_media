import React from 'react';
import './Post.scss';
import Comment from '../../../img/comment.png';
import Share from '../../../img/share.png';
// import like from '../../../img/like.png';
import NotLike from '../../../img/notlike.png';
import Home from '../../../img/home.png';




const Post = ({data}) => {
  return (
    <div className="Post" key={data.index}>
        <img src={data.img} alt="" className='postImage'/>

        <div className="postReact">
        <img src={data.liked ? Home: NotLike} alt="" className='reactImage'/>
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
        </div>

        <span style={{color: 'var(--gray)', fontSize: '15px'}}>{data.likes} Likes</span>
        <div className="details">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post
