import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SidePanelLeftButton from './../SidePanelLeftButton';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const buttons = [
  {
    icon: 'home',
    title: 'Home',
    active: true,
  },
  {
    icon: 'hashtag',
    title: 'Explore',
    active: false,
  },
  {
    icon: 'notifications',
    title: 'Notifications',
    active: false,
  },
  {
    icon: 'bookmarks',
    title: 'Bookmarks',
    active: false,
  },
  {
    icon: 'lists',
    title: 'Lists',
    active: false,
  },
  {
    icon: 'profile',
    title: 'Profile',
    active: false,
  },
];

const SidePanelLeft = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SidePanelLeftButton icon="twitter" active />
      {buttons.map(i => <SidePanelLeftButton title={i.title} icon={i.icon} active={i.active} />)}
    </div>
  );
};

export default SidePanelLeft;
