import React, {useState, useRef} from 'react';
import "./PostShare.scss";
import profileImg from '../../../img/profileImg.jpg';
import {UilScenery} from "@iconscout/react-unicons";
import {UilPlayCircle} from '@iconscout/react-unicons';
import {UilLocationPoint} from '@iconscout/react-unicons';
import {UilSchedule} from '@iconscout/react-unicons';
import {UilTimes} from '@iconscout/react-unicons';

const PostShare = () => {

    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange =(event) =>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }

  return (
    <div className="PostShare">
      <img src={profileImg} alt='' className="profilePostShare"/>
      <div className='inputeDiv'>
        <input type="text" placeholder="What's happening" />
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
        <button className="button ps-button">Share</button>
        {/* hide the input btn and use its reference */}
        <div style={{display: "none"}}>
            <input type="file" name="myimage" ref={imageRef} onChange={onImageChange}/>
        </div>
    </div>
    {/* open image preview window */}
    {image && (
        <div className="previewImage">
            <UilTimes onClick={()=> setImage(null)}/>
            <img src={image.image} alt="" />
        </div>
    )}

    </div>
    
    </div>
    
  )
}

export default PostShare
