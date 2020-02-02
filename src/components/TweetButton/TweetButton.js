import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyles = makeStyles({
  buttonWrapper: {
    height: '35px',
    width: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    color: 'rgb(101, 119, 134)',
  },
  heartButton: {
    '&:hover': {
      backgroundColor: 'rgba(224, 36, 94, 0.1)',
      color: 'rgb(224, 36, 94)',
    },
  },
  commentButton: {
    '&:hover': {
      backgroundColor: 'rgba(29, 161, 242, 0.1)',
      color: 'rgb(29, 161, 242)',
    },
  },
  retweetButton: {
    '&:hover': {
      backgroundColor: 'rgba(23, 191, 99, 0.1)',
      color: 'rgb(23, 191, 99)',
    },
  },
  buttonLabel: {
    position: 'absolute',
    left: '40px',
    top: '8px',
    color: 'rgb(101, 119, 134)',
  },
});

const variants = {
  heart: <AiOutlineHeart size={20} />,
  retweet: <AiOutlineRetweet size={20} />,
  comment: <FaRegCommentAlt size={16} />,
};

const TweetButton = (props) => {
  const {
    variant,
    handleClick,
    number,
  } = props;
  const classes = useStyles();

  const IconVariant = variants[variant];

  return (
    <span style={{position: 'relative'}}>
      <div
        className={classnames(classes.buttonWrapper,{
          [classes.heartButton]: variant === 'heart',
          [classes.commentButton]: variant === 'comment',
          [classes.retweetButton]: variant === 'retweet',
        })}
        onClick={handleClick}
      >
        {IconVariant}
      </div>
      {number > 0 && (<span className={classes.buttonLabel}>{number}</span>)}
    </span>
  );
};

export default TweetButton;
