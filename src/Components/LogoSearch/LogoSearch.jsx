import React from 'react';
import Logo from '../../img/logo.png';
import {UilSearch} from '@iconscout/react-unicons'; 
import './LogoSearch.scss';

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
      <img src={Logo} alt="logo" />
      <div className="Search">
        <input type="text" placeholder='#Search People' />
        <div className="s-icon">
            <UilSearch/>
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
