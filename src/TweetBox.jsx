import React, { useState } from 'react';
import './tweetbox.css';
import { Avatar, Button } from '@mui/material';
import db from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = async (e) => {
    e.preventDefault();

    const postsCollection = collection(db, 'posts');

    try {
      const tweetData = {
        displayName: 'Precious',
        userName: 'dev_queen',
        verified: true,
        text: tweetMessage,
        avatar: 'https://t3.ftcdn.net/jpg/05/98/48/88/360_F_598488869_fiLUgajDxyaoxE9D3SuHMZfD56IjrBXe.jpg',
        timestamp: serverTimestamp()
      };

      if (tweetImage.trim() !== '') {
        tweetData.image = tweetImage;
      }

      const docRef = await addDoc(postsCollection, tweetData);

      console.log('Document written with ID: ', docRef.id);

      setTweetMessage('');
      setTweetImage('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar src='https://t3.ftcdn.net/jpg/05/98/48/88/360_F_598488869_fiLUgajDxyaoxE9D3SuHMZfD56IjrBXe.jpg' />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What is happening?!"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox__imageInput'
          type="text"
          placeholder="Optional: Enter image URL"
        />

        <Button onClick={sendTweet} type='button' className='tweetBox__btn'>Tweet</Button>
      </form>
      {tweetImage && (
        <div className="tweetBox__imagePreview">
          <img src={tweetImage} alt="Tweet Preview" />
        </div>
      )}
    </div>
  )
}

export default TweetBox;
