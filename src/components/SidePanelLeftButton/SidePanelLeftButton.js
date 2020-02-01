import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    border: 'none',
    cursor: 'pointer',
    height: '46px',
    borderRadius: '23px',
    marginBottom: '12px',
    marginTop: '6px',
    '& h4': {
      margin: 0,
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
});

const SidePanelLeftButton = (props) => {
  const { icon, title, active } = props;
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <h4>img</h4>
      <h4>nome do botao</h4>
    </div>
  );
};

export default SidePanelLeftButton;
