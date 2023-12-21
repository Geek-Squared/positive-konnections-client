import React from "react";
import Hero from "./shared/hero/Hero";
import BodySection from "./home/sections/body/BodySection";
import dividerIcon from "../assets/svgs/SVG/yellow_seperator.svg";
import supportIcon from "../assets/svgs/SVG/discovery.svg";
import mainImage from "../assets/Images/support/300ppi/main.png";
import SupportSection from "./home/support/SupportSection";

const Comic: React.FC = () => {
  return (
    <>
      <Hero
        headerText={`Our comic book`}
        mainImage={mainImage}
        hasButton={false}
        heroText={`Join PK-Force on a thrilling journey of self-discovery,
        purpose, and growth. Are you ready to witness the
        extraordinary? Adventure awaits!"`}
        hasHeroText={true}
      />
      <div className="colored-background">
      <BodySection
        headerText={`PK Force: Chronicles of the hidden battles`}
        dividerIcon={dividerIcon}
        bodyText={`Viewing people living with HIV as super heroes is something that can appear unrealistic and far-fetched. It might seem as though
        one is being over ambitious or trying to sugar coat it or put a positive spin to something ugly and difficult to deal with. Thus, it might
        be easy to dismiss the thought or concept because of the traditional, personal, cultural and social responses or ways of thinking
        about and dealing with people living with HIV.\n
        Therefore there is need to make a case for the hidden heroes of our generation that society might have missed and who might be
        unaware of their heroes’ status. This comic draws upon the experiences and real-life challenges that many individuals living with HIV
        face in their lives, especially those who may not realize their own inner strength. It is a work of creative fiction that aims to draw par-
        allels between the lives, challenges and transformative journey of the superheroes within these pages with the struggles many
        endure and who do not see themselves as such.\n
        The Characters and narrative depicted in these pages aim to explore and highlight the resilience and hope that individuals can find in
        the face of adversity and to resonate with the experiences of stigma, discrimination, and difficult life situations, while ultimately telling
        a story of courage, self-discovery, triumph, growth and transformation.\n
        Join the heroes as they embark on a thrilling adventure. In a world with multiple dimensions, heroes who live in ignorance of their
        power must journey on a path of self-discovery, unlocking their abilities and inner power while navigating through a new realm and
        battling a villain that seeks to destroy them and all of humanity.`}
      />
     </div>

     <div className="colored-background">
      <SupportSection
        icon={supportIcon}
        hasTwoButtons={true}
        text={`Support us in our goals to reach out to and unlock more hidden\nheroes or contact us to discover more about our team
        and our processes`}
      />
      </div>
    </>
  );
};

export default Comic;
