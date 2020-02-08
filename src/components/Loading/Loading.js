import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "rgba(29, 161, 242)",
    },
  },
});

const useStyles = makeStyles({
  loadingWrapper: {
    padding: '12px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

const Loading = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.loadingWrapper}>
        <CircularProgress color="secondary" />
      </div>
    </ThemeProvider>
  );
};

export default Loading;
