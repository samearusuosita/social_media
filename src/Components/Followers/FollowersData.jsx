import React, { useEffect, useState } from 'react';
import './FollowersData.scss';

// import { Followers } from '../../Data/FollowersData';
import User from '../User/User';
import { useSelector } from 'react-redux';
import { getAllUser } from '../../api/UserRequest';
// import { useState } from 'react';

// stopped at 2:50

const FollowersData = () => {

  const [persons, setPersons] = useState([]);
  const {user} = useSelector((state) => state.authReducer.authData);
  
  useEffect(() =>{
    const fetchPersons = async() =>{
      const {data} = await getAllUser();
      setPersons(data)
      console.log(data)
    };
    fetchPersons()
  }, []);


  return (
    <div className='Followers'>
      <h3>People you may know</h3>
      
      {persons.map((person, id) => {
        if(persons._id !== user._id) {
          return <User person = {person} key={id} />
        }
        return("")
        })}
    </div>
  )
}

export default FollowersData
