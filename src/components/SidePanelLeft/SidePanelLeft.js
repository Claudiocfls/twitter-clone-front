import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SidePanelLeftButton from './../SidePanelLeftButton';
import { useAuth0 } from "../../react-auth0-spa";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const useButtons = () => {
  const { logout } = useAuth0();
  return [
    {
      icon: 'home',
      title: 'Home',
      active: true,
      handleClick: undefined,
    },
    {
      icon: 'hashtag',
      title: 'Explore',
      active: false,
      handleClick: undefined,
    },
    {
      icon: 'notifications',
      title: 'Notifications',
      active: false,
      handleClick: undefined,
    },
    {
      icon: 'bookmarks',
      title: 'Bookmarks',
      active: false,
      handleClick: undefined,
    },
    {
      icon: 'lists',
      title: 'Lists',
      active: false,
      handleClick: undefined,
    },
    {
      icon: 'profile',
      title: 'Profile',
      active: false,
      handleClick: undefined,
    },
    {
      icon: 'profile',
      title: 'Logout',
      active: false,
      handleClick: () => { sessionStorage.clear(); logout(); },
    },
  ];
};

const SidePanelLeft = () => {
  const classes = useStyles();
  const buttons = useButtons();

  return (
    <div className={classes.container}>
      <SidePanelLeftButton icon="twitter" active />
      {buttons.map((i, index) =>
        <SidePanelLeftButton
          key={`left-panel-button-${index}`}
          title={i.title}
          icon={i.icon}
          active={i.active}
          handleClick={i.handleClick}
        />
      )}
    </div>
  );
};

export default SidePanelLeft;
