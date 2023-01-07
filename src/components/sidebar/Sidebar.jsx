import React from 'react';
import './sidebar.css';
import { LineStyle, Analytics, TrendingUp, PersonOutlined, Inventory,
AttachMoney, Leaderboard, Email, DynamicFeed, Forum, ManageAccounts, Report } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link to="/">
                        <li className='sidebarListItem active'>
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <Analytics className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <TrendingUp className='sidebarIcon' />
                        Sales
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Quick Menu</h3>
                <ul className='sidebarList'>
                    <Link to="/users">
                        <li className='sidebarListItem'>
                            <PersonOutlined className='sidebarIcon' />
                            Users
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <Inventory className='sidebarIcon' />
                        Products
                    </li>
                    <li className='sidebarListItem'>
                        <AttachMoney className='sidebarIcon' />
                        Transactions
                    </li>
                    <li className='sidebarListItem'>
                        <Leaderboard className='sidebarIcon' />
                        Reports
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Notifications</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <Email className='sidebarIcon' />
                        Email
                    </li>
                    <li className='sidebarListItem'>
                        <DynamicFeed className='sidebarIcon' />
                        Feedback
                    </li>
                    <li className='sidebarListItem'>
                        <Forum className='sidebarIcon' />
                        Messages
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <ManageAccounts className='sidebarIcon' />
                        Manage
                    </li>
                    <li className='sidebarListItem'>
                        <Analytics className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <Report className='sidebarIcon' />
                        Report
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
};

export default Sidebar;