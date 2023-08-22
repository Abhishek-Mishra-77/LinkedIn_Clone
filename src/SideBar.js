import React from 'react';
import './SideBar.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './ReducStore/userSlice';

const SideBar = () => {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://media.licdn.com/dms/image/D4D16AQFY_D_qSALnHA/profile-displaybackgroundimage-shrink_350_1400/0/1688487183933?e=1698278400&v=beta&t=GIt3vpOV8i1riDid2r-SBrvC59QthSbaJt2UbZCriOA' alt='image' />
                <Avatar src={user.photUrl} className='sidebar__avatar' >
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewe you</p>
                    <p className='sidebar__statNumber'>2,777</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>7,177</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineeering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default SideBar