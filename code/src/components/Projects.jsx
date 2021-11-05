// Libs & Frameworks
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

// Files
import aboutImage from "../images/about.svg";
import starpacks from "../images/starpacks.jfif";
import marcedes from "../images/marcedes.jfif";
import macdonals from "../images/macdonals.jfif";
import none from "../images/none.jpg";
import tesla from "../images/tesla.jfif";
import lamborgini from "../images/lamborgini.jpg";
import dragon from "../images/dragon.jpg";
import firrari from "../images/firrari.jfif";
import peaple from "../images/peaple.jpg";
import arrow from "../images/arrow.jpg";
import connect from "../images/connect.jpg";
import creative from "../images/creative.jpg";

// Style
const Parent = styled.section`
  padding: 0 0 5em 0;
  background: url("${aboutImage}");

  h2 {
    font-weight: bolder;
    color: #3ebfff;
    padding-top: 2em;
    padding-bottom: 1.5em;
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

  .project {
    width: 300px;
    height: 275px;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    border-radius: 15px;
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      background: #3ebfff;
      opacity: 0.5;
      display: none;
    }

    &:hover {
      cursor: pointer;

      &::after {
        display: block;
      }
    }
  }

  .starpacks {
    background: url("${starpacks}");
  }

  .marcedes {
    background: url("${marcedes}");
  }

  .macdonals {
    background: url("${macdonals}");
  }

  .none {
    background: url("${none}");
  }

  .tesla {
    background: url("${tesla}");
  }

  .lamborgini {
    background: url("${lamborgini}");
  }

  .dragon {
    background: url("${dragon}");
  }

  .firrari {
    background: url("${firrari}");
  }

  .creative {
    background: url("${creative}");
  }

  .arrow {
    background: url("${arrow}");
  }

  .connect {
    background: url("${connect}");
  }

  .peaple {
    background: url("${peaple}");
  }

  @media screen and (max-width: 768px) {
    padding: 5em 0;
  }
`;

// JSX
const Projects = () => {
  return (
    <Parent>
      <Container>
        <h2 className="mb-5" data-aos="flip-down" data-aos-delay="60">
          Projects
        </h2>
        <Row className="g-4">
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="25"
          >
            <div className="project starpacks"></div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <div className="project marcedes"></div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="75"
          >
            <div className="project macdonals"></div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="project none"></div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="125"
          >
            <div className="project tesla"></div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <div className="project lamborgini"></div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="175"
          >
            <div className="project dragon"></div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="project firrari"></div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="225"
          >
            <div className="project creative"></div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div className="project arrow"></div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="275"
          >
            <div className="project connect"></div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="project peaple"></div>
          </Col>
        </Row>
      </Container>
    </Parent>
  );
};

export default Projects;
