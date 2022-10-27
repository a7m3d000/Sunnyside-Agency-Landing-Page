// Libs & Frameworks
import styled from "styled-components";
import { Link } from "react-router-dom";

// Files
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pintrest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";

// Style
const Parent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  font-family: "Barlow";
  background: #90d4c5;
  padding: 4.5rem 0;

  h2 {
    font-weight: bolder;
    color: #2c7564;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;

    a {
      text-decoration: none;
      color: #589c8d;
    }
  }

  .links {
    gap: 50px;
  }

  .icons {
    gap: 30px;
  }
`;

// JSX
const Footer = () => {
  return (
    <Parent>
      <h2>sunnyside</h2>

      <ul className="links">
        <li key={1}>
          <Link to="/about">About</Link>
        </li>
        <li key={2}>
          <Link to="/services">Services</Link>
        </li>
        <li key={3}>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>

      <ul className="icons">
        <li key={"a"}>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook Icon" />
          </a>
        </li>
        <li key={"b"}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram Icon" />
          </a>
        </li>
        <li key={"c"}>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} alt="Twitter Icon" />
          </a>
        </li>
        <li key={"d"}>
          <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
            <img src={pintrest} alt="Pinterest Icon" />
          </a>
        </li>
      </ul>
    </Parent>
  );
};

export default Footer;
