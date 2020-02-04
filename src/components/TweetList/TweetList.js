import React, { useState, useEffect } from 'react';
import Tweet from './../Tweet';
import { makeStyles } from '@material-ui/core/styles';
import Socket from '../../services/socket';

const useStyles = makeStyles({
  list: {
    padding: '0px',
    margin: 0,
  },
});

const TweetList = ({ tweets }) => {
  const classes = useStyles();
  const [tweetsList, setTweetsList] = useState([]);
  const [subscribed, setSubscribed] = useState(false);
  const [newTweet, setNewTweet] = useState(undefined);
  const [newLike, setNewLike] = useState(undefined);

  useEffect(() => {
    if (!subscribed){
      Socket.subscribeToNewTweets(addNewTweet);
      Socket.subscribeToNewLikes(updateLikeCounter);
      setSubscribed(true);
    }
    setTweetsList(tweets);
  }, [tweets]);

  useEffect(() => {
    if (newTweet) {
      setTweetsList([newTweet, ...tweetsList]);
      setNewTweet(undefined);
    };
    if (newLike) {
      const tempList = tweetsList;
      const tweetIndex = tweetsList.findIndex(t => t._id === newLike._id);
      tempList[tweetIndex].likes = newLike.likes;
      setTweetsList(tempList);
      setNewLike(undefined);
    }
  });

  const addNewTweet = tweet => {
    setNewTweet(tweet);
  }

  const updateLikeCounter = tweet => {
    setNewLike(tweet);
  }

  return (
    <ul className={classes.list}>
      {tweetsList.map((tweet, index) =>
        <Tweet 
          key={`${tweet._id}-${index}`}
          tweetId={tweet._id}
          author={tweet.author} 
          content={tweet.content}
          likes={tweet.likes}
          createdAt={tweet.createdAt}
        />
      )}
    </ul>
  );
}

export default TweetList;
