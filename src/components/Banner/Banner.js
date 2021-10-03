import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner row input-state text-center">
        <div className="col-md-7 col-6 "></div>
        <div className="col-md-4 col-6">
          <h2 className="header">BOOK FOR KNOWLEDGE</h2>
          <p className="lead ">Find Your Favorite Books From Here</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control banner-input fs-4"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button className="input-group-text text-muted btn btn-warning px-4 fs-4" id="basic-addon2">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default Banner;
