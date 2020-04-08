import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getScale = (color, noOfColors) => {
  const start = chroma(color).darken(1.5).hex();
  //   const end = chroma("#fff").hex();
  const end = chroma(color).brighten(2).hex();
  return chroma.scale([start, color, end]).colors(noOfColors).reverse();
};

// Return the shades of given color
export const getColorShades = (color, colorName) => {
  let shades = getScale(color, levels.length);
  return shades.map((shade, index) => ({
    name: `${colorName} ${levels[index]}`,
    hex: shade,
    rgb: chroma(shade).css(),
    rgba: `${chroma(shade).css().replace("rgb", "rgba").replace(")", ",1.0)")}`,
  }));
};

// Generate the complete palette with all the shades of given colors
export const generatePalettes = (existingPalette) => {
  // Create new updated palette
  let updatedPalette = {
    ...existingPalette,
    shades: Object.fromEntries(new Map(levels.map((level) => [level, []]))),
  };

  for (let color of existingPalette.colors) {
    let scale = getScale(color.color, levels.length).map((shade, index) => ({
      name: `${color.name} ${levels[index]}`,
      hex: shade,
      rgb: chroma(shade).css(),
      rgba: `${chroma(shade)
        .css()
        .replace("rgb", "rgba")
        .replace(")", ",1.0)")}`,
    }));
    scale.forEach((shade, index) => {
      updatedPalette.shades[levels[index]].push(shade);
    });
  }
  return updatedPalette;
};

// Return the luminance value of given color
// Used to decide foreground color according to background color
export const getLuminance = (color) => {
  return chroma(color).luminance();
};
