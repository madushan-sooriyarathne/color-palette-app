import React, { Component } from "react";
import withStyles from "react-jss";
import { SketchPicker } from "react-color";
import { CSSTransition } from "react-transition-group";

import styles from "../styles/PaletteFormStyles";
import { getLuminance } from "../helpers/colorHelper";
import YesNoPopup from "../components/YesNoPopup";
import FormPopup from "../components/FormPopup";
import DraggableColorList from "../components/DraggableColorList";

export default withStyles(styles)(
  class PaletteForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sideBarOpen: true,
        closePopupShown: false,
        savePopupShown: false,

        formPopupError: false,
        formPopupErrorMessage: "",

        paletteName: "",
        paletteEmoji: "",
        colors: this.props.palettes[0].colors, // get colors from the material ui colors as a starter

        currentColor: "#311B89",
        currentColorName: "",
        currentColorValidated: true,
        errorMessage: "",
      };

      this.validateForm = this.validateForm.bind(this);

      // Event Handler Binds

      // Color Picker & form event handlers
      this.handleChangeComplete = this.handleChangeComplete.bind(this);
      this.handleFormChange = this.handleFormChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);

      // Side bar open & close event handlers
      this.handleSideBarClose = this.handleSideBarClose.bind(this);
      this.handleSideBarOpen = this.handleSideBarOpen.bind(this);

      // Event handler binds for side bar buttons
      this.handleClearPalette = this.handleClearPalette.bind(this);
      this.handleRandomColor = this.handleRandomColor.bind(this);

      // Event handler binds for nav bar buttons
      this.handleGoBack = this.handleGoBack.bind(this);
      this.handleSave = this.handleSave.bind(this);

      // Binds for go back prompt event handlers
      this.handleYesNoPopupAccept = this.handleYesNoPopupAccept.bind(this);
      this.handleYesNoPopupDecline = this.handleYesNoPopupDecline.bind(this);

      // Binds for palette Name popup window event handlers
      this.handleFormPopupSave = this.handleFormPopupSave.bind(this);
      this.handleFormPopupClose = this.handleFormPopupClose.bind(this);

      // Bind for color box container drag and sorting
      this.handleDragSort = this.handleDragSort.bind(this);

      // Bind for DraggableColorBox's delete button
      this.handleColorBoxDelete = this.handleColorBoxDelete.bind(this);
    }

    // Form Validation for color picker form
    // Check whether color hex value or name already exists in palette (user created palette)
    validateForm() {
      // validate the color
      const colorValidated =
        this.state.colors.filter(
          (color) => color.color === this.state.currentColor
        ).length === 0;
      if (colorValidated) {
        const colorNameValidated =
          this.state.colors.filter(
            (color) =>
              color.name.toLowerCase() ===
              this.state.currentColorName.toLowerCase()
          ).length === 0;

        if (colorNameValidated) {
          return true;
        } else {
          return "A color with same name already exists!";
        }
      } else {
        return "A color with same HEX value already exists!";
      }
    }

    // Event handler for React-color-picker component
    // Triggers when a color is picker / selected
    handleChangeComplete(color) {
      this.setState({ currentColor: color.hex });
    }

    // Event handler for color name input field
    // trigger on eny update in the specific input field
    // This keeps state sync with the current value in input field
    handleFormChange(event) {
      this.setState({ currentColorName: event.target.value });
    }

    // Event handler for add color button
    // Run the validations and if all passed add the color to the state.
    // this button will be disable if palette already has 20 colors
    handleFormSubmit(event) {
      event.preventDefault();

      const result = this.validateForm();
      // if form got validated above result variable will be true
      // if not, it will be an error message

      if (result === true) {
        this.setState((st) => {
          const updatedColorList = [...st.colors];
          updatedColorList.push({
            color: this.state.currentColor,
            name: this.state.currentColorName,
          });
          return { colors: updatedColorList, currentColorName: "" };
        });
      } else {
        this.setState({
          currentColorValidated: false,
          errorMessage: result,
        });
      }

      //Validation here: TODO
    }

    // event handler for sidebar open button
    handleSideBarOpen(event) {
      this.setState({ sideBarOpen: true });
    }

    // event handler for sidebar close button
    handleSideBarClose(event) {
      this.setState({ sideBarOpen: false });
    }

    // Event handler for random color button
    // pick a random color from existing palettes and add it to the current palette
    handleRandomColor(event) {
      // get Random Color Function
      const palettes = this.props.palettes;
      let bool = true;
      let colorChosen;

      while (bool) {
        const selectedPalette =
          palettes[Math.floor(Math.random() * palettes.length)];
        const selectedColor =
          selectedPalette.colors[
            Math.floor(Math.random() * selectedPalette.colors.length)
          ];
        const filteredColor = this.state.colors.filter(
          (color) =>
            color.color === selectedColor.color ||
            color.name === selectedColor.color
        );

        if (!filteredColor.length >= 1) {
          colorChosen = selectedColor;
          bool = false;
        } else {
          console.log("duplicate Color");
        }
      }

      if (this.state.colors.length + 1 <= 20) {
        this.setState((st) => {
          let colors = st.colors;
          colors.push(colorChosen);
          return { colors: colors };
        });
      }
    }

    // Clear all the colors in the current palette
    handleClearPalette(event) {
      this.setState({ colors: [] });
    }

    // event handler for go back button in nav bar
    // if palette is empty go directly to previous page
    // Otherwise show the prompt to confirm
    handleGoBack(event) {
      if (this.state.colors.length < 1) {
        this.props.history.push("/");
      } else {
        this.setState({ closePopupShown: true });
      }
    }

    // Event handler for save palette btn in nav bar
    // If palette is empty the button will be disabled
    // this function will prompt the save dialog
    handleSave() {
      // Show save dialog
      this.setState({
        savePopupShown: true,
        formPopupError: false,
        formPopupErrorMessage: "",
      });
    }

    // Event handlers for confirmation dialog of go back button

    // Event handler for yes button
    // this will push home route to history object which will trigger immediate redirect to home
    handleYesNoPopupAccept(event) {
      // Navigate back to previous page
      this.props.history.goBack();
    }

    // Event handler for cancel button
    // Confirmation dialog will go away and user can keep edit the palette
    handleYesNoPopupDecline(event) {
      this.setState({ closePopupShown: false });
    }

    // Event handlers for save dialog buttons

    // Event handler from save button
    // This will prompt the emoji picker model
    async handleFormPopupSave(palette) {
      if (palette.paletteName) {
        const paletteId = palette.paletteName.replace(/ /g, "-").toLowerCase();
        const { palettes, addPalette, history } = this.props;
        if (
          palettes.filter((palette) => palette.id === paletteId).length === 0
        ) {
          //Clear Error Fields, close the form popup & popup the emoji picker popup
          await this.setState({
            formPopupError: false,
            formPopupErrorMessage: "",
            savePopupShown: false,
          });

          let newPalette = {
            paletteName: palette.paletteName,
            id: paletteId,
            emoji: palette.emoji,
            removable: true,
            colors: this.state.colors,
          };
          addPalette(newPalette);
          //go back to home
          history.push("/");
        } else {
          this.setState({
            formPopupError: true,
            formPopupErrorMessage: "A palette with same name already exists!",
          });
        }
      } else {
        this.setState({
          formPopupError: true,
          formPopupErrorMessage: "The Palette Name field cannot be empty",
        });
      }
    }

    // Event handler for close button
    // Closes the dialog and clear the fields
    handleFormPopupClose() {
      this.setState({ savePopupShown: false });
    }

    // Event handler for delete button for individual DraggableColorBox
    // To be passed to child component
    // Delete the selected color box from the state
    handleColorBoxDelete(name) {
      this.setState((st) => {
        const updatedColors = st.colors.filter((color) => color.name !== name);
        return { colors: updatedColors };
      });
    }

    // Event handler to sort item on drag and drop
    // To be passed to DraggableColorList component
    handleDragSort({ oldIndex, newIndex }) {
      this.setState((st) => {
        const { colors } = st;

        const startIndex = newIndex < 0 ? colors.length + newIndex : newIndex;
        const item = colors.splice(oldIndex, 1)[0];

        colors.splice(startIndex, 0, item);

        return { colors: colors };
      });
    }

    render() {
      const { classes } = this.props;

      // Color Styles for the form submit btn
      const btnStyle = {
        cursor: this.state.colors.length === 20 ? "not-allowed" : "pointer",
        backgroundColor:
          this.state.colors.length === 20 ? "gray" : this.state.currentColor,
        color:
          getLuminance(this.state.currentColor) >= 0.6
            ? "rgba(0,0,0,0.8)"
            : "white",
      };

      const saveBtnStyles = {
        cursor: this.state.colors.length < 1 ? "not-allowed" : "pointer",
      };
      const sideBarOpenBtnStyle = {
        visibility: this.state.sideBarOpen ? "hidden" : "visible",
      };
      const sideBarCloseBtnStyle = {
        visibility: this.state.sideBarOpen ? "visible" : "hidden",
      };

      return (
        <div className={classes.PaletteForm}>
          <aside
            className={`${classes.PaletteForm_sideBar} ${
              !this.state.sideBarOpen && classes.PaletteForm_sideBar_hide
            }`}
          >
            <button
              onClick={this.handleSideBarClose}
              style={sideBarCloseBtnStyle}
              className={`${classes.SideBar_Btn} ${classes.closeBtn}`}
            >
              &#10005;
            </button>
            <h1 className={classes.SideBar_title}>Create Your Palette</h1>
            <div className={classes.SideBar_btnContainer}>
              <button
                className={`${classes.Btn} ${classes.btn_red}`}
                onClick={this.handleClearPalette}
              >
                Clear Palette
              </button>
              <button
                className={`${classes.Btn} ${classes.btn_green}`}
                onClick={this.handleRandomColor}
              >
                Random Color
              </button>
            </div>
            <form
              className={classes.SideBar_form}
              onSubmit={this.handleFormSubmit}
            >
              <SketchPicker
                width="30rem"
                color={this.state.currentColor}
                onChangeComplete={this.handleChangeComplete}
              />
              <div className={classes.Form_inputGroup}>
                <input
                  type="text"
                  className={classes.Form_input}
                  placeholder="Color Name"
                  value={this.state.currentColorName}
                  onChange={this.handleFormChange}
                  required
                ></input>
                <label htmlFor="colorName" className={classes.Form_label}>
                  Color Name
                </label>
              </div>
              <p
                className={`${classes.Form_errorMessage} ${
                  !this.state.currentColorValidated &&
                  classes.Form_errorMessage_show
                }`}
              >
                {`⚠ ${this.state.errorMessage}`}
              </p>
              <button
                style={btnStyle}
                type="submit"
                className={classes.Form_submitBtn}
                disabled={this.state.colors.length === 20}
              >
                {this.state.colors.length === 20 ? "Palette Full" : "Add Color"}
              </button>
            </form>
          </aside>
          <div
            className={`${classes.PaletteForm_contentArea} ${
              !this.state.sideBarOpen && classes.PaletteForm_contentArea_shift
            }`}
          >
            <nav className={classes.navBar}>
              <button
                onClick={this.handleSideBarOpen}
                style={sideBarOpenBtnStyle}
                className={`${classes.SideBar_Btn} ${classes.openBtn}`}
              >
                &#8594;
              </button>
              <button
                className={`${classes.Btn} ${classes.btn_red}`}
                onClick={this.handleGoBack}
              >
                Go Back
              </button>
              <button
                className={`${classes.Btn} ${classes.btn_green}`}
                onClick={this.handleSave}
                disabled={this.state.colors.length < 1}
                style={saveBtnStyles}
              >
                Save Palette
              </button>
            </nav>
            <DraggableColorList
              colors={this.state.colors}
              axis="xy"
              onSortEnd={this.handleDragSort}
              distance={10}
              handleDelete={this.handleColorBoxDelete}
            />
          </div>

          {/* Popup models / windows */}
          <CSSTransition
            in={this.state.closePopupShown}
            classNames="fade"
            timeout={500}
            unmountOnExit
          >
            <YesNoPopup
              active={this.state.closePopupShown}
              handleAccept={this.handleYesNoPopupAccept}
              handleDecline={this.handleYesNoPopupDecline}
              message={`Do you really want to discard the palette you made?`}
            />
          </CSSTransition>

          <CSSTransition
            in={this.state.savePopupShown}
            classNames="fade"
            timeout={500}
            unmountOnExit
          >
            <FormPopup
              active={this.state.savePopupShown}
              error={this.state.formPopupError}
              errorMessage={this.state.formPopupErrorMessage}
              handleChange={this.handlePaletteNameChange}
              handleSave={this.handleFormPopupSave}
              handleCancel={this.handleFormPopupClose}
            />
          </CSSTransition>
        </div>
      );
    }
  }
);
