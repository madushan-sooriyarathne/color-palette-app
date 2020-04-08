import React, { PureComponent } from "react";
// import { withStyles } from "@material-ui/styles";
import withStyles from "react-jss";

import Styles from "../styles/PaletteListItemStyles";

import deleteButton from "../img/sprites.svg";

export default withStyles(Styles)(
  class PaletteListItem extends PureComponent {
    constructor(props) {
      super(props);

      // Method bindings fro event handlers
      this.handleDelete = this.handleDelete.bind(this);
    }

    // Event handler for delete button
    handleDelete(event) {
      // Stop bubbling events from happening
      event.stopPropagation();
      event.preventDefault();

      // Calls the function passed from the parent with current palette id
      this.props.handleDelete(this.props.id);
    }

    render() {
      const { classes, paletteName, emoji, removable } = this.props;
      return (
        <div className={classes.PaletteListItem}>
          {removable && (
            <div
              className={classes.deleteButton_container}
              onClick={this.handleDelete}
            >
              <svg className={classes.deleteButton}>
                <use xlinkHref={`${deleteButton}#icon-bin`}></use>
              </svg>
            </div>
          )}
          <div className={classes.PaletteListItem_colorThumb}>
            {this.props.colors.map((color) => (
              <div
                key={color.name}
                style={{
                  backgroundColor: color.color,
                }}
              ></div>
            ))}
          </div>
          <div className={classes.PaletteListItem_details}>
            <p className={classes.PaletteListItem_name}>{paletteName}</p>
            <p className={classes.PaletteListItem_emoji}>{emoji}</p>
          </div>
        </div>
      );
    }
  }
);
