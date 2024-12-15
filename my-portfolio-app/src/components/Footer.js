// src/components/Footer.js

import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="text-center py-4"
      style={{ backgroundColor: "#343a40", color: "#fff" }}
    >
      <Container>
        <p>© 2024 My Portfolio. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
