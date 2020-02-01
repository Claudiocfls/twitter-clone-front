import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  
});

const TweetTextArea = () => {
  return (
    <textarea style={{height: '200px', width: 'calc(100% - 6px)', resize: 'none'}} placeholder={"What's happening?"}/>
  );
};

export default TweetTextArea;
