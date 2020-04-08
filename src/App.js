import React, { Component } from "react";
import ColorPalettesHome from "./layout/ColorPalettesHome";

import styles from "./styles/AppStyles";
import withStyles from "react-jss";

export default withStyles(styles)(
  class App extends Component {
    render() {
      const classes = this.props;
      return (
        <div className={classes.App}>
          <ColorPalettesHome />
        </div>
      );
    }
  }
);
