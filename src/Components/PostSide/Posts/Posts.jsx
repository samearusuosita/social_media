import React from 'react';
import "./Posts.scss";
// import { PostData } from '../../../Data/PostData';
import Post from '../Post/Post';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getTimelinePosts } from '../../../actions/postAction';
import {useParams} from 'react-router-dom';

const Posts = () => {


  // displaying post of all followers including current user

  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.authReducer.authData)
  let {posts, loading} = useSelector((state) => state.postReducer)
  const params = useParams()

  // fetching post from redux store 
  // removed [] on line 24
  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  },)

  // making user see their posts and thier followers post
  if(!posts) return "No Post";
  if(params.id) posts = posts.filter((post) => post.userId === params.id)


  return (
    <div className="Post">
      {/* checking if there is post before loading post */}
      {loading? "Fetching Posts..." : posts.map((post, id) =>{
        return(<Post data={post} id={id} key={post.id}/>)
      })}
      
    </div>
  )
}

export default Posts
