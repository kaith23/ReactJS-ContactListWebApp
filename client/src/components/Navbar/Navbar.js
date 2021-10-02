import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ContactsIcon from "@material-ui/icons/Contacts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
    backgroundColor: "primary",
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="ContactsIcon">
            <ContactsIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Contact List Web Application
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
