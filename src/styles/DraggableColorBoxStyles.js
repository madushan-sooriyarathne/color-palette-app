import { getLuminance } from "../helpers/colorHelper";

export default {
  DraggableColorBox: {
    width: "20%",
    height: "25%",
    backgroundColor: (props) => props.color,
    display: "inline-block",
    position: "relative",
    marginBottom: "-5px",
    zIndex: 50,

    "&:hover $Content_deleteBtn": {
      fill: (props) =>
        getLuminance(props.color) >= 0.7 ? "rgba(0,0,0,0.8)" : "white",
    },
  },
  DraggableColorBox_content: {
    display: "flex",
    alignItems: "flex-end",
    padding: "0.5rem",
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
  },
  Content_name: {
    fontSize: "1.3rem",
    fontWeight: 500,
    letterSpacing: "0.2rem",
    textTransform: "uppercase",
    lineHeight: 1,
    color: (props) =>
      getLuminance(props.color) >= 0.7 ? "rgba(0,0,0,0.5)" : "white",
  },
  Content_deleteBtn: {
    width: "1.5rem",
    height: "1.5rem",
    fill: "rgba(0,0,0,0.5)",
    transition: "all 0.2s ease",
    cursor: "pointer",
    transformOrigin: "100% 100%",

    "&:hover": {
      transform: "scale(1.3)",
    },
  },
};
