import React from "react";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

/*
component for experience, education etc
*/

const StyledHeaderBold = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#bebece",
  padding: "10px",
});

const StyledEduHeader = styled(Typography)({
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

const Education = () => {
  return (
    <div>
      <StyledHeaderBold>Education</StyledHeaderBold>
      <StyledEduHeader>2016-2020</StyledEduHeader>
      <StyledParagraphMain>
        Belarusian National Technical University
      </StyledParagraphMain>
      <StyledParagraphLow>Minsk, Belarus</StyledParagraphLow>
      <StyledEduHeader>2005-2016</StyledEduHeader>
      <StyledParagraphMain>Gymnasium №146</StyledParagraphMain>
      <StyledParagraphLow>Minsk, Belarus</StyledParagraphLow>
    </div>
  );
};

export default Education;
