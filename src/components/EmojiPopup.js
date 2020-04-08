import React, { Component } from "react";
import { Picker } from "emoji-mart";
import withStyles from "react-jss";

import styles from "../styles/EmojiPopupStyles";
import "emoji-mart/css/emoji-mart.css";

export default withStyles(styles)(
  class EmojiPopup extends Component {
    constructor(props) {
      super(props);

      // Method bindings for event handlers
      this.handleEmojiSelect = this.handleEmojiSelect.bind(this);
    }

    // Event handler for select event on a emoji
    // To be passed to Picker Component
    handleEmojiSelect(emoji) {
      this.props.handleEmojiSelect(emoji.native);
    }
    render() {
      const { classes, active } = this.props;
      return (
        <div
          className={`${classes.EmojiPopup} ${
            active && classes.EmojiPopup_show
          }`}
        >
          <Picker emoji="" title="" onSelect={this.handleEmojiSelect} />
        </div>
      );
    }
  }
);
