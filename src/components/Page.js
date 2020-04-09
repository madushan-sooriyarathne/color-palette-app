import React, { Component } from "react";
import withStyles from "react-jss";

import styles from "./../styles/PageStyles";

export default withStyles(styles)(
  class Page extends Component {
    render() {
      const { classes, children } = this.props;
      return <section className={classes.Page}>{children}</section>;
    }
  }
);
