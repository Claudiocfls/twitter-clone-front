import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyles = makeStyles({
  button: {
    border: 'none',
    height: '36px',
    backgroundColor: 'rgb(29, 161, 242)',
    color: '#FFF',
    borderRadius: '18px',
    fontSize: '15px',
    padding: '0 16px',
    outline: 'none',
    cursor: 'pointer',
    fontWeight: 700,
  },
  disabled: {
    opacity: 0.4,
  },
});

const Button = ({ disabled, title, handleClick }) => {
  const classes = useStyles();

  return (
    <button
      className={classnames(classes.button, {
        [classes.disabled]: disabled,
      })}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
