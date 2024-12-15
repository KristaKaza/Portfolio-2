import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import picture from "../images/picture-portfolio.jpg";

const About = () => {
  return (
    <section id="about" className="py-5 mt-4">
      <Container className="d-flex align-items-center justify-content-center">
        <Row className="align-items-center w-100 text-center text-md-left">
          <Col md={6} className="text-white">
            <h1>Hi, I'm Krista!</h1>
            <p>
              I am a FRONT-END DEVELOPMENT student, interested in developing
              high-end websites with outstanding designs, while building smart
              user interfaces and useful interactions.
            </p>
            <p>
              My main area of expertise is front-end development. Some of my
              skills are HTML, CSS, JavaScript, and designing with Figma.
              Currently improving my JavaScript skills and learning more about
              React JS.
            </p>

            <div className="d-flex justify-content-center">
              <Button className="my-projects-btn m-2" href="#projects">
                My Projects
              </Button>
              <Button className="get-in-touch-btn m-2" href="#contact">
                Get in Touch
              </Button>
            </div>
          </Col>

          <Col md={6} className="text-center text-md-right">
            <img
              src={picture}
              alt="Krista's Portfolio"
              className="img-fluid rounded-circle"
              style={{
                maxWidth: "250px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
