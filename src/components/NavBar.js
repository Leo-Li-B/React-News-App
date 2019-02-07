import React from "react";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const flexContainer = {
  display: "flex",
  flexDirection: "row",
  padding: 0
};

const NavBar = props => (
  <div>
    <List style={flexContainer}>
      <ListItem>
        <Button onClick={props.getCountry} fullWidth={true}>
          Canada
        </Button>
      </ListItem>
      <ListItem>
        <Button onClick={props.getCountry} fullWidth={true}>
          Australia
        </Button>
      </ListItem>
      {/* <ListItem>
        <form onSubmit={props.getNews} className="searchForm">
          <Button fullWidth={true} type="submit">
            Search Results
          </Button>
        </form>
      </ListItem> */}
      <ListItem>
        <Button onClick={props.getCountry} fullWidth={true}>
          US
        </Button>
      </ListItem>
      <ListItem>
        <Button onClick={props.getCountry} fullWidth={true}>
          China
        </Button>
      </ListItem>
    </List>
  </div>
);

export default NavBar;
