import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CameraRearIcon from '@material-ui/icons/CameraRear';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    marginLeft: 0
  },
  icon: {
    fontSize: 32,
    marginLeft: 60
  }
}))

// function HideOnScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <CameraRearIcon className={classes.icon} />
          <Typography variant="h4" className={classes.title}>MovieList</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
    </>
  )
}

export default Navbar;