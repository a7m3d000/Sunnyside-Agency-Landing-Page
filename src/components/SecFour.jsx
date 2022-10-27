// Libs & Frameworks
import styled from "styled-components";

// Files
import milk from "../images/image-gallery-milkbottles.jpg";
import orange from "../images/image-gallery-orange.jpg";
import cone from "../images/image-gallery-cone.jpg";
import suger from "../images/image-gallery-sugarcubes.jpg";

// Style
const Parent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;

  img {
    width: 25%;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 50%;
    }
  }

  @media screen and (max-width: 425px) {
    img {
      width: 100%;
    }
  }
`;

// JSX
const SecFour = () => {
  return (
    <Parent>
      <img src={milk} alt="Milk Bottl" className="one" data-aos="flip-left" />
      <img
        src={orange}
        alt="Orange Fruit"
        className="two"
        data-aos="flip-left"
        data-aos-delay="100"
      />
      <img
        src={cone}
        alt="Ice Creme"
        className="three"
        data-aos="flip-left"
        data-aos-delay="200"
      />
      <img
        src={suger}
        alt="Shuger Cubes"
        className="four"
        data-aos="flip-left"
        data-aos-delay="300"
      />
    </Parent>
  );
};

export default SecFour;
