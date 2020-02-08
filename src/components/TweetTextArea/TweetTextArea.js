import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../Button/Button';
import api from './../../services/api';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '76px auto',
    gridTemplateRows: 'auto 50px',
    minHeight: '118px',
    width: 'calc(100% - 2px)',
    border: '1px solid rgb(230, 236, 240)',
    paddingTop: '5px',
  },
  textArea: {
    height: '100%',
    width: 'calc(100% - 10px)',
    resize: 'none',
    border: 'none',
    paddingTop: '12px',
    fontSize: '19px',
    outline: 'none',
  },
  image: {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgb(230, 236, 240)',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '8px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '12px',
  },
});

const TweetTextArea = () => {
  const classes = useStyles();
  const [tweet, setTweet] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleChange = ({ target: { value }}) => {
    setTweet(value);
    setDisabled(value.length === 0);
  }

  const handleClick = async () => {
    if (disabled) return;

    const axiosOptions = {
      headers:{
        Authorization: `Bearer ${sessionStorage.getItem('twitter-clone-token')}`
      },
    };

    setDisabled(true);
    await api.post('/tweets',{
      author: 'DefaultName',
      content: tweet,
    }, axiosOptions);

    setTweet('');
  };

  return (
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <div className={classes.image}></div>
      </div>
      <textarea
        className={classes.textArea}
        placeholder={"What's happening?"}
        onChange={handleChange}
        value={tweet}
      />
      <div/>
      <div className={classes.buttonWrapper}>
        <Button
          title={'Tweet'}
          handleClick={handleClick}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default TweetTextArea;
