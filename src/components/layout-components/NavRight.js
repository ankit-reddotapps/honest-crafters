import React from 'react'

import searchIcon from '../../assets/search_black_24dp.svg'
import notificationIcon from '../../assets/notifications_black_24dp.svg';
import settingsIcon from '../../assets/settings_black_24dp.svg';
import profilePic from '../../assets/Avatar.png';

import './NavRight.css'



const NavRight = () => {
  return (
    <>
      <ul className='nav-right'>
        <li>
          <span className='m-3'><img src={searchIcon}/></span>
          <span className='m-3'><img src={notificationIcon}/></span>
          <span className='m-3'><img src={settingsIcon}/></span>
          <span className='m-3'><img src={profilePic}/></span>
          
        </li>
      </ul>
    </>
  )
}

export default NavRight;