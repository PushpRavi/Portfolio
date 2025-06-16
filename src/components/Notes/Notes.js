import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import homeLogo from "../../Assets/home-main.svg"; // reuse same image

function Notes() {
  return (
    <section>
      <Container fluid className="home-section" id="notes">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Notes Page{" "}
                <span role="img" aria-label="notebook">
                  📚
                </span>
              </h1>

              <h1 className="heading-name">
                Content will be
                <strong className="main-name"> Uploaded Soon!</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", fontSize: "1.2rem" }}>
                We're working hard to bring you the best notes and study materials. <br />
                Stay tuned!
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="notes loading"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Notes;
