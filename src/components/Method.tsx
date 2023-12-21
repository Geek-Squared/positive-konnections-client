import React from "react";
import Hero from "./shared/hero/Hero";
import BodySection from "./home/sections/body/BodySection";
import dividerIcon from "../assets/svgs/SVG/yellow_seperator.svg";
import dividerIcon2 from "../assets/svgs/SVG/gray_sep.svg";
import mainImage from "../assets/Images/our method/300ppi/main.png";
import MethodSection from "./home/method/MethodSection";
import AboutMethodSection from "./about/method/AboutMethod";
import SupportSection from "./home/support/SupportSection";
import "./styles.scss";

const Method: React.FC = () => {
  return (
    <>
      <Hero
        additionalClass="special-spacing"
        headerText={`Our method`}
        buttonText="Find out more"
        mainImage={mainImage}
        hasButton={false}
        heroText={`“We all need that additional support from someone
        to help us understand what is special about us,
        what our special powers are!”`}
        hasHeroText={true}
      />
      <BodySection
        headerText={`About the Postive Konnections method`}
        dividerIcon={dividerIcon}
        bodyText={`We have all been in situations where we lack confidence, esteem etc and need that additional support from someone
        to help us understand what is special about us, what our special powers are!\n
        It can be hard to get that support for some, especially ifthey are affected by stigma and discrimination.\n
        Stigma and discrimination can lead to the following negative impacts:
        feeling ashamed, hiding, or withdrawing from life and others, limited access to services,
        negative self-perceptions, suicidal or self-harming thoughts and behaviours.`}
      />
      <BodySection
        headerText={`How do we fix that?`}
        bodyText={`We are a Zimbabwe based, youth-led organisation along with professionals in mental health who have developed
        a tech-enabled support programme as well as methods to assist young people living with HIV improve their quality of life and
        mental well being in a supportive community where everyone, regardless of their HIV status is valued and included.`}
      />
      <MethodSection
        headerText="Our method includes the following:"
        hasButton={false}
      />
      <div className="colored-background">
        <AboutMethodSection />
      </div>
      <img src={dividerIcon2} alt="Divider Icon" className="divider" />
      <SupportSection />
    </>
  );
};

export default Method;
