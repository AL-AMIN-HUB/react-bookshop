import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Customer1 from "../../images/customer.jpg";
import Customer2 from "../../images/customer-2.jpg";
import Customer3 from "../../images/customer-3.jpg";

const Customer = () => {
  return (
    <div>
      <div className="text-center mt-5">
        {" "}
        <h3>Our Happy Customer</h3>
        <p className="lead">Over 5600 happy customer. Don't just take our more</p>
      </div>

      <div className="container mt-3 py-5 mb-5">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="border-0 shadow p-3">
              <Card.Body>
                <Card.Text className="text-color">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <div className="d-flex align-align-items-center">
                {" "}
                <div>
                  {" "}
                  <Card.Img variant="top" className="rounded-circle ms-3" src={Customer1} />
                </div>
                <div className="mt-3 ms-4">
                  <Card.Title>
                    <h4>Liam Planket</h4>
                  </Card.Title>
                  <Card.Text>
                    <small>Photographer</small>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 shadow p-3">
              <Card.Body>
                <Card.Text className="text-color">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <div className="d-flex">
                {" "}
                <div>
                  {" "}
                  <Card.Img variant="top" className="rounded-circle ms-3" src={Customer2} />
                </div>
                <div className="mt-3 ms-4">
                  <Card.Title>
                    <h4>MC carry</h4>
                  </Card.Title>
                  <Card.Text>
                    <small>Developer</small>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 shadow p-3">
              <Card.Body>
                <Card.Text className="text-color">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <div className="d-flex">
                {" "}
                <div>
                  {" "}
                  <Card.Img variant="top" className="rounded-circle ms-3" src={Customer3} />
                </div>
                <div className="mt-3 ms-4">
                  <Card.Title>
                    <h4>Messa Loam</h4>
                  </Card.Title>
                  <Card.Text>
                    <small>Designer</small>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Customer;
