import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Widgets.css';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )


    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('FrontEnd Developer is back', 'Top news - 1010 reader')}
            <hr />
            {newsArticle('New Jobs News', 'Top Jobs news - 100 reader')}
            <hr />

            {newsArticle('backend Developer is back', 'Top news - 1010 reader')}
            <hr />

            {newsArticle('Ai is Coming in markey', 'Top news - 15 reader')}
            <hr />
            {newsArticle('New Jobs News', 'Top Jobs news - 100 reader')}
            <hr />

            {newsArticle('Full Stack Developer is back', 'Top news - 1010 reader')}

        </div>
    )
}

export default Widgets