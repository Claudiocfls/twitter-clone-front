import React, { useState, useEffect } from 'react';
import Tweet from './../Tweet';
import { makeStyles } from '@material-ui/core/styles';
import socket from 'socket.io-client';

// subscribeToEvents = () => {
//   const io = socket('http://localhost:3000')

//   io.on('tweet', data => {
//     this.setState({ tweets: [data, ...this.state.tweets] })
//   })

//   io.on('delete', data => {
//     this.setState({ tweets: this.state.tweets.filter(tweets => data._id === tweets._id ? !data : tweets)
//     })
//   })

//   io.on('like', data => {
//     this.setState({ tweets: this.state.tweets.map(
//       tweet => tweet._id === data._id ? data : tweet
//     )
//   })
//   })

// }

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

  useEffect(() => {
    if (!subscribed) subscribeToEvents();
    setTweetsList(tweets);
  }, [tweets]);

  useEffect(() => {
    if (newTweet) {
      setTweetsList([newTweet, ...tweetsList]);
      setNewTweet(undefined);
    };
  });

  const subscribeToEvents = () => {
    setSubscribed(true);
    const io = socket('http://localhost:3001');

    io.on('tweet', addNewTweet);
  };

  const addNewTweet = (tweet) => {
    setNewTweet(tweet);
  }

  return (
    <ul className={classes.list}>
      {console.log("no return da lista:", tweetsList.length)}
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
