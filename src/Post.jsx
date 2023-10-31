import React, {forwardRef} from 'react';
import './post.css';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


function timeDifference(current, previous) {
    const milliSecondsPerMinute = 60 * 1000;
    const milliSecondsPerHour = milliSecondsPerMinute * 60;
    const milliSecondsPerDay = milliSecondsPerHour * 24;
    const milliSecondsPerMonth = milliSecondsPerDay * 30;
    const milliSecondsPerYear = milliSecondsPerDay * 365;

    const elapsed = current - previous;

    if (elapsed < milliSecondsPerMinute) {
        return 'just now';
    } else if (elapsed < milliSecondsPerHour) {
        return Math.round(elapsed / milliSecondsPerMinute) + 'm ago';
    } else if (elapsed < milliSecondsPerDay) {
        return Math.round(elapsed / milliSecondsPerHour) + 'h ago';
    } else if (elapsed < milliSecondsPerMonth) {
        return Math.round(elapsed / milliSecondsPerDay) + 'd ago';
    } else if (elapsed < milliSecondsPerYear) {
        return Math.round(elapsed / milliSecondsPerMonth) + 'mo ago';
    } else {
        return Math.round(elapsed / milliSecondsPerYear) + 'y ago';
    }
}



const Post = forwardRef(({ 
    displayName, 
    userName, 
    verified, 
    text, 
    image, 
    avatar,
    timestamp
    },ref) => {

        const currentTime = new Date();
        const timestampDate = timestamp ? timestamp.toDate() : currentTime;

  return (
    <div className='post' ref={ref}>
        <div className="post__avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        {displayName} {""}
                        <span className='post__headerSpecial'>
                        {verified && <VerifiedIcon className='post__badge' />} @{userName}
                        </span>
                        <span className='post__headerTimestamp'> . {timeDifference(currentTime, timestampDate)}</span>
                        
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            <img 
            src={image} 
            alt=""
            />
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize='small' />
                <RepeatIcon fontSize='small' />
                <FavoriteBorderIcon fontSize='small' />
                <PublishIcon fontSize='small' />
            </div>

        </div>
        
    </div>
  )
});

export default Post