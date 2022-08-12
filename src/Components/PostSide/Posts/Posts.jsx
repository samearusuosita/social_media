import React from 'react';
import "./Posts.scss";
import { PostData } from '../../../Data/PostData';
import Post from '../Post/Post';

const Posts = () => {
  return (
    <div className="Post">
      {PostData.map((post, id) =>{
        return(<Post data={post} id={id}/>)
      })}
    </div>
  )
}

export default Posts
