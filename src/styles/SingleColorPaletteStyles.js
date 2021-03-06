import { responsive } from "../helpers/styleHelper";

export default {
  SingleColorPalette: {
    maxWidth: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "minmax(5rem, 5%) 1fr minmax(5rem, 5%)",

    // Responsive Styles
    [responsive("50em")]: {
      gridTemplateRows: "min-content 1fr minmax(5rem, 5%)",
    },
  },

  SingleColorPalette_header: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignContent: "center",
    justifyContent: "space-between",
    padding: "0 2rem",

    [responsive("50em")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(2, min-content)",
      padding: "1rem 0",
    },
  },

  SingleColorPalette_back_btn: {
    justifySelf: "start",

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

    // Responsive Styles
    [responsive("50em")]: {
      justifySelf: "center",
    },
  },
  SingleColorPalette_header_dropdown: {
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

  SingleColorPalette_colors: {},
  SingleColorPalette_footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 2rem",
    "& p": {
      fontSize: "1.5rem",
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
};
