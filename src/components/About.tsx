import React from "react";
import Hero from "./shared/hero/Hero";
import BodySection from "./home/sections/body/BodySection";
import dividerIcon from "../assets/svgs/SVG/yellow_seperator.svg";
import mainImage from "../assets/Images/about/300ppi/main.png";
import VisionSection from "./about/vision/Vision";
import StatsSection from "./about/stats/StatsSection";
import AboutSection from "./about/aboutSection/AboutSection";

const Home: React.FC = () => {
  return (
    <>
      <Hero
        headerText={`About us`}
        buttonText="Find out more"
        mainImage={mainImage}
        hasButton={false}
        heroText={`"We believe everyone is a superhero endowed with\nspecial powers and abilities, yet to be discovered!"`}
        hasHeroText={true}
      />
      <BodySection
        headerText={`Positive Konnections`}
        dividerIcon={dividerIcon}
        bodyText={` At Positive Konnections we know that adversity is part of the human story.
      We all face challenges that interrupt our lives just like HIV has done to so many lives. Many people living with HIV have found
      themselves in the ring with death, fighting for their lives ever since they found out about their HIV status. Although they have
      been fighting HIV and winning, a lot of them do not acknowledge their own strength and the resilience that
      has kept them thriving where others have given up.\n
      In spite of these daily victories most people with HIV have low self-esteem and no confidence in themselves.
      They see themselves as lacking value and are ashamed of themselves. Some think they are dirty, dangerous, unlovable,
      inferior, incompetent and many other negative things. Stigma and discrimination from family and society adds to these beliefs
      causing people with HIV to hide, avoid social interactions or even fully pursue their dreams.\n
      Positive Konnections provides support in the form of mental-health services and interventions primarily to people living with
      HIV who are overcoming stigma and discrimination in ways that ultimately seek to break down barriers and challenge
      stigma and discrimination surrounding HIV and mental health.\n
      We are a Zimbabwe based, youth-led organisation along with professionals in mental health who have developed
      a tech-enabled support programme as well as methods to assist young people living with HIV improve their quality of life and
      mental well being in a supportive community where everyone, regardless of their HIV status is valued and included.
      At Positive Konnections, we understand the complexities of mental health, and we believe that regardless of the challenges
      we face, everyone is a superhero endowed with special powers and abilities, yet to be discovered, especially those living with
      HIV, and we want to help in the discovery of the real you while acknowledging the hidden heroes of our generation!`}
      />
      <VisionSection />
      <StatsSection />
      <div className="colored-background">
        <AboutSection />
      </div>
    </>
  );
};

export default Home;
