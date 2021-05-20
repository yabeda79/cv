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

const Lang = () => {
  return (
    <div>
      <StyledHeaderBold>Languages</StyledHeaderBold>
      <StyledParagraphMain container spacing={3}>
        <StyledParagraphMain item xs={6} sm={6} md={4} lg={4} xl={4}>
          Russian (Native speaker)
        </StyledParagraphMain>
        <StyledParagraphMain item xs={6} sm={6} md={4} lg={4} xl={4}>
          Belarussian (Native speaker)
        </StyledParagraphMain>
        <StyledParagraphMain item xs={6} sm={6} md={4} lg={4} xl={4}>
          English (Intermediate)
        </StyledParagraphMain>
      </StyledParagraphMain>
    </div>
  );
};

export default Lang;
