import React from "react";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

/*
skills info
*/

const StyledHeaderBold = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#bebece",
  padding: "10px",
});

const StyledParagraphMain = styled(Grid)({
  fontSize: "15px",
  color: "#3d3d50",
  paddingLeft: "10px",
});

const Skills = () => {
  return (
    <div>
      <StyledHeaderBold>Skills</StyledHeaderBold>
      <StyledParagraphMain container spacing={3}>
        <StyledParagraphMain item xs={6} sm={6} md={3} lg={3} xl={3}>
          HTML5
        </StyledParagraphMain>
        <StyledParagraphMain item xs={6} sm={6} md={3} lg={3} xl={3}>
          CSS3
        </StyledParagraphMain>
        <StyledParagraphMain item xs={6} sm={6} md={3} lg={3} xl={3}>
          JavaScript
        </StyledParagraphMain>
        <StyledParagraphMain item xs={6} sm={6} md={3} lg={3} xl={3}>
          React.js
        </StyledParagraphMain>
        <StyledParagraphMain item xs={6} sm={6} md={3} lg={3} xl={3}>
          Material-UI
        </StyledParagraphMain>
        <StyledParagraphMain item xs={6} sm={6} md={3} lg={3} xl={3}>
          Git
        </StyledParagraphMain>
        <StyledParagraphMain item xs={6} sm={6} md={3} lg={3} xl={3}>
          Figma
        </StyledParagraphMain>
      </StyledParagraphMain>
    </div>
  );
};

export default Skills;
