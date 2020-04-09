export default {
  Popup: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100%",
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 60,
    opacity: 1,
    visibility: "visible",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Popup_window: {
    backgroundColor: "white",
    borderRadius: "5px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    visibility: "visible",
    opacity: 1,
  },
  Popup_content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem 5rem",
    background:
      "linear-gradient(155deg, rgba(255,226,0,1) 0%, rgba(255,226,0,1) 50%, rgba(255,167,0,1) 50%, rgba(255,167,0,1) 100%)",
  },
  Popup_warning: {
    width: "8rem",
    height: "8rem",
  },
  Popup_warning_title: {
    fontSize: "4rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  Popup_message: {
    fontSize: "1.6rem",
    fontWeight: 500,
  },
  Popup_btns: {
    margin: "3rem 5rem",
  },
  Popup_btn: {
    fontSize: "1.5rem",
    fontWeight: 300,
    textTransform: "uppercase",
    padding: "0.5rem 2rem",
    minWidth: "10rem",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
    transition: "all .2s ease",
    backgroundColor: "transparent",
  },
  Btn_red: {
    color: "#dc3545",
    border: "2px solid #dc3545",
    marginRight: "5rem",

    "&:hover": {
      color: "#fff",
      backgroundColor: "#dc3545",
    },
  },
  Btn_green: {
    color: "#28a745",
    border: "2px solid #28a745",

    "&:hover": {
      color: "#fff",
      backgroundColor: "#28a745",
    },
  },
};
