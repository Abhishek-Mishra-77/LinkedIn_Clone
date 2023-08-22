import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './ReducStore/userSlice';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePicture, setProfilePicture] = useState('')
    const dispatch = useDispatch();


    const registerHandler = () => {
        if (!name) {
            alert('Please enter a full name!');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePicture
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.id,
                            displayName: name,
                            photoURL: profilePicture
                        }))
                    })

            })
            .catch(error => alert(error.message))
    }

    const loginHandler = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL
                }))
            })
            .catch((error) => alert(error))

    }



    return (
        <div className='login'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.m2u-U1znAUxmlqj9gPezEgHaB0&pid=Api&P=0&h=180' alt='logo' />
            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder='Full name (required if refistering' />

                <input
                    value={profilePicture}
                    onChange={(e) => setProfilePicture(e.target.value)}
                    type='text'
                    placeholder='Profile pic URL (optional)' />

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    placeholder='Email' />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Password' />

                <button type='submit' onClick={loginHandler}>Sign In</button>
            </form>
            <p>Not a member? {"  "}
                <span
                    onClick={registerHandler}
                    className='login__register'>Register Now</span>
            </p>
        </div>
    )
}

export default Login