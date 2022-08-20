/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { propTypes } from "react-bootstrap/esm/Image";
import propTypes from "prop-types";

export default function header(props) {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">TO-DO LIST</a>

            {props.searchBar ? (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            ) : (
              " "
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
header.prototype = {
  searchBar: propTypes.bool,
};
header.defaultProps = {
  searchBar: true,
};
