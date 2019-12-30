import React from "react";
import PropTypes from "prop-types";

import "./List.css";

const List = ({ children }) => <ul className="List">{children}</ul>;

List.propTypes = {
  children: PropTypes.node.isRequired
};

export default List;
