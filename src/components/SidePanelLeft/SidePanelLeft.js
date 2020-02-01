import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SidePanelLeftButton from './../SidePanelLeftButton';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto',
  },
});

const SidePanelLeft = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {[1,2,3,4,5,6,7,8,9].map(i => <SidePanelLeftButton />)}
    </div>
  );
};

export default SidePanelLeft;
