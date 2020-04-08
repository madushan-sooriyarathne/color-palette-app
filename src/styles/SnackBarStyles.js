export default {
  SnackBar: {
    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex: 100,
    backgroundColor: "black",
    borderRadius: " 5px",
    padding: "0 2rem",
    margin: "2rem",
    boxShadow: "0 0 2rem 0 rgba(0, 0, 0, 0.5)",

    display: "flex",
    alignItems: "center",

    visibility: "hidden",
    transform: "scale(0.1) translateY(10rem)",

    "& > p": {
      fontSize: "1.4rem",
      fontWeight: 600,
      textTransform: "uppercase",
      color: "white",
      padding: "1.5rem 0",
      marginRight: "2rem",
    },
    "& > button": {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "gray",
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      cursor: "pointer",
      lineHeight: 1,
      width: "2.5rem",
      height: "2.5rem",

      borderRadius: "50%",
      transition: "all 0.2s ease-in-out",

      "&:hover": {
        transform: "scale(1.2)",
        color: "white",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    },
  },

  SnackBar_show: {
    visibility: "visible",
    transform: "scale(1) translateY(0)",
    transition: "all 0.3s ease-in-out",
  },
};
