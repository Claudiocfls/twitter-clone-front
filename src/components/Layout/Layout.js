import React from 'react';
import Container from './../Container';
import { makeStyles } from '@material-ui/core/styles';
import SidePanelLeft from './../SidePanelLeft';
import SidePanelRight from '../SidePanelRight/SidePanelRight';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftPanel: {
    width: '270px',
    position: 'sticky',
    alignSelf: 'flex-start',
    top: 0,
    [theme.breakpoints.down('md')]: {
      width: '70px',
    },
  },
  rightPanel: {
    alignSelf: 'flex-start',
    position: 'sticky',
    top: 0,
    width: '380px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  midContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '600px',
  },
  topHeader: {
    border: '1px solid rgb(230, 236, 240)',
    backgroundColor: '#FFF',
    height: '54px',
    width: 'calc(100% - 2px)',
    position: 'sticky',
    top: 0,
    left: '-50px',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h1': {
      fontSize: '18px',
      marginLeft: '12px',
    },
  },
  pageContent: {
    width: '100%',
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <Container classes={{ root: classes.container}}>
      <div className={classes.leftPanel}>
        <SidePanelLeft />
      </div>
      <div className={classes.midContent}>
        <div className={classes.topHeader}>
          <h1>Home</h1>
        </div>
        <div className={classes.pageContent}>
          {props.children}
        </div>
      </div>
      <div className={classes.rightPanel}>
        <SidePanelRight />
      </div>
    </Container>
  );
};

export default Layout;
