export default {
  "@global": {
    "zoom-enter": {
      transform: "scale(0)",
    },
    "zoom-enter-active": {
      transform: "scale(1)",
      transition: "all 0.3s 0.2s ease-in-out",
    },
    "zoom-exit": {
      transform: "scale(1)",
    },
    "zoom-exit-active": {
      transform: "scale(0)",
      transition: "all 0.3s ease-in-out",
    },

    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 0.3s 0.2s ease-in-out",
    },
    ".fade-enter": {
      opacity: 0,
    },
    ".fade-enter-active": {
      opacity: 1,
      transition: "opacity 0.3s ease-in-out",
    },
  },
  App: {
    minHeight: "100vh",
  },
  "@media only screen and (max-width: 37.5em)": {
    App: {
      background: "white",
    },
  },
};
