import React from "react";
import PropTypes from "prop-types";

import "./ListItem.css";

const ListItem = ({ name, info }) => (
  <li className="ListItem">
    <span className="ListItem__name">{name}:</span>
    <span className="ListItem__info">{info}</span>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
};

export default ListItem;
