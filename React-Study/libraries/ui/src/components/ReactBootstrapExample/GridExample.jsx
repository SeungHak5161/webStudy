import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./grid.css";

export default function GridExample() {
  return (
    <>
      {/* xs<576px
          sm>=576px
          md>=768px */}
      <Container>
        <Row>
          <Col sm={8} className="col-color">
            sm=8
          </Col>
          <Col sm={{ sapn: 3, offset: 1 }} className="col-color">
            sm=3
          </Col>
        </Row>
        <Row>
          <Col sm={4} md={2} className="col-color">
            sm=true
          </Col>
          <Col sm="auto" className="col-color">
            sm=true
          </Col>
          <Col sm={4} md={8} className="col-color">
            sm=true
          </Col>
        </Row>
        {/* row 하위 col들 width 설정하는건데 잘 안됨..?? */}
        <Row sm={3} md={6}>
          <Col className="col-color">1 of 2</Col>
          <Col className="col-color">2 of 2</Col>
        </Row>
      </Container>
    </>
  );
}
