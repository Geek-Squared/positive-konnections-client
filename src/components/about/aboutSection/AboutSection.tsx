import React from "react";
import "./styles.scss";
import image1 from "../../../assets/svgs/SVG/packages.svg";
import image2 from "../../../assets/svgs/SVG/playing.svg";
import image3 from "../../../assets/svgs/SVG/rename.svg";
import CustomButton from "../../shared/buttons/CustomButton";

const AboutSection: React.FC = () => {
  return (
    <div className="container">
      <h1>We provide crucial support to the people who need it the most</h1>
      <div className="about-section">
        <div className="about-item">
          <img src={image1} alt="Icon 1" />
          <p>
            We have various packages of care with a hybrid of in-person and
            virtual support.
          </p>
        </div>
        <div className="about-item">
          <img src={image2} alt="Icon 2" />
          <p>We work with children, adolescents and families</p>
        </div>
      </div>
      <div className="about-item third-item">
        <img src={image3} alt="Icon 3" />
        <p>
          We support people going through different challenges <br /> including
          trauma, living with a chronic illness, disability,
          <br /> grief, and loss, suicidal ideation, together with many
          <br /> other crisis moments that people face in life.
        </p>
      </div>
      <h1>Discover more about our method</h1>
      <p>
        we have developed unique methods to assist young people living
        <br /> with HIV improve their quality of life and mental well being.
      </p>
      <div className="abt-btn">
        <CustomButton
          buttonText="Discover More"
          onClick={() => {
            window.location.href = "/method";
          }}
        />
      </div>
    </div>
  );
};

export default AboutSection;
