// MethodSection.tsx
import React from "react";
import "./style.scss";
import icon1 from "../../../assets/svgs/SVG/mental.svg";
import icon2 from "../../../assets/svgs/SVG/reduced_shame.svg";
import icon3 from "../../../assets/svgs/SVG/improved_engagement.svg";
import icon4 from "../../../assets/svgs/SVG/discovery.svg";
import icon5 from "../../../assets/svgs/SVG/hero_fem.svg";

interface IMethodSectionProps {
  headerText?: string;
}

const AboutMethodSection: React.FC<IMethodSectionProps> = ({ headerText }) => {
  return (
    <section className="methods">
      <h3>{headerText || `What impact does this have?`}</h3>
      <div className="method-icons">
        <div className="row-container">
          <div className="row">
            <div>
              <img src={icon1} alt="Icon 1" />
              <p>Storytelling</p>
            </div>
            <div>
              <img src={icon2} alt="Icon 2" />
              <p>
                Individual or <br /> group counselling
              </p>
            </div>
            <div>
              <img src={icon3} alt="Icon 3" />
              <p>
                In person and <br /> virtual support
              </p>
            </div>
          </div>
        </div>
        <div className="row-container">
          <div className="row">
            <div>
              <img src={icon4} alt="Icon 4" />
              <p>
                Advocacy and <br /> awareness raising
              </p>
            </div>
            <div>
              <img src={icon5} alt="Icon 5" />
              <p>
                Reduction in self- <br /> harming thoughts and behaviour
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMethodSection;
