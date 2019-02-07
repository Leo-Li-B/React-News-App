import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: "0",
    margin: theme.spacing.unit
  }
});

const Footer = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          React News App
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Footer);
