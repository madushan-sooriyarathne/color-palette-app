import React, { Component } from "react";
import withStyles from "react-jss";

import styles from "../styles/FormPopupStyles";
import EmojiPopup from "../components/EmojiPopup";

export default withStyles(styles)(
  class FormPopup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showEmojiPopup: false,
        paletteName: "",
        emoji: "🎨",
      };

      // Event handler bindings

      //Event handler bind for input fields on change event
      this.handleChange = this.handleChange.bind(this);

      // Event handler binds from popup save and cancel button click events
      this.handleSave = this.handleSave.bind(this);
      this.handleCancel = this.handleCancel.bind(this);

      // Event handler bind for emoji picker opener button click event
      this.handleShowEmojiPicker = this.handleShowEmojiPicker.bind(this);

      // Event handler for Emoji picker's select emoji event
      this.handleEmojiSelect = this.handleEmojiSelect.bind(this);
    }

    // Event handler for input field's onChange event
    // This will keep the state and input field's value in sync
    handleChange(event) {
      // If there is a function passed from the parent component to handle
      // on change event, execute it here
      if (this.props.handleChange) {
        this.props.handleChange(this.state.paletteName);
      }

      // Update the state when value of input field changes
      this.setState({ paletteName: event.target.value });
    }

    // Event handler for the save button
    // Call the function that has been passed from the parent with input field's value
    handleSave(event) {
      this.props.handleSave({
        paletteName: this.state.paletteName,
        emoji: this.state.emoji,
      });
    }

    // Event handler for the cancel button
    // when triggered, it will clear the input field and execute the
    // function passed from the parent component
    handleCancel(event) {
      // Clear the input field
      this.setState({ paletteName: "" });
      this.props.handleCancel();
    }

    // Event handler for Emoji picker button
    // Show the emoji picker popup when triggered
    handleShowEmojiPicker(event) {
      event.preventDefault();
      this.setState((st) => {
        return { showEmojiPopup: !st.showEmojiPopup };
      });
    }

    // Event Handler for Emoji Picker's onSelect Event
    handleEmojiSelect(emoji) {
      this.setState((st) => {
        return { showEmojiPopup: false, emoji: emoji };
      });
    }

    render() {
      const { classes } = this.props;
      return (
        <div
          className={`${classes.FormPopup} ${
            this.props.active && classes.FormPopup_show
          }`}
        >
          <div
            className={`${classes.FormPopup_window} ${
              this.props.active && classes.FormPopup_window_show
            }`}
          >
            <div className={classes.FormPopup_content}>
              <h2 className={classes.FormPopup_title}>
                Choose a palette name{" "}
                <span role="img" aria-label="emoji">
                  🎨
                </span>
              </h2>
              <p className={classes.FormPopup_message}>
                Please enter a name for your palette. It has to be unique!
              </p>
            </div>
            <form className={classes.FormPopup_form} onSubmit={this.handleSave}>
              <div className={classes.Form_input_group}>
                <input
                  type="text"
                  autoComplete="off"
                  id="paletteName"
                  className={classes.Form_input}
                  placeholder="Palette Name"
                  value={this.state.paletteName}
                  onChange={this.handleChange}
                ></input>
                <label htmlFor="paletteName" className={classes.Form_label}>
                  Palette Name
                </label>
              </div>
              <div className={classes.Form_emoji_group}>
                <label htmlFor="emoji" className={classes.Form_emoji_label}>
                  Emoji
                </label>
                <div className={classes.Form_EmojiSelector}>
                  <button
                    className={classes.Form_EmojiBtn}
                    onClick={this.handleShowEmojiPicker}
                  >
                    {this.state.emoji}
                  </button>
                  {this.state.showEmojiPopup && (
                    <EmojiPopup
                      active={this.state.showEmojiPopup}
                      handleEmojiSelect={this.handleEmojiSelect}
                    />
                  )}
                </div>
              </div>
              <p
                className={`${classes.Form_errorMessage} ${
                  this.props.error && classes.Form_errorMessage_show
                }`}
              >{`⚠ ${this.props.errorMessage}`}</p>
            </form>
            <div className={classes.FormPopup_btnSet}>
              <button
                className={`${classes.BtnSet_btn} ${classes.Btn_cancel}`}
                onClick={this.handleCancel}
              >
                Cancel
              </button>
              <button
                className={`${classes.BtnSet_btn} ${classes.Btn_save}`}
                onClick={this.handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
);
