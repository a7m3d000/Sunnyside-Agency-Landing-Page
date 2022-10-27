// Libs & Frameworks
import {
  Container,
  FloatingLabel,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import styled from "styled-components";

// Files
import contactsImg from "../images/about.svg";

// Style
const Parent = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 90px;
  padding: 0 0 5em 0;
  background: url("${contactsImg}");
  position: relative;

  h2 {
    font-weight: bolder;
    color: #3ebfff;
    margin: 0;
    padding: 0;
    padding-top: 2em;
    position: relative;
    top: -20px;

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

  label {
    color: #198754;
  }

  input {
    font-size: 1.05em;
  }

  .form-control {
    resize: none;

    &:focus {
      border-color: #20c997;
      box-shadow: 0 0 0 0.25rem rgba(32, 201, 151, 25%);
    }
  }

  .btns {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 47%;
      height: 50px;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    padding-top: 0;
  }

  @media screen and (max-width: 576px) {
    h2 {
      padding-top: 2.8em;
    }
  }

  @media screen and (max-width: 375px) {
    .btns {
      flex-direction: column;
      gap: 15px;

      button {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 5em 0;
  }
`;

// JSX
const Contacts = () => {
  return (
    <Parent>
      <Container>
        <h2 className="mb-5" data-aos="flip-down" data-aos-delay="60">
          CONTACT US
        </h2>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
                data-aos="zoom-in"
                data-aos-delay="120"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Phone"
                className="mb-3"
                data-aos="zoom-in"
                data-aos-delay="180"
              >
                <Form.Control type="tel" placeholder="Phone" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea2"
                label="Message"
                data-aos="zoom-in"
                data-aos-delay="240"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "200px" }}
                  className="mb-5"
                />
              </FloatingLabel>

              <div className="btns">
                <Button
                  variant="success"
                  type="submit"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  Submit
                </Button>
                <Button
                  variant="secondary"
                  type="reset"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  Clear
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Parent>
  );
};

export default Contacts;
