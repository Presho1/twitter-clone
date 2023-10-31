import React from 'react'
import './widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search' type="text" />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening?</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed 
        sourceType="profile" 
        screenName="hey_yinka" 
        options={{height : 400}}
        />
        <br />
        <TwitterShareButton
          url="https://twitter.com/hey_yinka"
          title="Hey Yinka! Check out my Twitter!"
          via="hey_yinka"
        />
      </div>
    </div>
  )
}

export default Widgets