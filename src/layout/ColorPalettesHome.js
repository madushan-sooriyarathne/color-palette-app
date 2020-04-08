import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import ColorPalette from "./ColorPalette";
import Home from "./Home";
import SingleColorPalette from "./SingleColorPalette";
import PaletteForm from "./PaletteForm";

import SeedPalettes from "../data/SeedPalettes";

import { generatePalettes, getColorShades } from "../helpers/colorHelper";
import { getData, setData } from "../helpers/storage";

export default class ColorPalettesHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: getData("palettes") || SeedPalettes, // if there is any data in LocalStorage get that data, if not read data from js file
    };

    // Method bindings for event handlers
    this.addPalette = this.addPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  // Event handler for save new palette event in "PaletteForm"
  // To be passed to "PaletteForm" child component
  addPalette(palette) {
    this.setState(
      (st) => {
        let newPaletteList = [...st.palettes, palette];
        return { palettes: newPaletteList };
      },
      () => {
        setData("palettes", this.state.palettes);
      }
    );
  }

  // Event handler to delete palette event in "Home"
  // To be passed to "Home" Child Component
  deletePalette(id) {
    // Update the state and persist current Palette List from state to local storage once
    // setState() finished
    this.setState(
      (st) => {
        const updatedPaletteList = st.palettes.filter(
          (palette) => palette.id !== id
        );
        return { palettes: updatedPaletteList };
      },
      () => setData("palettes", this.state.palettes)
    );
  }

  // Helper function to get different shades of given color
  getShades = (paletteId, colorName) => {
    const palette = this.state.palettes.filter(
      (palette) => palette.id === paletteId
    )[0];
    const color = palette.colors.filter(
      (color) => colorName.replace(" ", "") === color.name.toLowerCase()
    )[0];
    return getColorShades(color.color, color.name);
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/create"
          render={(renderProps) => (
            <PaletteForm
              {...renderProps}
              palettes={this.state.palettes}
              addPalette={this.addPalette}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <Home
              {...routeProps}
              colorPalettes={this.state.palettes}
              handleDelete={this.deletePalette}
            />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(renderProps) => (
            <ColorPalette
              {...renderProps}
              palette={generatePalettes(
                this.state.palettes.filter(
                  (palette) => palette.id === renderProps.match.params.id
                )[0]
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:id/color/:name"
          render={(renderProps) => (
            <SingleColorPalette
              {...renderProps}
              shades={this.getShades(
                renderProps.match.params.id,
                renderProps.match.params.name
              )}
            />
          )}
        />
      </Switch>
    );
  }
}
