// Libs & Framewroks
import styled from "styled-components";

// Files
import thomas from "../images/image-thomas.jpg";
import emily from "../images/image-emily.jpg";
import jennie from "../images/image-jennie.jpg";

// Style
const Parent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 8rem;

  h4 {
    padding-top: 4em;
    padding-bottom: 2em;
    font-family: "Fraunces";
    color: #a7aaac;
    letter-spacing: 8px;
  }

  .persons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 150px;
    width: 100%;
    padding: 2.5rem;

    .person {
      img {
        border-radius: 50%;
        width: 90px;
        height: 90px;
      }

      p {
        padding-top: 3.2em;
        padding-bottom: 3em;
        color: #6f7172;
        font-family: "Barlow";
      }

      .text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;

        span:first-child {
          font-family: "Fraunces";
          color: #323a42;
        }

        span:last-child {
          font-family: "Barlow";
          color: #b9b9b9;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    .persons {
      justify-content: center;
      gap: 75px;
      flex-direction: column;
      flex-wrap: wrap !important;
    }
  }
`;

// JSX
const Testimonials = () => {
  return (
    <Parent>
      <h4>CLIENT TESTIMONIALS</h4>

      <div className="persons">
        <div className="person" data-aos="zoom-in">
          <img src={emily} alt="Woman" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>

          <div className="text">
            <span>Emily R.</span>
            <span>Marketing Director</span>
          </div>
        </div>

        <div className="person" data-aos="zoom-in" data-aos-delay="100">
          <img src={thomas} alt="Man" />
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>

          <div className="text">
            <span>Thomas S.</span>
            <span> Chief Operating Officer</span>
          </div>
        </div>
        <div className="person" data-aos="zoom-in" data-aos-delay="200">
          <img src={jennie} alt="Woman" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>

          <div className="text">
            <span>Jennie F.</span>
            <span>Business Owner</span>
          </div>
        </div>
      </div>
    </Parent>
  );
};

export default Testimonials;
