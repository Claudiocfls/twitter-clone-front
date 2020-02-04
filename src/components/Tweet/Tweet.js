import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TweetButton from './../TweetButton/TweetButton';
import api from './../../services/api';
import moment from 'moment';

const useStyles = makeStyles({
  tweet: {
    border: '1px solid rgb(230, 236, 240)',
    borderTop: 'none',
    listStyleType: 'none',
    display: 'grid',
    gridTemplateColumns: '80px auto',
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)',
    },
    paddingTop: '12px',
    paddingBottom: '8px',
  },
  header: {
    '& h3':{
      margin: 0,
    },
    '& h4': {
      margin: 0,
      color: 'rgb(101, 119, 134)',
      fontSize: '15px',
      fontWeight: 400,
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    '& > *': {
      marginRight: '8px',
    },
  },
  content: {
    '& p': {
      margin: '15px 0',
      fontSize: '14px',
      lineHeight: '20px',
    },
    paddingRight: '12px',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '80px',
  },
  picture: {
    display: 'flex',
    justifyContent: 'center',
  },
  pictureShape: {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgb(230, 236, 240)',
  },
});

const Tweet = ({ author, content, tweetId, likes, createdAt }) => {
  const [numberOfLikes, setNumberOfLikes] = useState(likes);
  const classes = useStyles();

  const periodSinceCreation = moment(createdAt).fromNow();

  useEffect(() => {
    setNumberOfLikes(likes);
  }, [likes]);

  const handleClick = async () => {
    setNumberOfLikes(numberOfLikes + 1);
    const { data } = await api.post('/like', {
      id: tweetId,
    });
    if (data.likes !== numberOfLikes) {
      setNumberOfLikes(data.likes);
    }
  };


  return (
    <li className={classes.tweet}>
      <div className={classes.picture}>
        <div className={classes.pictureShape} />
      </div>
      <div className={classes.tweetContent}>
        <div className={classes.header}>
          <h3>{author || 'nome'}</h3>
          <h4>{" @claudio"}</h4>
          <h4>{` · ${periodSinceCreation}`}</h4>
        </div>
        <div className={classes.content}>
          <p>{content || 'content'}</p>
        </div>
        <div className={classes.bottom}>
          <TweetButton variant="comment" />
          <TweetButton variant="retweet" />
          <TweetButton handleClick={handleClick} variant="heart" number={numberOfLikes} />
        </div>
      </div>
    </li>
  );
}

export default Tweet;
