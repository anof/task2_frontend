import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { fontFamily, textAlign, fontWeight } from '@material-ui/system';
import './lower.css';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "BebasNeueRegular",
    background: "#FFFFFF",
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(9),
    paddingBottom: theme.spacing(15),
  },
  row:{
    marginTop: theme.spacing(5),
  },

  paper:{
    textAlign: "left",

  },

  paperContent:{
    fontWeight: "bold",
    fontSize: "20px"
  }
  
}));

export default function Lower() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid item xs={5}>
          <div className={classes.paper}>
            <span className={classes.paperContent} style={{fontWeight: "bold" , fontSize: "-webkit-xxx-large"}}>GET PRODUCIN WITH MUSICDB</span>
          </div>
        </Grid>

        <Grid item xs={3} className={classes.row}>
          <div className={classes.paper}>
            <span className={classes.paperContent}>PICK YOUR PREFFERED INTSRUMENT</span><br/>
            <span className={classes.paperContent} style={{fontWeight: "normal" , fontSize: "13px"}}>PICK THE INSTRUMENTS YOU NEED TO COMPOSE YOUR PIECE</span>
          </div>
        </Grid>

        <Grid item xs={3} className={classes.row}>
          <div className={classes.paper} style={{color: '#c43950', fontWeight: "bold"}}>
            START COMPOSING
          </div>
        </Grid>
    </div>
  );
}
