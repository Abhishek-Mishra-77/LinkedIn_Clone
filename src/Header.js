import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './ReducStore/userSlice';
import { auth } from './firebase';

const Header = () => {

    const dispatch = useDispatch()
    const user = useSelector(selectUser);

    const logoutHandler = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' alt='logo' />


                <div className='header__search'>
                    <SearchIcon />
                    <input placeholder='Search' type='text' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption
                    avatar={true}
                    title='Me'
                    onClick={logoutHandler} />
            </div>

        </div>
    )
}

export default Header