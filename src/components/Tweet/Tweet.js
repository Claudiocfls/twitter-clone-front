import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

const Tweet = ({ author, content }) => {
  const classes = useStyles();

  return (
    <li className={classes.tweet}>
      <div className={classes.picture}>
        <div className={classes.pictureShape} />
      </div>
      <div className={classes.tweetContent}>
        <div className={classes.header}>
          <h3>{author || 'nome'}</h3>
          <h4>{"@claudio"}</h4>
          <h4>{" · 2 h"}</h4>
        </div>
        <div className={classes.content}>
          <p>{content || 'content'}</p>
        </div>
        <div className={classes.bottom}>
          <button>t</button>
          <button>t</button>
          <button>t</button>
          <button>t</button>
        </div>
      </div>
    </li>
  );
}

export default Tweet;
