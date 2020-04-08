import React, { Component } from "react";
import { Link } from "react-router-dom";
import withStyles from "react-jss";
import { styles } from "../styles/ColorBoxStyles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };

    // Method bindings for event handlers
    this.handleCopy = this.handleCopy.bind(this);
  }

  // Event handler for copy button.
  // copy the color code selected color in selected color mode
  handleCopy(event) {
    // Copy to clipboard functionality
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(this.props.color)
        .then(() => console.log(`Copied to the clipboard ${this.props.color}`))
        .catch((err) => console.error("failed to copy"));
    } else {
      console.error(
        console.log("Copy to clipboard not supported by your browser")
      );
    }

    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div
        onClick={this.handleCopy}
        className={classes.ColorBox}
        style={{ backgroundColor: this.props.color }}
      >
        <div
          className={
            this.state.copied
              ? `${classes.CopyAnimation_overlay} ${classes.CopyAnimation_overlay_show}`
              : classes.CopyAnimation_overlay
          }
          style={{ backgroundColor: this.props.color }}
        ></div>
        <div
          className={`${classes.CopyAnimation_details} ${
            this.state.copied ? classes.CopyAnimation_details_show : ""
          }`}
        >
          <h1>Copied!</h1>
          <p>{this.props.color}</p>
        </div>
        <button className={classes.ColorBox_copy_btn}>Copy</button>
        <div className={classes.ColorBox_details}>
          <p className={classes.ColorBox_name}>{this.props.name}</p>
          {this.props.singleColorMode ? (
            ""
          ) : (
            <Link
              onClick={(event) => event.stopPropagation()}
              to={`/palette/${
                this.props.paletteId
              }/color/${this.props.name.replace(/[0-9]/g, "").toLowerCase()}`}
            >
              More
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ColorBox);
