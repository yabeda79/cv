import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import photo from "./img/cv_photo.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  photo: {
    height: "100vh",
    width: "auto",
    margin: "0 auto",
  },
  img_container: {
    overflow: "hidden",
    // justifyContent: "center",
    objectPosition: "center",
  },
  block_header: {
    fontSize: "24px",
    color: "#bebece",
    padding: "10px",
  },
  education_header: {
    fontSize: "15px",
    color: "#bebece",
    paddingLeft: "10px",
  },
  main_text: {
    fontSize: "15px",
    color: "#3d3d50",
    paddingLeft: "10px",
  },
  low_text: {
    fontSize: "12px",
    color: "#3d3d50",
    paddingLeft: "10px",
    marginBottom: "30px",
  },
  bold: {
    fontWeight: "bold",
  },
  flex_container: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid
          className={classes.img_container}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
        >
          {/* <Paper className={classes.paper}>photo</Paper> */}
          <img src={photo} alt="my_photo" className={classes.photo} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div>
            <h1 className={classes.block_header}>About me</h1>
            <p className={classes.main_text}>
              I've got different passions, one of which is Web-development. I am
              a hard working, honest individual. I am a good timekeeper, always
              willing to learn new skills. I am friendly, helpful and polite,
              have a good sense of humour. I am able to work independently in
              busy environments and also within a team setting. I am outgoing
              and tactful, and able to listen effectively when solving problems.
            </p>
          </div>
          <div>
            <h1 className={classes.block_header}>Work Experience</h1>
            <h2 className={classes.education_header}>2019-2021</h2>
            <p className={classes.main_text}>Junior construction engineer</p>
            <p className={classes.main_text}>Monorakurs GC</p>
            <p className={classes.low_text}>Minsk, Belarus</p>
          </div>
          <div>
            <h1 className={classes.block_header}>Education</h1>
            <h2 className={classes.education_header}>2016-2020</h2>
            <p className={classes.main_text}>
              Belarusian National Technical University
            </p>
            <p className={classes.low_text}>Minsk, Belarus</p>
            <h2 className={classes.education_header}>2005-2016</h2>
            <p className={classes.main_text}>Gymnasium №146</p>
            <p className={classes.low_text}>Minsk, Belarus</p>
          </div>
          <div>
            <h1 className={classes.block_header}>Skills</h1>
            <div className={classes.flex_container}>
              <p className={classes.main_text}>HTML5</p>
              <p className={classes.main_text}>CSS3</p>
              <p className={classes.main_text}>JavaScript</p>
              <p className={classes.main_text}>React.js</p>
              <p className={classes.main_text}>Material-UI</p>
              <p className={classes.main_text}>Git</p>
              <p className={classes.main_text}>Figma</p>
            </div>
          </div>
          <div>
            <h1 className={classes.block_header}>Languages</h1>
            <div className={classes.flex_container}>
              <p className={classes.main_text}>Russian (Native speaker)</p>
              <p className={classes.main_text}>Belarussian (Native speaker)</p>
              <p className={classes.main_text}>English (Intermediate)</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
