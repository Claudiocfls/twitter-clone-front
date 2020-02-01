import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const SidePanelLeft = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <div>teste</div>
      <div>teste</div>
      <div>teste</div>
    </div>
  );
};

export default SidePanelLeft;
