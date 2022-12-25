import React from 'react';
import './topbar.css';
import { Notifications, Language, Settings } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
              <span className='logo'>Admin</span>
            </div>
            <div className='topRight'>
              <div className='topbarIconContainer'>
                <Notifications />
                <span className='topIconBadge'>2</span>
              </div>
              <div className='topbarIconContainer'>
                <Language />
              </div>
              <div className='topbarIconContainer'>
                <Settings />
              </div>
              <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" 
                   alt='' 
                   className='topAvatar' />
            </div>
        </div>
    </div>
  )
};

export default Topbar;



