import React, { useEffect } from 'react';
import Header from './Header';
import './App.css';
import SideBar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './ReducStore/userSlice';
import { auth } from './firebase';
import { login } from './ReducStore/userSlice';
import Login from './Login';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      }
      else {
        dispatch(logout());
      }
    })
  }, [])


  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? <Login /> : (
        <div div className='app__body'>
          <SideBar />
          <Feed />
          <Widgets />
        </div>)
      }

    </div >
  );
}

export default App;
