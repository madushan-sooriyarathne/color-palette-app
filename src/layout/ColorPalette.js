import React, { Component } from "react";
import withStyles from "react-jss";

import ColorBox from "../components/ColorBox";
import SnackBar from "../components/SnackBar";

import styles from "../styles/ColorPaletteStyles";

export default withStyles(styles)(
  class ColorPalette extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sliderVal: 500, // Default value is 500
        menuOpened: false,
        snackBarActive: false,
        options: [
          { id: "rgb", name: "RGB (1, 2, 3)", selected: false },
          { id: "hex", name: "HEX (#1122FF)", selected: true },
          { id: "rgba", name: "RGBA (1, 2, 3, 0.5)", selected: false },
        ],
      };

      // Method binds for event handlers
      this.handlerBackBtnClick = this.handlerBackBtnClick.bind(this);
      this.handlerSliderChange = this.handlerSliderChange.bind(this);
      this.handleMenuClick = this.handleMenuClick.bind(this);
      this.handleOptionClick = this.handleOptionClick.bind(this);
      this.handleMenuClose = this.handleMenuClose.bind(this);

      // Snack bar events
      this.handleSnackBarClose = this.handleSnackBarClose.bind(this);
    }

    // Event handler for back button click
    handlerBackBtnClick(event) {
      this.props.history.goBack();
    }

    // Event handler for the slider
    // Calls every time slier moves and update the state with current value
    handlerSliderChange(event) {
      this.setState({ sliderVal: event.target.value });
    }

    // Event handler for onClick event of menu button
    // Change the state to open the menu
    handleMenuClick(event) {
      this.setState((st) => {
        let opened = !st.menuOpened;
        return { menuOpened: opened };
      });
    }

    // Event handler for menu option click
    // update the current selected option in the state.
    // also update the state to close menu and show notification snack bar for 3 sec
    handleOptionClick(event) {
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

    // Close the menu if user click somewhere else
    handleMenuClose(event) {
      if (this.state.menuOpened) {
        this.setState({ menuOpened: false });
      }
    }

    // Event handler for the close button in snack bar.
    // to be passed to child component "SnackBar"
    handleSnackBarClose() {
      if (this.state.snackBarActive) {
        this.setState({ snackBarActive: false });
      }
    }

    render() {
      const { classes, palette } = this.props;
      return (
        <div className={classes.ColorPalette} onClick={this.handleMenuClose}>
          <div className={classes.ColorPalette_header}>
            <button
              className={classes.ColorPalette_back_btn}
              onClick={this.handlerBackBtnClick}
            >
              <span>&#8592;</span> Back
            </button>
            <div className={classes.ColorPalette_header_dropdown}>
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
                    onClick={this.handleOptionClick}
                    key={option.id}
                  >
                    {option.name}
                  </p>
                ))}
              </div>
            </div>
            <div className={classes.ColorPalette_header_slider}>
              <label htmlFor="slider">{`Level (${this.state.sliderVal})`}</label>
              <input
                type="range"
                min="100"
                max="900"
                step="100"
                value={this.state.sliderVal}
                id="slider"
                onChange={this.handlerSliderChange}
              ></input>
            </div>
          </div>
          <div className={classes.ColorPalette_colors}>
            {palette.shades[this.state.sliderVal].map((color) => {
              return (
                <ColorBox
                  singleColorMode={false}
                  color={
                    color[
                      this.state.options.filter((option) => option.selected)[0]
                        .id
                    ]
                  }
                  name={color.name}
                  paletteId={palette.id}
                  key={color.name}
                />
              );
            })}
          </div>
          <div className={classes.ColorPalette_footer}>
            <p className={classes.ColorPalette_name}>{palette.paletteName}</p>
            <p className={classes.ColorPalette_emoji}>{palette.emoji}</p>
          </div>

          <SnackBar
            active={this.state.snackBarActive}
            message={`Color Mode changed to ${
              this.state.options.filter((option) => option.selected)[0].id
            }`}
            onClose={this.handleSnackBarClose}
          />
        </div>
      );
    }
  }
);
