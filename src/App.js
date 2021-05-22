import React, { useState, useEffect } from "react";
import photo from "./img/cv_photo.jpg";

//MUI

import { makeStyles, styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";

//MUI icons

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";

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
    // margin: "0 auto",
  },
  img_container: {
    overflow: "hidden",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    // justifyContent: "center",
    // objectPosition: "center",
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
  largevw: {
    width: "50vw",
  },
  smallvw: {
    width: "100vw",
  },
}));

const StyledEmptyDiv = styled(Typography)({
  height: "50px",
});

const StyledHelloBold = styled(Typography)({
  fontSize: "50px",
  fontWeight: "bold",
  color: "#bebece",
});

const StyledTranspDiv = styled(Container)({
  position: "absolute",
  left: "0",
  bottom: "0",
  // width: "50vw",
  // width: window.screen.width < 960 ? "50vw" : "100vw",
  height: "100vh",
});

// if(window.screen.width<960){width: "50vw"} else {width: "100vw"}
// (window.screen.width<960) ? {width: "50vw"} : {width: "100vw"}

// const StyledTranspDiv = styled("div")``;

const StyledIconsDiv = styled("div")({
  width: "50%",
  position: "absolute",
  left: "50%",
  bottom: "5%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "space-between",
});

const StyledHelloDiv = styled("div")({
  width: "80%",
  position: "absolute",
  left: "50%",
  bottom: "10%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
});

const StyledGradientDiv = styled("div")({
  width: "100%",
  height: "50%",
  position: "absolute",
  left: "0%",
  bottom: "0%",
  // background: "rgb(34,54,195)",
  background:
    "linear-gradient(0deg, rgba(34,54,195,1) 0%, rgba(255,255,255,0) 100%)",
});

const App = () => {
  const appClasses = useStyles();

  const [vw, setVw] = useState(window.screen.width);

  const init = () => {
    setVw(window.screen.width);
  };

  // useEffect(() => {
  //   init();
  // }, []);

  window.addEventListener("resize", init);

  console.log(window.screen.width);

  return (
    <div className={appClasses.root}>
      {/* <img
        src={photo}
        alt="my_photo"
        className={(appClasses.photo, appClasses.fixed)}
      /> */}
      <Grid container spacing={3}>
        <Grid
          className={appClasses.img_container}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
        >
          <img src={photo} alt="my_photo" className={appClasses.photo} />
          <StyledTranspDiv
            // style={
            //   window.screen.width < 960 ? { width: "50vw" } : { width: "100vw" }
            // }
            className={vw < 960 ? appClasses.smallvw : appClasses.largevw}
          >
            <StyledGradientDiv></StyledGradientDiv>
            <StyledHelloDiv>
              <StyledHelloBold>Hi, I'm Vladislav Karol</StyledHelloBold>
            </StyledHelloDiv>
            <StyledIconsDiv>
              <GitHubIcon fontSize="large" style={{ color: "#bebece" }} />
              <LinkedInIcon fontSize="large" style={{ color: "#bebece" }} />
              <EmailIcon fontSize="large" style={{ color: "#bebece" }} />
              <TelegramIcon fontSize="large" style={{ color: "#bebece" }} />
            </StyledIconsDiv>
          </StyledTranspDiv>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
