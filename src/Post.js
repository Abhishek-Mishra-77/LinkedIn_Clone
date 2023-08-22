import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import InputOption from './InputOption';

const Post = ({ name, descripion, message, photoUrl }) => {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar src={photoUrl} >{name[0]}</Avatar>
                <div className='post__info'>
                    <h2>{name}</h2>
                    <p>{descripion}</p>
                </div>
            </div>

            <div className='post__body'>
                <p>{message}</p>
            </div>

            <div className='post__buttons'>
                <InputOption Icon={ThumbUpAltSharpIcon} title='Like' color='gray' />
                <InputOption Icon={CommentIcon} title='Comments' color='gray' />
                <InputOption Icon={ShareIcon} title='Share' color='gray' />
                <InputOption Icon={SendIcon} title='Send' color='gray' />
            </div>

        </div>
    )
}

export default Post