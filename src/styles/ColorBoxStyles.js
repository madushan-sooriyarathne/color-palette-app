import { getLuminance } from "../helpers/colorHelper";
import { responsive } from "../helpers/styleHelper";

export const styles = {
  ColorBox: {
    width: "20%",
    height: (props) => (props.singleColorMode ? "50%" : "25%"),
    position: "relative",
    display: "inline-block",
    marginBottom: "-5px",
    "&:hover $ColorBox_copy_btn": {
      opacity: 1,
    },

    // Responsive Styles
    [responsive("62.5em")]: {
      width: (props) => (props.singleColorMode ? "20%" : "25%"),
      height: (props) => (props.singleColorMode ? "50%" : "20%"),
      marginBottom: "-4px",
    },

    [responsive("50em")]: {
      width: "50% !important",
      height: (props) => (props.singleColorMode ? "20%" : "10%"),
    },

    [responsive("18.75em")]: {
      width: "100% !important",
      height: (props) => (props.singleColorMode ? "10%" : "5%"),
      marginBottom: "-3px",
    },
  },
  ColorBox_details: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",

    "& a": {
      fontSize: "1.5rem",
      fontWeight: 500,
      fontFamily: "inherit",
      textDecoration: "none",
      textTransform: "uppercase",
      letterSpacing: "0.3rem",
      color: (props) =>
        getLuminance(props.color) >= 0.75 ? "rgba(0,0,0,0.5)" : "white",
      outline: "none",
      border: "none",
      backgroundColor: (props) =>
        getLuminance(props.color) >= 0.75
          ? "rgba(0,0,0, 0.2)"
          : "rgba(236, 240, 241, 0.15)",
      padding: "0 0.5rem",

      cursor: "pointer",
    },
  },

  ColorBox_name: {
    marginLeft: "1rem",
    fontSize: "1.3rem",
    fontWeight: 500,
    fontFamily: "inherit",
    textTransform: "uppercase",
    letterSpacing: "0.2rem",
    color: (props) =>
      getLuminance(props.color) >= 0.75 ? "rgba(0,0,0,0.6)" : "white",
  },

  ColorBox_copy_btn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "2rem",
    fontWeight: "500",
    textTransform: "uppercase",
    padding: "1rem 2rem",
    border: (props) =>
      getLuminance(props.color) >= 0.75
        ? "2px solid rgba(0,0,0,0.4)"
        : "2px solid rgba(255, 255, 255, 0.5)",
    backgroundColor: "transparent",
    color: (props) =>
      getLuminance(props.color) >= 0.75
        ? "rgba(0,0,0,0.5)"
        : "rgba(255, 255, 255, 0.8)",
    opacity: 0,
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease-in-out",

    [responsive("50em")]: {
      fontSize: "1.4rem",
      padding: "0.5rem 1rem",
    },
  },

  CopyAnimation_overlay: {
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",

    visibility: "hidden",

    zIndex: 0,
    transition: "transform 0.6s ease-in-out",
  },

  CopyAnimation_overlay_show: {
    position: "absolute",
    zIndex: 10,
    transform: "scale(50)",
    visibility: "visible",
  },
  CopyAnimation_details: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    visibility: "hidden",
    zIndex: -1,
    textAlign: "center",
    color: (props) =>
      getLuminance(props.color) >= 0.75 ? "rgba(0,0,0,0.6)" : "white",
    transform: "scale(0.001)",

    "& h1": {
      fontSize: "10rem",
      textTransform: "uppercase",
      padding: "3rem",
      backgroundColor: (props) =>
        getLuminance(props.color) >= 0.75
          ? "rgba(0,0,0, 0.2)"
          : "rgba(255, 255, 255, 0.3)",
      width: "100%",

      // Responsive Styles
      [responsive("18.75em")]: {
        fontSize: "8rem",
      },
    },

    "& p": {
      fontSize: "4rem",
      padding: "2rem 0",
    },
  },

  CopyAnimation_details_show: {
    visibility: "visible",
    zIndex: 20,
    transform: "scale(1)",
    width: "100%",
    transition: "all 0.2s ease-in-out",
    transitionDelay: " 0.3s",
  },
};
