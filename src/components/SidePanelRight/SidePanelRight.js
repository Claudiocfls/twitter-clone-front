import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Trends from './../Trends/Trends';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    paddingLeft: '32px',
    paddingTop: '8px',
  },
  input: {
    height: '40px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: '#e6ecf0',
  },
});

const SidePanelRight = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <input className={classes.input} placeholder="Search Twitter" type="text" />
      <Trends />
    </div>
  );
};

export default SidePanelRight;
