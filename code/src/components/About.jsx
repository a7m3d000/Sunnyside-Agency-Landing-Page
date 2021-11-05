// Libs & Frameworks
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

// Files
import aboutImage from "../images/about.svg";

// Style
const Parent = styled.section`
  height: 75vh;
  background: url("${aboutImage}");
  position: relative;

  h2 {
    font-weight: bolder;
    color: #3ebfff;
    padding-top: 2em;
    position: relative;

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

  p {
    font-size: 1.3em;
    color: #777;
    word-break: break-all;
    padding-top: 1.5em;
    line-height: 2;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 375px) {
    padding-top: 2rem;
  }
`;

// JSX
const About = () => {
  return (
    <Parent>
      <Container>
        <h2 className="mb-5" data-aos="flip-down" data-aos-delay="60">
          About Us
        </h2>

        <Row className="justify-content-center">
          <Col lg={8}>
            <p data-aos="zoom-out-up" data-aos-delay="200">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
          </Col>
        </Row>
      </Container>
    </Parent>
  );
};

export default About;
