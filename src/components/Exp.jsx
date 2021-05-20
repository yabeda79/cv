import React from "react";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";

/*
component for experience, education etc
*/

const StyledHeaderBold = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#bebece",
  padding: "10px",
});

const StyledExpHeader = styled(Typography)({
  fontSize: "15px",
  fontWeight: "bold",
  color: "#bebece",
  paddingLeft: "10px",
});

const StyledParagraphMain = styled(Typography)({
  fontSize: "15px",
  color: "#3d3d50",
  paddingLeft: "10px",
});

const StyledParagraphLow = styled(Typography)({
  fontSize: "12px",
  color: "#3d3d50",
  paddingLeft: "10px",
  marginBottom: "30px",
});

const Exp = () => {
  return (
    <div>
      <StyledHeaderBold>Work Experience</StyledHeaderBold>
      <StyledExpHeader>2019-2021</StyledExpHeader>
      <StyledParagraphMain>Junior construction engineer</StyledParagraphMain>
      <StyledParagraphMain>Monorakurs GC</StyledParagraphMain>
      <StyledParagraphLow>Minsk, Belarus</StyledParagraphLow>
    </div>
  );
};

export default Exp;
