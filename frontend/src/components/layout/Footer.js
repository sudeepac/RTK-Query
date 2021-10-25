import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer sticky="bottom" className={classes.footer}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright {new Date().getFullYear()} &copy; App Name
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
