import React from "react";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  },
  greyStyle: {
    color: "#8f8f8f",
  },
});
const Todo = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.todoStyle}>
        <div>
          <Typography variant="subtitle1">Learn React</Typography>
          <Typography className={classes.greyStyle} variant="body2">
            Author: Emanuel
          </Typography>
          <Typography className={classes.greyStyle} variant="body2">
            Date: 4 days ago
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary">
            <Button>
              <CheckCircle color="action" />
            </Button>
            <Button>
              <Create color="primary" />
            </Button>
            <Button>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Todo;
