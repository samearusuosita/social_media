import React from 'react';
import "./Posts.scss";
// import { PostData } from '../../../Data/PostData';
import Post from '../Post/Post';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getTimelinePosts } from '../../../actions/postAction';

const Posts = () => {


  // displaying post of all followers including current user

  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.authReducer.authData)
  const {posts, loading} = useSelector((state) => state.postReducer)
 

  // fetching post from redux store 
  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [])

  return (
    <div className="Post">
      {/* checking if there is post before loading post */}
      {loading? "Fetching Posts..." : posts.map((post, id) =>{
        return(<Post data={post} id={id}/>)
      })}
      
    </div>
  )
}

export default Posts
