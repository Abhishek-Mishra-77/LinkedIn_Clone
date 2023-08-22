import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import InputOption from './InputOption';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import './Feed.css';
import Post from './Post';
import { useSelector } from 'react-redux';
import { selectUser } from './ReducStore/userSlice';

const Feed = () => {

    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');


    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [posts])



    const sendPostHandler = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            decription: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput('')
    }


    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' />
                        <button onClick={sendPostHandler} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                    <InputOption Icon={VideoLibrarySharpIcon} title='Video' color='#E7A33E' />
                    <InputOption Icon={EventAvailableSharpIcon} title='Event' color='#C0CBCD' />
                    <InputOption Icon={AssignmentSharpIcon} title='Write article' color='#7FC15E' />
                </div>
            </div>

            {/* Post */}

            {posts.map(({ id, data: { name, decription, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    descripion={decription}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}

        </div>
    )
}

export default Feed