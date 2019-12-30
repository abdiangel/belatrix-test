import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const Card = ({ heading, children }) => {
  return (
    <div className="Card">
      <h2 className="Card__heading">{heading}</h2>
      <div className="Card__content">{children}</div>
    </div>
  );
};

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Card;
