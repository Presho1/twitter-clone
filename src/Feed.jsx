import React, { useEffect, useState } from 'react';
import './feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import { onSnapshot, collection, query, orderBy, } from "firebase/firestore";
import FlipMove from 'react-flip-move';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) =>{
      const data = querySnapshot.docs.map((postDoc) => {
        return {id:postDoc.id, ...postDoc.data()}
      })
      setPosts(data);
      console.log('Data:', data); // Log the data to check if it's retrieved correctly
    });
      
    return () => unsubscribe();
    
  },[]);
  
  return (
    <div className='feed'>
      <div  className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
        </div>

        <TweetBox/>

        <FlipMove >

        {posts.map((post) =>(
         <Post
         key={post.id}
         displayName={post.displayName}
         userName={post.userName}
         verified={post.verified}
         text={post.text}
         avatar={post.avatar}
         image={post.image}
         timestamp={post.timestamp}
         />
        ))}
        </FlipMove>

     
        
    </div>
    </div>
  );
}

export default Feed