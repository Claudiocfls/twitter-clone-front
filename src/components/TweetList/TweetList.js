import React from 'react';
import Tweet from './../Tweet';
import { makeStyles } from '@material-ui/core/styles';

const mockTweets = [
  {
    _id: 'aaaaaa',
    author: 'Claudio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    _id: 'aaaaaa',
    author: 'Claudio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    _id: 'aaaaaa',
    author: 'Claudio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    _id: 'aaaaaa',
    author: 'Claudio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    _id: 'aaaaaa',
    author: 'Claudio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    _id: 'aaaaaa',
    author: 'Claudio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    _id: 'aaaaaa',
    author: 'Claudio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    _id: 'aaaaaa',
    author: 'Claudio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    _id: 'aaaaaa',
    author: 'Claudio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    _id: 'aaaaaa',
    author: 'Claudio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    _id: 'aaaaaa',
    author: 'Claudio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    _id: 'aaaaaa',
    author: 'Claudio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const useStyles = makeStyles({
  list: {
    padding: '0px',
    margin: 0,
  },
});

const TweetList = () => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {mockTweets.map((tweet, index) => (<Tweet key={`${tweet._id}-${index}`}  author={tweet.author}  content={tweet.content}/>))}
    </ul>
  );
}

export default TweetList;
