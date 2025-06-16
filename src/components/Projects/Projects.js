import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import homeLogo from "../../Assets/home-main.svg"; // Optional: reuse the home image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          We are currently working on uploading the project showcases.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Projects Page{" "}
              <span role="img" aria-label="hammer">
                🔧
              </span>
            </h1>

            <h1 className="heading-name">
              Content will be
              <strong className="main-name"> Updated Soon!</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left", fontSize: "1.2rem" }}>
              Our project section is under construction. <br />
              We’ll be uploading amazing React, ML, and full-stack projects soon. Stay tuned!
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={homeLogo}
              alt="update soon"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
