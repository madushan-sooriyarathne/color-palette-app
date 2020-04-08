import React, { Component } from "react";
import withStyles from "react-jss";

import SnackBar from "../components/SnackBar";
import ColorBox from "../components/ColorBox";

import SingleColorPaletteStyles from "../styles/SingleColorPaletteStyles";

export default withStyles(SingleColorPaletteStyles)(
  class SingleColorPalette extends Component {
    constructor(props) {
      super(props);
      this.state = {
        snackBarActive: false,
        menuOpened: false,
        options: [
          { id: "rgb", name: "RGB (1, 2, 3)", selected: false },
          { id: "hex", name: "HEX (#1122FF)", selected: true },
          { id: "rgba", name: "RGBA (1, 2, 3, 0.5)", selected: false },
        ], // To track selected copy option
      };

      // Method binding for event handlers
      this.handleSnackBarClose = this.handleSnackBarClose.bind(this);

      this.handleMenuClick = this.handleMenuClick.bind(this);
      this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
      this.handleBackClick = this.handleBackClick.bind(this);
    }

    // Event handler for snack bar's close event
    handleSnackBarClose() {
      if (this.state.snackBarActive) {
        this.setState({ snackBarActive: false });
      }
    }

    // Event handler for menu button
    // Update the state to open option menu
    handleMenuClick(event) {
      this.setState((st) => {
        return { menuOpened: !st.menuOpened };
      });
    }

    // Event handler for menu items select event
    // Set the selected items in State
    // On a successful trigger, this will update state to close options menu & open notification snack bar
    // Also it will set a timeout for 3 seconds and again update the state to close notification snack bar
    handleMenuItemClick(event) {
      const el = event.target.closest(".option");
      if (el) {
        this.setState(
          (st) => {
            const updatedOptionList = st.options.map((option) => {
              if (option.id === el.dataset.id) {
                return { ...option, selected: true };
              }
              return { ...option, selected: false };
            });
            return {
              options: updatedOptionList,
              menuOpened: false,
              snackBarActive: true,
            };
          },
          () => {
            setTimeout(() => {
              this.setState({ snackBarActive: false });
            }, 3000);
          }
        );
      }
    }

    // Event handler for back button
    handleBackClick(event) {
      this.props.history.goBack();
    }

    render() {
      const { classes, shades, match } = this.props;
      return (
        <div className={classes.SingleColorPalette}>
          <div className={classes.SingleColorPalette_header}>
            <button
              className={classes.SingleColorPalette_back_btn}
              onClick={this.handleBackClick}
            >
              <span>&#8592;</span> Back
            </button>
            <div className={classes.SingleColorPalette_header_dropdown}>
              <div
                className={classes.dropdown_btn}
                onClick={this.handleMenuClick}
              >
                {`Copy format: ${
                  this.state.options.filter((item) => item.selected)[0].name
                } ${this.state.menuOpened ? "▲" : "▼"}`}
              </div>
              <div
                className={`${classes.dropdown_menu} ${
                  this.state.menuOpened && classes.dropdown_menu_show
                }`}
              >
                {this.state.options.map((option) => (
                  //Added the hard coded className "option" in order to gram the element when user click on it
                  <p
                    className={`${classes.dropdown_menu_option} option`}
                    data-id={option.id}
                    onClick={this.handleMenuItemClick}
                    key={option.id}
                  >
                    {option.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.SingleColorPalette_colors}>
            {shades.map((shade) => (
              <ColorBox
                singleColorMode={true}
                color={
                  shade[
                    this.state.options.filter((option) => option.selected)[0].id
                  ]
                }
                name={shade.name}
                key={shade.name}
              />
            ))}
          </div>
          <div className={classes.SingleColorPalette_footer}>
            <p>{match.params.name}</p>
          </div>
          <SnackBar
            onClose={this.handleSnackBarClose}
            active={this.state.snackBarActive}
            message={`Color Mode Changed to ${
              this.state.options.filter((option) => option.selected)[0].id
            }`}
          />
        </div>
      );
    }
  }
);
