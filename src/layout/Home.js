import React, { Component } from "react";
import { Link } from "react-router-dom";
import withStyles from "react-jss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PaletteListItem from "../components/PaletteListItem";
import YesNoPopup from "../components/YesNoPopup";

import homeStyles from "../styles/HomeStyles";

export default withStyles(homeStyles)(
  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        deletePopupShown: false, // To track the delete confirmation popup model / box / window
        selectedPaletteId: "",
      };

      // Method binds for Event handlers
      this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
      this.handleYesNoPopupAccept = this.handleYesNoPopupAccept.bind(this);
      this.handleYesNoPopupDecline = this.handleYesNoPopupDecline.bind(this);
    }

    // Event handler for palette delete button
    // NOTE: This button is not available if the palette is one of the default palettes.
    // & will be automatically available for user made apps
    handleDeleteButtonClick(id) {
      this.setState({ deletePopupShown: true, selectedPaletteId: id });
    }

    // Event handlers handlers for delete confirmation box buttons
    // To be passed to the relevant child component

    // Event handler for the accept button
    handleYesNoPopupAccept(id) {
      // Close the popup box
      this.setState({ deletePopupShown: false });

      // Call the event handler function passed from the parent component to delete the palette entry.
      // This will remove the palette from the UI and from the Local Storage
      this.props.handleDelete(this.state.selectedPaletteId);
    }

    // Event handler for the accept button
    handleYesNoPopupDecline() {
      // Close the popup box
      this.setState({ deletePopupShown: false });
    }

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.Home}>
          <div className={classes.Home_header}>
            <div className={classes.Home_header_logo}>
              <Link to="/">Flat UI Colors</Link>
            </div>
            <div className={classes.Home_header_navlinks}>
              <Link to="/create">Create New Palette</Link>
            </div>
          </div>

          <TransitionGroup className={classes.Home_palettes}>
            {this.props.colorPalettes.map((palette) => (
              <CSSTransition id={palette.id} classNames="fade" timeout={300}>
                <Link to={`/palette/${palette.id}`} key={palette.id}>
                  <PaletteListItem
                    {...palette}
                    handleDelete={this.handleDeleteButtonClick}
                  />
                </Link>
              </CSSTransition>
            ))}
          </TransitionGroup>

          <div className={classes.Home_footer}>
            <div className={`${classes.Home_footer_item} ${classes.About}`}>
              <h2 className={classes.Item_title}>About</h2>
              <p className={classes.about_paragraph}>
                Made with{" "}
                <span role="img" aria-label="emoji">
                  ❤️
                </span>{" "}
                by Madushan using React JS
              </p>
            </div>
            <div className={classes.Home_footer_item}>
              <h2 className={classes.Item_title}>Follow me on</h2>
              <div className={classes.hyperLink_links}>
                <a
                  target="_blank"
                  href="https://www.facebook.com/madushan.sooriyarathne"
                  rel="noopener noreferrer"
                  className={classes.hyperLink_links_link}
                >
                  Facebook
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/Madushan19978"
                  rel="noopener noreferrer"
                  className={classes.hyperLink_links_link}
                >
                  Twitter
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/iam_madushan/"
                  rel="noopener noreferrer"
                  className={classes.hyperLink_links_link}
                >
                  Instagram
                </a>
                <a
                  target="_blank"
                  href="https://github.com/madushan-sooriyarathne"
                  rel="noopener noreferrer"
                  className={classes.hyperLink_links_link}
                >
                  Github
                </a>
              </div>
            </div>
            <div className={classes.Home_footer_item}>
              <h2 className={classes.Item_title}>Share</h2>
              <div className={classes.hyperLink_links}>
                <a
                  target="_blank"
                  href="https://www.facebook.com"
                  rel="noopener noreferrer"
                  className={classes.hyperLink_links_link}
                >
                  Share on facebook
                </a>
                <a
                  target="_blank"
                  href="https://www.twitter.com"
                  rel="noopener noreferrer"
                  className={classes.hyperLink_links_link}
                >
                  Share on twitter
                </a>
              </div>
            </div>
          </div>

          {/* Popup */}

          <CSSTransition
            in={this.state.deletePopupShown}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <YesNoPopup
              active={this.state.deletePopupShown}
              handleAccept={this.handleYesNoPopupAccept}
              handleDecline={this.handleYesNoPopupDecline}
              message={`Do you really want to delete the palette?`}
            />
          </CSSTransition>
        </div>
      );
    }
  }
);
