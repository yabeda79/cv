import React from "react";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

/*
contacts info
*/

const StyledHeaderBold = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#bebece",
  padding: "10px",
});

const StyledConHeader = styled(Typography)({
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

const Contacts = () => {
  return (
    <div>
      <StyledHeaderBold>Contacts</StyledHeaderBold>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <StyledConHeader>Phone:</StyledConHeader>
          <StyledParagraphMain>+375 29 550-23-81</StyledParagraphMain>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <StyledConHeader>Email:</StyledConHeader>
          <StyledParagraphMain>vlad230899@gmail.com</StyledParagraphMain>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contacts;
