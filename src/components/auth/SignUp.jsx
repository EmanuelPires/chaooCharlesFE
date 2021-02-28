import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  formStyles: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const SignUp = () => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.formStyles} noValidate autoComplete="off">
        <Typography variant="h5">Sign Up</Typography>
        <TextField
          className={classes.spacing}
          id="enter-name"
          label="enter name"
          variant="outlined"
          fullWidth
        />
        <TextField
          className={classes.spacing}
          id="enter-email"
          label="enter email"
          variant="outlined"
          fullWidth
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          label="enter password"
          variant="outlined"
          fullWidth
        />
        <Button
          className={classes.spacing}
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </>
  );
};

export default SignUp;
