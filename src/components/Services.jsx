// Libs & Frameworks
import { Col, Container, Row, Card } from "react-bootstrap";
import styled from "styled-components";

// Files
import brand from "../images/brand.jpg";
import photography from "../images/photography.jfif";
import graphic from "../images/graphic.jfif";
import marketing from "../images/marketing.jpg";

const Parent = styled.section`
  padding: 0 0 5rem 0;

  h2 {
    font-weight: bolder;
    color: #3ebfff;
    padding-top: 2em;
    position: relative;
    padding-bottom: 1.5em;

    &::before {
      position: absolute;
      content: "";
      top: 115px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 2px;
      background: #90d4c5;
      border-radius: 15px;
    }

    &::after {
      position: absolute;
      content: "";
      top: 111px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 10px;
      background: #90d4c5;
      border-radius: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 5em 0;
  }
`;

const Services = () => {
  return (
    <Parent>
      <Container>
        <h2 className="mb-5" data-aos="flip-down" data-aos-delay="60">
          About Us
        </h2>

        <Row className="g-4">
          <Col
            md={12}
            lg={6}
            className="d-flex justify-content-center"
            data-aos="flip-left"
            data-aos-delay="75"
          >
            <Card
              style={{ width: "75%", border: "none" }}
              className="shadow-sm"
            >
              <Card.Img variant="top" src={brand} alt="Brand Photo" />
              <Card.Body
                className="d-flex align-items-center justify-content-center"
                style={{ flexDirection: "column" }}
              >
                <Card.Title style={{ fontWeight: "700", color: "#3ebfff" }}>
                  Transform your brand
                </Card.Title>
                <Card.Text style={{ color: "#777" }}>
                  We are a full-service creative agency specializing in helping
                  brands grow fast. Engage your clients through compelling
                  visuals that do most of the marketing for you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={12}
            lg={6}
            className="d-flex justify-content-center"
            data-aos="flip-right"
            data-aos-delay="225"
          >
            <Card
              style={{ width: "75%", border: "none" }}
              className="shadow-sm"
            >
              <Card.Img
                variant="top"
                src={photography}
                alt="Photography Photo"
              />
              <Card.Body
                className="d-flex align-items-center justify-content-center"
                style={{ flexDirection: "column" }}
              >
                <Card.Title style={{ fontWeight: "700", color: "#3ebfff" }}>
                  Photography
                </Card.Title>
                <Card.Text style={{ color: "#777" }}>
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improve your business image.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={12}
            lg={6}
            className="d-flex justify-content-center"
            data-aos="flip-left"
            data-aos-delay="150"
          >
            <Card
              style={{ width: "75%", border: "none" }}
              className="shadow-sm"
            >
              <Card.Img variant="top" src={graphic} alt="Graphic Photo" />
              <Card.Body
                className="d-flex align-items-center justify-content-center"
                style={{ flexDirection: "column" }}
              >
                <Card.Title style={{ fontWeight: "700", color: "#3ebfff" }}>
                  Graphic design
                </Card.Title>
                <Card.Text style={{ color: "#777" }}>
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients’
                  attention.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={12}
            lg={6}
            className="d-flex justify-content-center"
            data-aos="flip-right"
            data-aos-delay="300"
          >
            <Card
              style={{ width: "75%", border: "none" }}
              className="shadow-sm"
            >
              <Card.Img variant="top" src={marketing} alt="Marketing Photo" />
              <Card.Body
                className="d-flex align-items-center justify-content-center"
                style={{ flexDirection: "column" }}
              >
                <Card.Title style={{ fontWeight: "700", color: "#3ebfff" }}>
                  Stand out to the right audience
                </Card.Title>
                <Card.Text style={{ color: "#777" }}>
                  Using a collaborative formula of designers, researchers,
                  photographers, videographers, and copywriters, we’ll build and
                  extend your brand in digital places.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Parent>
  );
};

export default Services;
