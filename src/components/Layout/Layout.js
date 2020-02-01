import React from 'react';
import Container from './../Container';
import { makeStyles } from '@material-ui/core/styles';
import SidePanelLeft from './../SidePanelLeft';

const useStyles = makeStyles({
  container: {
    padding: '0 300px',
    height: '100vh',
    position: 'relative',
  },
  leftPanel: {
    height: '80vh',
    width: '270px',
    position: 'fixed',
    left: '300px',
  },
  rightPanel: {
    height: '80vh',
    width: '380px',
    position: 'fixed',
    right: '300px',
  },
  topHeader: {
    border: '1px solid rgb(230, 236, 240)',
    backgroundColor: '#FFF',
    height: '50px',
    width: 'calc(100% - 600px - 270px - 380px - 2px)',
    position: 'fixed',
    left: '570px',
    top: 0,
    zIndex: 2,
  },
  pageContent: {
    paddingTop: '36px',
    position: 'absolute',
    left: '570px',
    width: 'calc(100% - 600px - 270px - 380px)',
  },
});

const Layout = (props) => {
  const classes = useStyles();

  return (
    <Container classes={{ root: classes.container}}>
      <div className={classes.leftPanel}>
        <SidePanelLeft />
      </div>
      <div className={classes.rightPanel}></div>
      <div className={classes.topHeader}></div>
      <div className={classes.pageContent}>
        {props.children}
      </div>
    </Container>
  );
};

export default Layout;
