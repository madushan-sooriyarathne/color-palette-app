import { responsive } from "../helpers/styleHelper";

export default {
  PaletteListItem: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    padding: "1rem",
    position: "relative",
    backgroundColor: "white",
    boxShadow: "0 0 1rem 0 rgba(0,0,0,0.2)",
    borderRadius: "5px",
    overflow: "hidden",

    "&:hover $deleteButton_container": {
      visibility: "visible",
      opacity: 1,
    },
  },
  deleteButton_container: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: "0.5rem",
    width: "3rem",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
    backgroundColor: "rgba(222,68,53,0.8)",

    visibility: "hidden",
    opacity: 0,

    transition: "all 0.2s ease-in",
  },
  deleteButton_container_disabled: {
    cursor: "not-allowed !important",
  },
  deleteButton: {
    width: "1.5rem",
    height: "1.5rem",
    fill: "white",
  },
  PaletteListItem_colorThumb: {
    width: "25rem",
    height: "15rem",
    backgroundColor: "rgba(0,0,0,0.05)",

    borderRadius: "5px",
    overflow: "hidden",

    marginBottom: "1rem",
    "& > *": {
      display: "inline-block",
      width: "20%",
      height: "25%",
      marginBottom: "-5px",
    },

    // Responsive Styles
    [responsive("31.25em")]: {
      width: "40rem",
    },

    [responsive("21.875em")]: {
      width: "30rem",
    },
  },
  PaletteListItem_details: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  PaletteListItem_name: {
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "black",
  },

  PaletteListItem_emoji: {
    fontSize: "1.5rem",
  },
};
