import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction='column'>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid container>
          <Grid item xs={2} sm={1} />
          <Grid item xs={8} sm={10} >
            <Content />
          </Grid>
          <Grid item xs={2} sm={1} />
        </Grid>
      </Grid>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));