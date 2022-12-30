import React from 'react';
import './widgetsSmall.css';
import { Visibility } from '@mui/icons-material';

const widgetsSmall = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle" > New Join Members</span>
        <ul className='widgetSmList' >
          <li className="widgetSmListItem" >
            <img src='https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg' alt='' className='widgetSmImg' />
            <div className='widgetSmUser' >
              <span className='widgetSmUserName'>Oscar Badilla</span>
              <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility />
              Display
            </button>
          </li>
          <li className="widgetSmListItem" >
            <img src='https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg' alt='' className='widgetSmImg' />
            <div className='widgetSmUser' >
              <span className='widgetSmUserName'>Maria Hernandez</span>
              <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility />
              Display
            </button>
          </li>
          <li className="widgetSmListItem" >
            <img src='https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg' alt='' className='widgetSmImg' />
            <div className='widgetSmUser' >
              <span className='widgetSmUserName'>Ana Barraza</span>
              <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility />
              Display
            </button>
          </li>
          <li className="widgetSmListItem" >
            <img src='https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg' alt='' className='widgetSmImg' />
            <div className='widgetSmUser' >
              <span className='widgetSmUserName'>Carlos Jimenez</span>
              <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility />
              Display
            </button>
          </li>
          <li className="widgetSmListItem" >
            <img src='https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg' alt='' className='widgetSmImg' />
            <div className='widgetSmUser' >
              <span className='widgetSmUserName'>Ethan Suk</span>
              <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
        </ul>
    </div>
  )
};

export default widgetsSmall;