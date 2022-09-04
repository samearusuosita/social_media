// creating profile modal using Mantin Core libary to enable onclick popup

import { Modal, useMantineTheme } from "@mantine/core";

import './ProfileModal.scss';
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UploadImage } from "../../actions/uploadAction";
import { updateUser } from "../../actions/userAction";

function ProfileModal({modelOpened, setModelOpened, data}){
    const theme = useMantineTheme();

    // stopped at 2:35

    // seprate password from data before fetching formdata
    const {password, ...other} = data;
    const [formData, setFormData] = useState(other);
    const [profileImage, setprofileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const dispatch = useDispatch()
    const params = useParams()
    const {user} = useSelector((state) => state.authReducer.authData)


    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    // image upload /change
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            event.target.name === "profileImage"
            ? setprofileImage(img)
            : setCoverImage(img);
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        let UserData = formData;
        if(profileImage){
            const data = new FormData();
            const fileName = Date.now() + profileImage.name;
            data.append("name", fileName);
            data.append("file", profileImage);
            UserData.profilePicture = fileName;
            try {
                dispatch(UploadImage(data));
            } catch (error) {
                console.log(error)
            }
        }
        if(coverImage){
            const data = new FormData();
            const fileName = Date.now() + coverImage.name;
            data.append("name", fileName);
            data.append("file", coverImage);
            UserData.coverPicture = fileName;
            try {
                dispatch(UploadImage(data));
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(updateUser(params.id, UserData));
        setModelOpened(false);
    }

    return(
        <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        size='55%'
        opened={modelOpened}
        onClose={()=>setModelOpened(false)}
        >
        <form action="" className="infoForm">
            <h3>Your Info</h3>
            <div>
                <input type="text" 
                placeholder='First Name' 
                className='infoInput' 
                name='firstname'
                onChange={handleChange}
                value = {formData.firstname}/>

                <input type="text" 
                placeholder='Last Name' 
                className='infoInput' 
                name='lastname'
                onChange={handleChange}
                value = {formData.lastname}/> 
            </div>
            <div>
                <input type="text" 
                placeholder='Works at' 
                className='infoInput' 
                name='worksAt'
                onChange={handleChange}
                value = {formData.worksAt}/> 
            </div>
            <div>
                <input type="text" 
                placeholder='Lives in' 
                className='infoInput' 
                name='livesin'
                onChange={handleChange}
                value = {formData.livesin}/>

                <input type="text" 
                placeholder='Country' 
                className='infoInput' 
                name='country'
                onChange={handleChange}
                value = {formData.country}/> 
            </div>
            <div>
                <input type="text" 
                placeholder='Relationship Status' 
                className='infoInput' 
                name='relationship'
                onChange={handleChange}
                value = {formData.relationship}/> 
            </div>
            <div>
                Profile Image
                <input type="file" name='profileImage' onChange={onImageChange}/> 
                Cover Image
                <input type="file" name='coverImage' onChange={onImageChange}/> 
            </div>
            <button className="button infoButton" onClick={handleSubmit}>Update</button>
        </form>
        </Modal>
    )
}

export default ProfileModal;