import React from "react";
import "./styles.scss";
import icon1 from "../../../assets/svgs/SVG/storytelling.svg";
import icon2 from "../../../assets/svgs/SVG/counselling.svg";
import icon3 from "../../../assets/svgs/SVG/virtual_support.svg";
import icon4 from "../../../assets/svgs/SVG/Advocacy.svg";
import CustomButton from "../../shared/buttons/CustomButton";

interface IMethodSectionProps {
  headerText?: string;
  hasButton?: boolean;
}

const MethodSection: React.FC<IMethodSectionProps> = ({
  headerText,
  hasButton = true,
}) => {
  return (
    <section className="method">
      <h3>{headerText || `Our Method`}</h3>
      <div className="method-icons">
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
        <div>
          <img src={icon4} alt="Icon 4" />
          <p>
            Advocacy and <br /> awareness raising
          </p>
        </div>
      </div>
      {hasButton && (
        <CustomButton
          buttonText="Find out more"
          onClick={() => {
            window.location.href = "/method";
          }}
        />
      )}
    </section>
  );
};

export default MethodSection;
