import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'  className={styles.button}>Home</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' className={styles.button}>Kitchen</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active' className={styles.button}>Waiter</NavLink>
          </Typography>
          <Button color="inherit">
            <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' className={styles.button}>Login</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
