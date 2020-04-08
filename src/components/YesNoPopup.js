import React, { Component } from "react";
import withStyles from "react-jss";

import styles from "../styles/YesNoPopupStyles";
import warning from "../img/alert.svg";

export default withStyles(styles)(
  class YesNoPopup extends Component {
    constructor(props) {
      super(props);

      // Event handler bindings for yes and no buttons
      this.handleAccept = this.handleAccept.bind(this);
      this.handleDecline = this.handleDecline.bind(this);
    }

    // Event handler for "yes" button's onClick event
    handleAccept(event) {
      this.props.handleAccept();
    }

    // Event handler for "no" button's onClick event
    handleDecline() {
      this.props.handleDecline();
    }

    render() {
      const { classes } = this.props;
      return (
        <div
          className={`${classes.Popup} ${
            this.props.active && classes.Popup_show
          }`}
        >
          <div
            className={`${classes.Popup_window} ${
              this.props.active && classes.Popup_window_show
            }`}
          >
            <div className={classes.Popup_content}>
              <img
                src={warning}
                alt="warning"
                className={classes.Popup_warning}
              ></img>
              <h2 className={classes.Popup_warning_title}>Warning!</h2>
              <p className={classes.Popup_message}>{this.props.message}</p>
            </div>

            <div className={classes.Popup_btns}>
              <button
                className={`${classes.Popup_btn} ${classes.Btn_red}`}
                onClick={this.handleAccept}
              >
                Yes
              </button>
              <button
                className={`${classes.Popup_btn} ${classes.Btn_green}`}
                onClick={this.handleDecline}
              >
                No
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
);
