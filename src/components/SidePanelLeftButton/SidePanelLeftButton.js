import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { FaTwitter } from 'react-icons/fa';
import { TiHome } from 'react-icons/ti';
import { FiHash } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiBookmark } from 'react-icons/fi';
import { FaRegListAlt } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa';

const iconsList = {
  twitter: <FaTwitter size={28} />,
  home: <TiHome size={30} />,
  hashtag: <FiHash size={30} />,
  notifications: <IoMdNotificationsOutline size={30} />,
  bookmarks: <FiBookmark size={30}/>,
  lists: <FaRegListAlt size={26} />,
  profile: <FaRegUserCircle size={26} />,
};

const useStyles = makeStyles(theme => ({
  button: {
    border: 'none',
    cursor: 'pointer',
    height: '46px',
    borderRadius: '23px',
    marginBottom: '12px',
    marginTop: '6px',
    '& h4': {
      margin: 0,
      marginLeft: '16px',
    },
    backgroundColor: '#FFF',
    '&:hover': {
      backgroundColor: 'rgba(29, 161, 242, 0.1)',
      color: 'rgb(29, 161, 242)',
    },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0 12px',
  },
  active: {
    color: 'rgba(29, 161, 242)',
  },
  title: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const SidePanelLeftButton = (props) => {
  const { icon, title, active, handleClick } = props;
  const classes = useStyles();

  return (
    <div
      className={classnames(classes.button,{
        [classes.active]: active,
      })}
      onClick={handleClick}
    >
      {iconsList[icon]}
      {title && <h4 className={classes.title}>{title}</h4>}
    </div>
  );
};

export default SidePanelLeftButton;
