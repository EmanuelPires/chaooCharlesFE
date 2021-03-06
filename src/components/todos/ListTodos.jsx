import React from "react";
import { Typography } from "@material-ui/core";
import Todo from "./ToDo";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  todosStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});
const ListTodos = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.todosStyle}>
        <Typography>The Todos</Typography>
        <Todo />
        <Todo />
      </div>
    </>
  );
};

export default ListTodos;
