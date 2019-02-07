import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    display: "flex",
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

const Form = props => (
  <form onSubmit={props.getNews} className="searchForm">
    <TextField
      label="Search"
      margin="normal"
      name="search"
      type="search"
      variant="outlined"
      InputLabelProps={{
        required: true,
        color: "white",
        shrink: true
      }}
    />
    <Button
      className="searchButton"
      color="primary"
      type="submit"
      variant="raised"
    >
      Search
    </Button>
    <div className="search-results">
      <Button
        type="submit"
        className="view-results"
        fullWidth="true"
        color="primary"
      >
        View Search Results
      </Button>
    </div>

    {/* <input type="text" name="search" placeholder="Search.." />
    <button name="searchButton">Search</button> */}
  </form>
);

export default withStyles(styles)(Form);
