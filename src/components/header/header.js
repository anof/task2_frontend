import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { IconButton, Grow } from "@material-ui/core";
import ProfileIcon from  "./img/profile icon-01.png"
import Logo from  "./img/logo colored-01.png"
import "./header.css"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    
  },
  header:{
    background: "#FFFFFF",
    color: '#000000',
    justifyContent: 'space-between'
  },

  logo:{
      marginLeft: theme.spacing(5),
  },

  profile:{
    fontFamily: 'BebasNeueRegular',
    fontSize: '25px'
},


}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.header}>
            <IconButton className={classes.logo}>
            <img src={Logo} alt='Logo Icon' width="100px" height="36px" />
            </IconButton>
            

            <div>
                <Button color="inherit" className={classes.profile}>Profile</Button>
                <IconButton>
                    <img src={ProfileIcon} alt='Profile Icon' width="40px" height="22px" />
                </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
