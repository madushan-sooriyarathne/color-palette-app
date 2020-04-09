import { responsive } from "../helpers/styleHelper";

export default {
  ColorPalette: {
    maxWidth: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "grid",
    gridTemplateRows: "minmax(5rem,5vh) 1fr minmax(5rem,5vh)",

    // Responsive Styles
    [responsive("50em")]: {
      gridTemplateRows: "minmax(5rem,min-content) 1fr minmax(5rem,5vh)",
    },
  },

  ColorPalette_header: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignContent: "center",
    justifyContent: "space-between",
    padding: "0 2rem",

    //Responsive Styles
    [responsive("50em")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(3, min-content)",
      gap: "2rem",
      padding: "1rem 0",
    },
  },

  ColorPalette_back_btn: {
    justifySelf: "start",

    // Responsive Styles
    [responsive("50em")]: {
      justifySelf: "center",
    },

    fontSize: "1.5rem",
    fontWeight: "700",
    padding: "1rem 1.5rem",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    transition: "all 0.2s",

    display: "flex",
    alignContent: "center",

    cursor: "pointer",

    "&:active": {
      transform: "scale(0.95)",
    },

    "& span": {
      marginRight: "1rem",
    },
  },

  ColorPalette_header_dropdown: {
    justifySelf: "center",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  dropdown_btn: {
    fontSize: "1.4rem",
    fontWeight: "700",
    letterSpacing: "1px",
    color: "white",
    backgroundColor: "black",
    padding: "0.5rem 2rem",
    borderRadius: "5px",
    textTransform: "uppercase",
    cursor: "pointer",
  },

  dropdown_menu: {
    position: "absolute",
    top: "120%",
    zIndex: 10,
    width: "100%",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0 0 2rem 0 rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    overflow: "hidden",
    color: "black",
    transform: "scale(0)",

    "& > *:not(:last-child)": {
      borderBottom: "0.5px solid rgba(61, 70, 80, 0.5)",
    },
  },

  dropdown_menu_show: {
    display: "flex",
    flexDirection: "column",
    transform: "scale(1)",

    transition: "all 0.2s ease-in-out",
  },

  dropdown_menu_option: {
    fontSize: "1.4rem",
    fontWeight: 700,
    letterSpacing: "1px",
    padding: "1rem 0",
    cursor: "pointer",

    transition: "all 0.2s ease-in-out",

    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },

  ColorPalette_header_slider: {
    justifySelf: "end",
    display: "flex",
    alignItems: "center",
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "black",

    "& input[type='range']": {
      marginLeft: "2rem",
      appearance: "none",
      height: "10px",
      borderRadius: "5px",
      background: "#d3d3d3",
      outline: "none",
      opacity: "0.7",
      transition: "opacity 0.2s",

      "&::-moz-range-thumb": {
        appearance: "none",
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        backgroundColor: "black",
        cursor: "pointer",
      },

      "&::-webkit-slider-thumb": {
        appearance: "none",
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        backgroundColor: "black",
        cursor: "pointer",
      },
    },

    // Responsive Styles
    [responsive("50em")]: {
      justifySelf: "center",
    },
  },

  ColorPalette_colors: {
    backgroundColor: "rgba(0,0,0,0.05)",
  },

  ColorPalette_footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 2rem",
  },

  ColorPalette_name: {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginRight: "2rem",
  },

  ColorPalette_emoji: {
    fontSize: "1.5rem",
  },
};
