import React, { PureComponent } from "react";
import { SortableElement } from "react-sortable-hoc";
import withStyles from "react-jss";

import styles from "../styles/DraggableColorBoxStyles";

import deleteButton from "../img/sprites.svg";

export default SortableElement(
  withStyles(styles)(
    class DraggableColorBox extends PureComponent {
      constructor(props) {
        super(props);

        // Method bindings for the event handler
        this.handleDelete = this.handleDelete.bind(this);
      }

      //Event handler for delete button
      handleDelete(event) {
        this.props.onDelete(this.props.name);
      }

      render() {
        const { classes, name } = this.props;
        return (
          <div className={classes.DraggableColorBox}>
            <div className={classes.DraggableColorBox_content}>
              <span className={classes.Content_name}>{name}</span>
              <svg
                onClick={this.handleDelete}
                className={classes.Content_deleteBtn}
              >
                <use xlinkHref={`${deleteButton}#icon-bin`}></use>
              </svg>
            </div>
          </div>
        );
      }
    }
  )
);
