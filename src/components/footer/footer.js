import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { fontFamily } from '@material-ui/system';
import LogoWhite from './img/logo white-01.png'
import './footer.css'

const useStyles = makeStyles(theme => ({
  root: {
    background: "#111111",
    padding: theme.spacing(5),
    paddingBottom: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    minHeight: theme.spacing(15),
    textAlign: 'left',
    background: "inherit",
    color: '#e8e7e8',
    fontFamily: "BebasNeueBold",
    fontSize: "16px",
  },
  paperContent:{
    display: "block",
    marginTop: theme.spacing(2),
    
  },
  bottomBar:{
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: theme.spacing(5),
    fontFamily: "BebasNeueRegular",
    color: "#b7b5b6",
    fontSize: "12px"
  },

  leftSide:{
      paddingLeft: theme.spacing(6),
  },

  rightSide:{
    marginRight: theme.spacing(7)
  },

}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <div className={classes.paper}>
            <img src={LogoWhite} alt='Logo Icon' width="100px" height="36px" />
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className={classes.paper}>
            <br/>
            <span className={classes.paperContent}>PROFILE</span>
            <span className={classes.paperContent}>SIGN IN</span>
            <span className={classes.paperContent}>MUSIC</span>
          </div>
        </Grid>

      </Grid>

      <div className={classes.bottomBar}>
        <div className={classes.leftSide}>
          <span>LEGAL</span>
          <span className={classes.leftSide}>PRIVACY CENTER</span>
          <span className={classes.leftSide}>PRIVACY POLICY</span>
          <span className={classes.leftSide}>COOKIES</span>
          <span className={classes.leftSide}>ABOUT ADS</span>
          
        </div>

        <div className={classes.rightSide}>
          &#169; 2019MUSICDB
        </div>

      </div>
    </div>
  );
}
