import React from "react";
import "./styles.scss";
import arrow from "../../../assets/svgs/SVG/yellow_arrow.svg";
import CustomButton from "../buttons/CustomButton";

interface IHeroProps {
  headerText: string;
  buttonText?: string;
  mainImage: string;
  hasButton?: boolean;
  heroText?: string;
  hasHeroText?: boolean;
  additionalClass?: string;
  onClick?: () => void;
}

const Hero: React.FC<IHeroProps> = ({
  headerText,
  buttonText,
  mainImage,
  hasButton,
  heroText,
  hasHeroText = false,
  additionalClass,
  onClick,
}) => {
  return (
    <section className={`hero ${additionalClass}`}>
      <div className="hero-left">
        <h1>{headerText}</h1>
        {hasButton ? <CustomButton buttonText={buttonText} onClick={onClick} /> : null}
        {hasHeroText ? <p className="hero">{heroText}</p> : null}
        <img src={arrow} alt="Scroll down" className="arrow" />
      </div>
      <div className="hero-right">
        <img src={mainImage} alt="Main" />
      </div>
    </section>
  );
};

export default Hero;
