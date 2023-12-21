import React from "react";
import Hero from "./shared/hero/Hero";
import BodySection from "./home/sections/body/BodySection";
import MethodSection from "./home/method/MethodSection";
import DownloadSection from "./home/download/DownloadSection";
import TestimonialSection from "./shared/testimonial/TestimonialSection";
import AwardSection from "./home/awards/AwardSection";
import SupportSection from "./home/support/SupportSection";
import mainImage from "../assets/Images/home/main.png";
import dividerIcon from "../assets/svgs/SVG/yellow_seperator.svg";

const Home: React.FC = () => {
  return (
    <>
      <Hero
        headerText={`We help you find\nthe super hero within`}
        buttonText="Find out more"
        mainImage={mainImage}
        hasButton={true}
        onClick={() => {
          window.location.href = "/about";
        }}
      />
      <div className="colored-background">
        <BodySection
          headerText={`Who we are`}
          bodyText={`Positive Konnections provides support in the form of mental-health services and interventions primarily to people living with
          HIV who are overcoming stigma and discrimination in ways that ultimately seek to break down barriers and challenge
          stigma and discrimination surrounding HIV and mental health.\n\nWe are a Zimbabwe based, youth-led organisation along with professionals in mental health who have developed
          a tech-enabled support programme as well as methods to assist young people living with HIV improve their quality of life and
          mental well being in a supportive community where everyone, regardless of their HIV status is valued and included.\n\n
          At Positive Konnections, we understand the complexities of mental health, and we believe that regardless of the challenges
          we face, everyone is a superhero endowed with special powers and abilities, yet to be discovered, especially those living with
          HIV, and we want to help in the discovery of the real you while acknowledging the hidden heroes of our generation!`}
          dividerIcon={dividerIcon}
        />
        <MethodSection />
        <DownloadSection />
      </div>
      <TestimonialSection />
      <AwardSection />
      <div className="colored-background">
        <SupportSection />
      </div>
    </>
  );
};

export default Home;
