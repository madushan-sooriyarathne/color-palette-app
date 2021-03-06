import { responsive } from "../helpers/styleHelper";

export default {
  Home: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns:
      "[full-start] minmax(5rem, 1fr) [mid-start] minmax(min-content, 80rem) [mid-end] minmax(5rem,1fr) [full-end ]",
    gridTemplateRows: "repeat(3, [row-start] min-content [row-end])",
    backgroundColor: "purple",

    // Responsive Styles
    [responsive("50em")]: {
      gridTemplateColumns:
        "[full-start] minmax(5rem, 1fr) [mid-start] minmax(min-content, 50rem) [mid-end] minmax(5rem,1fr) [full-end ]",
    },
  },
  Home_header: {
    gridColumn: "mid-start / mid-end",
    gridRow: "row-start 1 / row-end 1",
    height: "10rem",
    padding: "2rem 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  Home_header_logo: {
    "& a": {
      textDecoration: "none",
      textTransform: "uppercase",
      fontSize: "3rem",
      fontWeight: "900",
      letterSpacing: "0.3rem",
      color: "white",

      outline: "none",
      cursor: "pointer",
    },
  },

  Home_header_navlinks: {
    "& a": {
      textDecoration: "none",
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "white",
      borderBottom: "2px solid white",

      outline: "none",
      cursor: "pointer",
    },
  },

  Home_palettes: {
    gridColumn: "mid-start / mid-end",
    gridRow: "row-start 2 / row-end 2",
    display: "grid",
    gridTemplateColumns: "repeat(3, min-content)",
    justifyContent: "space-between",
    gap: "5rem",

    "& > a": {
      textDecoration: "none",
    },

    // Responsive Styles
    [responsive("50em")]: {
      gridTemplateColumns: "repeat(2, min-content)",
    },

    [responsive("31.25em")]: {
      gridTemplateColumns: "min-content",
      justifyContent: "center",
    },
  },

  Home_footer: {
    gridColumn: "mid-start / mid-end",
    gridRow: "row-start 3 / row-end 3",

    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "5rem",
    padding: "5rem 0",

    // Responsive Styles
    [responsive("34.375em")]: {
      gridTemplateColumns: "repeat(2, [start] 1fr [end])",
      gridTemplateRows: "repeat(2, min-content)",
    },
  },

  About: {
    // Responsive Styles
    [responsive("34.375em")]: {
      gridColumn: "start 1 / end 2",
    },
  },

  Home_footer_item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  Item_title: {
    fontSize: "1.6rem",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "white",
    borderBottom: "2px solid white",
    marginBottom: "1.5rem",
  },

  hyperLink_links: {
    display: "flex",
    flexDirection: "column",

    "> *:not(:last-child)": {
      marginBottom: "0.5rem",
    },
  },

  about_paragraph: {
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "white",
  },

  hyperLink_links_link: {
    fontSize: "1.4rem",
    fontWeight: 500,
    textDecoration: "none",
    color: "white",
  },
};
