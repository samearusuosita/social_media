import React, {useState, useRef} from 'react';
import "./PostShare.scss";
// import profileImg from '../../../img/profileImg.jpg';
import {UilScenery} from "@iconscout/react-unicons";
import {UilPlayCircle} from '@iconscout/react-unicons';
import {UilLocationPoint} from '@iconscout/react-unicons';
import {UilSchedule} from '@iconscout/react-unicons';
import {UilTimes} from '@iconscout/react-unicons';
import {useDispatch, useSelector} from "react-redux";
import { UploadImage, uploadPost} from '../../../actions/uploadAction';


const PostShare = () => {

    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const dispatch = useDispatch();

    const desc = useRef();

    // fetching login user
    const {user} = useSelector((state) => state.authReducer.authData)

    const onImageChange =(event) =>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage(img)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        // tring to save the igmae in the local storage
        if(image){
            const data = new FormData();
            const filename = Date.now() + image.name;
            data.append("name", filename)
            data.append("file", image)
            newPost.image = filename;
            console.log(newPost)
            try {
                dispatch(UploadImage(data))
            } catch (error) {
                console.log(error)
            }
        } dispatch(uploadPost(newPost))
    
    }

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER


  return (
    <div className="PostShare">
      <img src={user.defaultProfile? serverPublic + user.defaultProfile: serverPublic + "defaultProfile.jpg"} alt='' className="profilePostShare"/>
      <div className='inputeDiv'>
        <input 
        ref={desc} required
        type="text" 
        placeholder="What's happening" />
        <div className="postOptions">
        <div className="option" style={{color: "var(--photo)"}} onClick={() => imageRef.current.click()}>
            <UilScenery/> 
            Photo
        </div>
        <div className="option" style={{color: "var(--video)"}}>
            <UilPlayCircle/>
            Video
        </div>
        <div className="option" style={{color: "var(--location)"}}>
            <UilLocationPoint/>
            Location
        </div>
        <div className="option" style={{color: "var(--shedule)"}}>
            <UilSchedule/>
            Shedule
        </div>
        <button className="button ps-button" onClick={handleSubmit}>Share</button>
        
        {/* hide the input btn and use its reference */}
        <div style={{display: "none"}}>
            <input type="file" 
            name="myimage" 
            ref={imageRef} 
            onChange={onImageChange}/>
        </div>
    </div>
    {/* open image preview window */}
    {image && (
        <div className="previewImage">
            <UilTimes onClick={()=> setImage(null)}/>
            <img src={URL.createObjectURL(image)} alt="" />
        </div>
    )}

    </div>
    
    </div>
    
  )
}

export default PostShare
