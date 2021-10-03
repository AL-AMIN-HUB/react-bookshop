import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Book.css";

const Book = (props) => {
  const { name, picture, author, price } = props.book;
  return (
    <Col>
      <Card className="text-center border-0 shadow-sm h-100 rounded-3">
        <Card.Img variant="top" className=" d-block mx-auto w-75 pt-5 book-hover" src={picture} />
        <Card.Body>
          <Card.Title>
            <h4> {name} </h4>
          </Card.Title>
          <Card.Text>
            <small> {author} </small>
            <h5 className="text-color">$ {price} </h5>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white border-0">
          <NavLink to="/pages">
            <button className="btn btn-outline-danger fs-4 px-5">View Pages</button>
          </NavLink>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Book;
