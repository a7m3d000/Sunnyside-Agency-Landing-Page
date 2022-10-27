// Libs & Frameworks
import styled from "styled-components";

// Files
import orangeImage from "../images/image-photography.jpg";
import carrazImage from "../images/image-graphic-design.jpg";

// Style
const Parent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .img-1,
  .img-2 {
    width: 50%;
    position: relative;

    img {
      z-index: -1;
      width: 100%;
      height: 100%;
      left: 0;
    }

    .text {
      position: absolute;
      bottom: 75px;
      left: 50%;
      transform: translate(-50%);

      h2 {
        padding-bottom: 1rem;
        font-family: "Fraunces";
        font-size: 2em;
      }

      p {
        font-family: "Barlow";
        color: #8d8c93;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .img-1,
    .img-2 {
      width: 100%;

      .text {
        bottom: 20px;
        width: 100%;
        padding: 1em;

        h2 {
          font-size: 1.7em;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .img-1,
    .img-2 {
      width: 100%;

      .text {
        bottom: 50px;
        width: 100%;
        padding: 1em;

        h2 {
          font-size: 1.7em;
        }

        p {
          width: 80%;
          margin: auto;
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    .img-1,
    .img-2 {
      .text {
        bottom: 0;
        width: 100%;

        h2 {
          padding-bottom: 0.3rem;
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .img-1,
    .img-2 {
      .text {
        bottom: 0;
        width: 100%;

        h2 {
          padding-bottom: 0.3rem;
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
    .img-1,
    .img-2 {
      .text {
        bottom: 0;

        h2 {
          padding-bottom: 0.3rem;
          font-size: 1em;
        }

        p {
          padding-bottom: 0.3rem;
          font-size: 0.8em;
        }
      }
    }
  }
`;

// JSX
const SecThree = () => {
  return (
    <Parent>
      <div className="img-1">
        <img src={carrazImage} alt="Toote" data-aos="zoom-in" />
        <div className="text">
          <h2 style={{ color: "#38645b" }}>Graphic design</h2>
          <p style={{ color: "#4f8a7e" }}>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="img-2">
        <img src={orangeImage} alt="Orange Fruit" data-aos="zoom-in" />
        <div className="text">
          <h2 style={{ color: "#19536c" }}>Photography</h2>
          <p style={{ color: "#1f6584" }}>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </Parent>
  );
};

export default SecThree;
