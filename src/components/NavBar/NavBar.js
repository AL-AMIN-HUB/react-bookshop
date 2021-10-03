import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserAlt, faFlag } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar className="primary-color" expand="lg">
        <Container>
          <Navbar.Brand to="/home">
            <h2 className="text-custom-color text-uppercase">
              {" "}
              <i className="fas fa-book-reader"></i> BookShop
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <NavLink className="text-light fs-5 text-decoration-none px-3" to="/home">
                Home
              </NavLink>
              <NavLink className="text-custom-color fs-5 text-decoration-none px-3" to="/books">
                Books
              </NavLink>
              <NavLink className="text-custom-color fs-5 text-decoration-none px-3" to="/textbooks">
                TextBooks
              </NavLink>
              <NavLink className="text-light fs-5 text-decoration-none px-3" to="/audiobooks">
                AudioBooks
              </NavLink>
              <NavLink className="text-custom-color fs-5 text-decoration-none px-3" to="/pages">
                Pages
              </NavLink>
              <NavLink className="text-custom-color fs-5 text-decoration-none px-3" to="/blog">
                Blog
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <div className="text-white fs-4">
            <FontAwesomeIcon className="me-3 text-custom-color" icon={faShoppingCart}></FontAwesomeIcon>
            <FontAwesomeIcon className="me-3 text-custom-color" icon={faUserAlt}></FontAwesomeIcon>
            <FontAwesomeIcon className="me-3 text-custom-color" icon={faFlag}></FontAwesomeIcon>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
