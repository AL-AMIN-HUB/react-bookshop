import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import DwonloadIcon from "../../images/policies-1_180x.png";
import PayIcon from "../../images/policies-2_180x.png";
import DealIcon from "../../images/policies-3_180x.png";
import PaymentIcon from "../../images/policies-4_180x.png";

const System = () => {
  return (
    <div className="container py-5 my-5">
      <Row xs={1} md={4} className="g-4 text-center">
        <Col>
          <Card className="border-0 p-2 h-100">
            <Card.Img variant="top" className="w-25 d-block mx-auto" src={DwonloadIcon} />
            <Card.Body>
              <Card.Title>Instant Download</Card.Title>
              <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, nulla?</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 p-2 h-100">
            <Card.Img variant="top" className="w-25 d-block mx-auto" src={PayIcon} />
            <Card.Body>
              <Card.Title>Pay with Easy</Card.Title>
              <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 p-2 h-100">
            <Card.Img variant="top" className="w-25 d-block mx-auto" src={DealIcon} />
            <Card.Body>
              <Card.Title>Best Deal</Card.Title>
              <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, nulla?</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 p-2 h-100">
            <Card.Img variant="top" className="w-25 d-block mx-auto" src={PaymentIcon} />
            <Card.Body>
              <Card.Title>Secure Payment</Card.Title>
              <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default System;
