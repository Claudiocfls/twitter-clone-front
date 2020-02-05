import React from 'react';
import Container from './../Container';
import { makeStyles } from '@material-ui/core/styles';
import SidePanelLeft from './../SidePanelLeft';
import SidePanelRight from '../SidePanelRight/SidePanelRight';

const useStyles = makeStyles(theme => ({
  container: {
    // padding: '0 300px',
    // height: '',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftPanel: {
    // height: '80vh',
    width: '270px',
    position: '-webkit-sticky',
    position: 'sticky',
    alignSelf: 'flex-start',
    top: 0,
    // [theme.breakpoints.down('md')]: {
    //   height: '80vh',
    //   width: '70px',
    //   position: 'fixed',
    //   left: '50px',
    // },
  },
  rightPanel: {
    alignSelf: 'flex-start',
    // height: '80vh',
    position: 'sticky',
    top: 0,
    width: '380px',
    // position: 'fixed',
    // right: '300px',
    [theme.breakpoints.down('md')]: {
      height: '80vh',
      width: '380px',
      position: 'fixed',
      right: '50px',
    },
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
    // width: 'calc(100vw - 600px - 270px - 380px - 2px)',
    width: 'calc(100% - 2px)',
    position: 'sticky',
    top: 0,
    // position: 'fixed',
    // left: '570px',
    // top: 0,
    // position: 'relative',
    // top: 0,
    left: '-50px',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: '0 12px',
    '& h1': {
      fontSize: '18px',
      marginLeft: '12px',
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(100vw - 100px - 70px - 380px - 2px)',
      left: '120px',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100vw - 100px - 70px - 2px)',
      left: '120px',
    },
  },
  pageContent: {
    // paddingTop: '55px',
    // position: 'absolute',
    // left: '570px',
    // width: 'calc(100vw - 600px - 270px - 380px)',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: 'calc(100vw - 100px - 70px - 380px)',
      left: '120px',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100vw - 100px - 70px)',
      left: '120px',
    },
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
