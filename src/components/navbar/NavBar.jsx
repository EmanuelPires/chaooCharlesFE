import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import {} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
  authButton: {},
});
const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleSignOut = () => {
    history.push("/signin");
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            <Link className={classes.linkStyle} to="/">
              ToDoLink
            </Link>
          </Typography>
          <Typography variant="subtitle2" className={classes.root}>
            Logged in as Emanuel
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              handleSignOut();
            }}
          >
            Sign Out
          </Button>

          <Button color="inherit">
            <Link className={classes.linkStyle} to="/signin">
              SignIn{" "}
            </Link>
          </Button>

          <Button color="inherit">
            <Link className={classes.linkStyle} to="/signup">
              Sign UP
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
