// Libs & Frameworks
import styled from "styled-components";

// Files
import headerImage from "../images/image-header.jpg";
import headerArrow from "../images/icon-arrow-down.svg";

// Style
const Parent = styled.div`
  text-align: center;
  position: relative;
  height: 100vh;
  background: url("${headerImage}");
  background-size: cover;

  .info {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;

    h1 {
      font-size: 3em;
      padding-bottom: 4rem;
      font-family: "Fraunces";
      letter-spacing: 5px;

      @media screen (max-width: 768px) {
        padding-bottom: 8rem;
      }
    }

    img {
      animation: arrow 3s linear infinite alternate;
    }
  }

  @media screen and (max-width: 375px) {
    .info {
      h1 {
        font-size: 2.6em;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .info {
      transform: translate(-50%, -8%);
    }
  }

  @keyframes arrow {
    from {
      transform: translateY(-15px);
    }
    to {
      transform: translateY(15px);
    }
  }
`;

// JSX
const Header = () => {
  return (
    <Parent>
      <div className="info">
        <h1>WE ARE CREATIVE</h1>
        <img src={headerArrow} alt="Arrow Icon" />
      </div>
    </Parent>
  );
};

export default Header;
