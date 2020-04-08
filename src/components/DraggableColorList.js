import React, { Component } from "react";
import withStyles from "react-jss";
import { SortableContainer } from "react-sortable-hoc";

import DraggableColorBox from "./DraggableColorBox";

import styles from "../styles/DraggableColorListStyles";

export default SortableContainer(
  withStyles(styles)(
    class DraggableColorList extends Component {
      render() {
        const { classes, colors, handleDelete } = this.props;
        return (
          <div className={classes.DraggableColorList}>
            {colors.map((color, index) => (
              <DraggableColorBox
                index={index}
                color={color.color}
                name={color.name}
                key={color.name}
                onDelete={handleDelete}
              />
            ))}
          </div>
        );
      }
    }
  )
);
