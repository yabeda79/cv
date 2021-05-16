import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Paper className={classes.paper}>photo</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Paper className={classes.paper}>text</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
