import React, { useState } from "react";
import photo from "./img/cv_photo.jpg";

//MUI

import { makeStyles, styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";

//MUI icons

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";

//import components

import About from "./components/About";
import Exp from "./components/Exp";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Lang from "./components/Lang";
import Contacts from "./components/Contacts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  photo: {
    height: "100vh",
    width: "auto",
  },
  img_container: {
    overflow: "hidden",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
  },
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
  img_fixed: {
    position: "fixed",
    width: "50vw",
    overflow: "hidden",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
  },
  mobile_font_size_hi: {
    fontSize: "32px",
  },
  desktop_font_size_hi: {
    fontSize: "50px",
  },
  mobile_font_size_me: {
    fontSize: "24px",
  },
  desktop_font_size_me: {
    fontSize: "32px",
  },
}));

const StyledEmptyDiv = styled(Typography)({
  height: "50px",
});

const StyledHelloBold = styled(Typography)({
  fontWeight: "bold",
  color: "#bebece",
  textAlign: "center",
  justifySelf: "center",
});

const StyledTranspDiv = styled(Container)({
  position: "absolute",
  left: "0",
  bottom: "0",
  height: "100vh",
});

const StyledIconsDiv = styled("div")({
  width: "35%", //50%
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
  bottom: "10%", // 15%
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
});

const StyledGradientDiv = styled("div")({
  width: "100%",
  height: "50%",
  position: "absolute",
  left: "0",
  // bottom: "0",
  top: "50vh",
  background:
    "linear-gradient(0deg, rgba(34,54,195,1) 0%, rgba(255,255,255,0) 100%)",
});

const App = () => {
  const appClasses = useStyles();

  const [vw, setVw] = useState(window.screen.width);

  const init = () => {
    setVw(window.screen.width);
  };

  window.addEventListener("resize", init);

  return (
    <div className={appClasses.root}>
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
          <div className={vw < 960 ? "" : appClasses.img_fixed}>
            <img src={photo} alt="my_photo" className={appClasses.photo} />
            <StyledTranspDiv
              className={vw < 960 ? appClasses.smallvw : appClasses.largevw}
            >
              <StyledGradientDiv></StyledGradientDiv>
              <StyledHelloDiv>
                <StyledHelloBold
                  className={
                    vw < 960
                      ? appClasses.mobile_font_size_hi
                      : appClasses.desktop_font_size_hi
                  }
                >
                  Hi, I'm Vladislav Karol
                </StyledHelloBold>
              </StyledHelloDiv>
              <StyledIconsDiv>
                <a
                  href="http://github.com/yabeda79/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon fontSize="large" style={{ color: "#bebece" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vladislav-karol-0303891ba/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon fontSize="large" style={{ color: "#bebece" }} />
                </a>
                <a
                  href="http://t.me/vladislavkarol"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TelegramIcon fontSize="large" style={{ color: "#bebece" }} />
                </a>
              </StyledIconsDiv>
            </StyledTranspDiv>
          </div>
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
          <Contacts />
          <StyledEmptyDiv />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
