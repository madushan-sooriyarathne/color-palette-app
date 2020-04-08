export default {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 0.3s ease-in-out",
    },
    ".fade-enter": {
      opacity: 0,
    },
    ".fade-enter-active": {
      opacity: 1,
      transition: "opacity 0.3s ease-in-out",
    },
  },
  Home: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns:
      "[full-start] minmax(5rem, 1fr) [mid-start] minmax(min-content, 80rem) [mid-end] minmax(5rem,1fr) [full-end ]",
    gridTemplateRows: "repeat(3, [row-start] min-content [row-end])",
    backgroundColor: "purple",
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
  },

  Home_footer: {
    gridColumn: "mid-start / mid-end",
    gridRow: "row-start 3 / row-end 3",

    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "5rem",
    padding: "5rem 0",
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
