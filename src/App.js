import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import photo from "./img/cv_photo.jpg";
import { Typography } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

//import components

import About from "./components/About";
import Exp from "./components/Exp";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Lang from "./components/Lang";

/*
things to add:
1. theme swicher
2. contact links (absolute position at the bottom side of photo with text like "hello im vladislav karol")

questions:
1. fonts awesome connection (or MUI icons)
2. MUI theme 
3. img positioning
*/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  // absolute: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  // },
  fixed: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "50vw",
    height: "auto",
  },
}));

const StyledEmptyDiv = styled(Typography)({
  height: "100px",
});

const App = () => {
  const appClasses = useStyles();

  return (
    <div className={appClasses.root}>
      <img
        src={photo}
        alt="my_photo"
        className={(appClasses.photo, appClasses.fixed)}
      />
      <Grid container spacing={3}>
        <Grid
          className={appClasses.img_container}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
        ></Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Switch />
          <About />
          <StyledEmptyDiv />
          <Exp />
          <StyledEmptyDiv />
          <Education />
          <StyledEmptyDiv />
          <Skills />
          <StyledEmptyDiv />
          <Lang />
          <StyledEmptyDiv />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
