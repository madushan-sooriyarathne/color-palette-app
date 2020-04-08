const sideBarWidth = 35;

export default {
  PaletteForm: {
    display: "flex",
    position: "relative",
    width: "100vw",
    height: "100vh",
  },
  PaletteForm_sideBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: `${sideBarWidth}rem`,
    height: "100vh",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem 1rem",
    transition: "all .2s ease-in-out",
  },
  PaletteForm_sideBar_hide: {
    left: `-${sideBarWidth}rem`,
    visibility: "hidden",
    transition: "left 0.2s ease-out, visibility 0.1s ease-in .5s",
  },

  SideBar_Btn: {
    position: "absolute",

    backgroundColor: "transparent",
    border: "none",
    color: "black",
    fontSize: "3rem",
    fontWeight: 700,
    width: "4rem",
    height: "4rem",
    cursor: "pointer",
    outline: "none",
    transition: "transform 0.2s ease-in-out",

    "&:active": {
      transform: "scale(0.9)",
      color: "gray",
    },
  },
  closeBtn: {
    top: 0,
    right: 0,

    marginTop: "2rem",
    marginRight: "1rem",
  },
  openBtn: {
    top: 0,
    left: 0,

    marginTop: "2rem",
    marginLeft: "1rem",
  },
  SideBar_title: {
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: "3rem",
  },
  SideBar_btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
  },
  SideBar_form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > *:not(:last-child)": {
      marginBottom: "2rem",
    },
  },
  Form_inputGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    alignSelf: "stretch",
  },
  Form_input: {
    appearance: "none",
    fontSize: "1.4rem",
    fontWeight: 500,
    padding: "0.5rem 1rem",
    outline: "none",
    border: "2px solid transparent",
    borderRadius: 5,
    transition: "all 0.2s ease-in-out",
    boxShadow: "0 0 5px 0 rgba(0,0,0,0.5)",

    "&:focus": {
      boxShadow: "0 0 3px 0 rgba(0,0,0,0.5);",
      border: "2px solid green",
    },
    "&:placeholder-shown + $Form_label": {
      visibility: "hidden",
      transform: "translateY(-3rem)",
      zIndex: -1,
    },
  },

  Form_label: {
    fontSize: "1.2rem",
    fontWeight: 500,
    padding: "0.5rem 1rem",
    visibility: "visible",
    transform: "translateY(0)",
    zIndex: 0,
    transition: "all 0.1s ease-in-out",
  },

  Form_errorMessage: {
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "red",
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-start",
    visibility: "hidden",
    opacity: 0,
    transition: "all .2s ease-in-out",
  },
  Form_errorMessage_show: {
    visibility: "visible",
    opacity: 1,
  },

  Form_submitBtn: {
    width: "100%",
    fontSize: "1.6rem",
    fontWeight: 700,
    textTransform: "uppercase",
    padding: "1rem 2rem",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    boxShadow: "0 0 10px 2px rgba(0,0,0,0.5)",
    transition: "all .2s ease-in-out",
    outline: "none",

    "&:active": {
      transform: "translateY(1px)",
      boxShadow: "0 0 5px 1 rgba(0,0,0,0.5)",
    },
  },
  Form_submitBtn_disabled: {
    cursor: "not-allowed !important",
  },

  PaletteForm_contentArea: {
    width: "100vw",
    marginLeft: `${sideBarWidth}rem`,
    transition: "all .2s ease-in-out",
  },
  navBar: {
    height: "8%",
    padding: "0.5rem 2rem",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  Btn: {
    fontSize: "1.4rem",
    fontWeight: 700,
    padding: "1rem 2rem",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
    backgroundColor: "transparent",

    transition: "all .2s ease-in-out",
  },
  btn_red: {
    border: "2px solid #DC411A",
    color: "#DC411A",
    marginRight: "1rem",
    "&:hover": {
      color: "white",
      backgroundColor: "#DC411A",
    },
  },
  btn_green: {
    border: "2px solid #3B7B16",
    color: "#3B7B16",

    "&:hover": {
      color: "white",
      backgroundColor: "#3B7B16",
    },
  },

  PaletteForm_contentArea_shift: {
    marginLeft: `0rem`,
    transition: "margin-left 0.2s ease-out",
  },
};
