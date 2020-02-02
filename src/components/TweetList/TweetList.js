import React from 'react';
import Tweet from './../Tweet';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    padding: '0px',
    margin: 0,
  },
});

const TweetList = (props) => {
  const classes = useStyles();
  const { tweets } = props;

  return (
    <ul className={classes.list}>
      {tweets.map((tweet, index) =>
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
