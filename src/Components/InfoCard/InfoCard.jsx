import React, { useState } from 'react';
import {UilPen} from '@iconscout/react-unicons'; 
import './InfoCard.scss';
import ProfileModal from '../ProfileModal/ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import * as UserApi from '../../api/UserRequest';
import { logOut } from '../../actions/AuthAction';




const InfoCard = () => {

    const [modelOpened, setModelOpened] = useState(false);

    const dispatch = useDispatch()
    const params = useParams()

    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})

    const {user} = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchProfileUser = async() =>{
            if(profileUserId === user._id)
            {
                setProfileUser(user)
                console.log(profileUser)
            }
            else{
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
                // console.log(profileUser)
            }
        }
        fetchProfileUser();
    }, [user])

// logout user
    const handleLogOut = () => {
        dispatch(logOut())

    }

  return (
    <div className="InfoCard">
        <div className='infoHead'>
            <h4>Profile info</h4>
            {/* condition to render settings if user is login */}
            {user._id === profileUserId ? (<div>
                <UilPen 
                width='2rem' 
                height='1.2rem' 
                onClick={() => setModelOpened(true)}/>

                {/* to open the form */}
                <ProfileModal 
                modelOpened={modelOpened} 
                setModelOpened={setModelOpened}
                data={user}/>
            </div>) : ""}
            
            
        </div>
        <div className="info">
            <span><b>Status</b></span>
            <span> {profileUser.relationship}</span>
        </div>
        <div className="info">
            <span><b>Lives in</b></span>
            <span> {profileUser.livesin}</span>
        </div>
        <div className="info">
            <span><b>Works at</b></span>
            <span> {profileUser.worksAt}</span>
        </div>
        <button className='button logOut-btn' onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default InfoCard
