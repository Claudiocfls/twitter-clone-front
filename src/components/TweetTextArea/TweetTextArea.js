import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '76px auto',
    gridTemplateRows: 'auto 45px',
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
  },
});

const TweetTextArea = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <div className={classes.image}></div>
      </div>
      <textarea className={classes.textArea} placeholder={"What's happening?"}/>
      <div/>
      <div className={classes.buttonWrapper}>enviar</div>
    </div>
  );
};

export default TweetTextArea;
