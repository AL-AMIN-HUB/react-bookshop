import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Category = () => {
  return (
    <div>
      <Row xs={1} sm={1} md={3} className="g-4 container mx-auto my-5">
        <Col className="col-md-3">
          <Card className=" h-100">
            <Card.Body className="p-0 border-top-0 ">
              <Card.Title>
                <h4 className="primary-color p-3 text-white rounded-3">Browser categories</h4>
              </Card.Title>
              <Card.Text className="px-2">
                <p className="lead border-bottom sec-hover">Bookshop</p>
                <p className="lead border-bottom sec-hover">Audio Books</p>
                <p className="lead border-bottom sec-hover">Text Books</p>
                <p className="lead border-bottom sec-hover">Children Books</p>
                <p className="lead border-bottom sec-hover">Magazines</p>
                <p className="lead border-bottom sec-hover">Gifts & Toys</p>
                <p className="lead sec-hover">Daily Deal</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>{" "}
        <Col className="col-md-6">
          <Card className="border-0 h-100">
            <div className="img1">
              <h2 className="text-white fs-1 p-3 mt-3">Supper Sale!</h2>
              <h3 className="text-white ps-3">
                Get and extra <small className="text-color fw-bold">15% OFF</small>{" "}
              </h3>
              <small className="lead fw-bold text-white p-3">Your First Download</small>
            </div>
          </Card>
        </Col>{" "}
        <Col className="col-md-3">
          <Card className="border-0 h-100">
            <div className="img2 text-center">
              <p className="lead text-muted m-3"> Hot Event</p>
              <h3>Children's Books</h3>
              <h4 className="text-color">GIVES AWAYS</h4>
              <small className="fw-bold">May 3 - June 15</small>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Category;
