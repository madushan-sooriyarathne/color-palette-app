export default {
  FormPopup: {
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
  FormPopup_window: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "5rem 4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    visibility: "visible",
    opacity: 1,

    "& > *:not(:last-child)": {
      marginBottom: "2rem",
    },
  },
  FormPopup_content: {},
  FormPopup_title: {
    fontSize: "3rem",
    fontWeight: 500,
  },
  FormPopup_message: { fontSize: "1.5rem", fontWeight: 400 },
  FormPopup_form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    alignSelf: "stretch",
  },
  Form_input_group: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  Form_input: {
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
    fontSize: "1.1rem",
    fontWeight: 500,
    color: "gray",
    padding: "0.5rem 1rem",
    visibility: "visible",
    transform: "translateY(0)",
    zIndex: 0,
    transition: "all 0.1s ease-in-out",
  },
  Form_emoji_group: {
    display: "flex",
    alignItems: "center",
  },
  Form_errorMessage: {
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "red",
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-start",
    visibility: "hidden",
    opacity: 0,
    transition: "all .2s ease-in-out",
  },
  Form_emoji_label: {
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "gray",
    marginRight: "2rem",
  },
  Form_EmojiSelector: {
    position: "relative",
  },
  Form_EmojiBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    width: "3rem",
    height: "3rem",
    outline: "none",
    backgroundColor: "transparent",
    borderRadius: "3px",

    border: "none",
    boxShadow: "0 0 5px 0 rgba(0,0,0,0.5)",
    cursor: "pointer",

    transition: "background-color 0.2s ease-in-out",

    "&:hover": {
      backgroundColor: "gray",
    },
  },
  Form_errorMessage_show: {
    visibility: "visible",
    opacity: 1,
  },

  FormPopup_btnSet: {
    alignSelf: "flex-end",
  },

  BtnSet_btn: {
    fontSize: "1.5rem",
    fontWeight: 300,
    textTransform: "uppercase",
    padding: "0.5rem 2rem",
    minWidth: "12rem",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
    transition: "all .2s ease",
    backgroundColor: "transparent",
  },
  Btn_cancel: {
    color: "#dc3545",
    border: "2px solid #dc3545",
    marginRight: "2rem",

    "&:hover": {
      color: "#fff",
      backgroundColor: "#dc3545",
    },
  },
  Btn_save: {
    color: "#28a745",
    border: "2px solid #28a745",

    "&:hover": {
      color: "#fff",
      backgroundColor: "#28a745",
    },
  },
};
