import React from "react";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const StyledHeaderBold = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#bebece",
  padding: "10px",
});

const StyledParagraphMain = styled(Typography)({
  fontSize: "15px",
  color: "#3d3d50",
  paddingLeft: "10px",
});

/*
includes simple header and some simple text info
*/

const About = () => {
  return (
    <div>
      <StyledHeaderBold>About me</StyledHeaderBold>
      <StyledParagraphMain>
        I've got different passions, one of which is Web-development. I am a
        hard working, honest individual. I am a good timekeeper, always willing
        to learn new skills. I am friendly, helpful and polite, have a good
        sense of humour. I am able to work independently in busy environments
        and also within a team setting. I am outgoing and tactful, and able to
        listen effectively when solving problems
      </StyledParagraphMain>
    </div>
  );
};

export default About;
