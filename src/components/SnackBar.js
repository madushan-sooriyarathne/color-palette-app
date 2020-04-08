import React, { Component } from "react";
import withStyles from "react-jss";

import SnackBarStyles from "../styles/SnackBarStyles";

export default withStyles(SnackBarStyles)(
  class SnackBar extends Component {
    constructor(props) {
      super(props);

      // Method bindings for event handlers
      this.handleClose = this.handleClose.bind(this);
    }

    // Event handler for close button.
    handleClose(event) {
      // Call the event handler function passed from parent component
      this.props.onClose();
    }

    render() {
      const { classes, message } = this.props;
      return (
        <div
          className={`${classes.SnackBar} ${
            this.props.active && classes.SnackBar_show
          }`}
        >
          <p>{message}</p>
          <button onClick={this.handleClose}>&#10005;</button>
        </div>
      );
    }
  }
);
