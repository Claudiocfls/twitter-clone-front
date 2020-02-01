import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: 'border-box',
  },
});

const Container = (props) => {
  const { children } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
}

export default Container;
