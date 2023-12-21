import React from "react";
import Hero from "./shared/hero/Hero";
import BodySection from "./home/sections/body/BodySection";
import dividerIcon from "../assets/svgs/SVG/yellow_seperator.svg";
import supportIcon from "../assets/svgs/SVG/discovery.svg";
import mainImage from "../assets/Images/support/300ppi/main.png";
import MethodSection from "./home/method/MethodSection";
import TestimonialSection from "./shared/testimonial/TestimonialSection";
import SupportLevels from "./support/SupportLevels";
import SupportSection from "./home/support/SupportSection";

const Support: React.FC = () => {
  return (
    <>
      <Hero
        headerText={`Support us`}
        buttonText="Find out more"
        mainImage={mainImage}
        hasButton={false}
        heroText={`“We want to reach out to and help more hidden heroes discover who they really are”`}
        hasHeroText={true}
      />
      <BodySection
        headerText={`Support us in making a positive impact`}
        dividerIcon={dividerIcon}
        bodyText={`There is a high prevalence of common mental health conditions in Zimbabwe and stigma and discrimination about mental\nhealth & HIV, together with scarcity of resources makes it difficult for people to access services.
        The prolonged hardships that people have been facing together with the effects of Covid-19 have resulted in a high prevalence
        of depression, suicide, anxiety and substance abuse in Zimbabwe. Therefore there is a huge need for access to mental health
        services for marginalized communities who are in dire need of care and affordable mental health services.
        Especially for young people living with HIV.`}
      />

      <BodySection
        headerText={`Our solution`}
        bodyText={`Positive Konnections is a Zimbabwe based, youth-led organisation along with professionals in mental health who have
        developed a tech-enabled support programme as well as methods to assist young people living with HIV improve their quality
        of life and mental well being in a supportive community where everyone, regardless of their HIV status is valued
        and included.The application can be accessed privately, anonymously and at affordable prices.\n
        At Positive Konnections, we understand the complexities of mental health, and we believe that regardless of the challenges
        we face, everyone is a superhero endowed with special powers and abilities, yet to be discovered, especially those living with
        HIV, and we want to help in the discovery of the real you while acknowledging the hidden heroes of our generation!`}
      />
      <div className="colored-background">
        <MethodSection
          headerText="Our method includes the following:"
          hasButton={false}
        />
      </div>

      <TestimonialSection additionalClass="special-spacing" />
      <BodySection
        headerText={`Sponsorship levels`}
        bodyText={`We appreciate your consideration in supporting Positive Konnections!\n
        Your support can go a long way in helping us scale up our products and services to more people and continuing in growth and
        building on the momentum and traction we have so far in reaching our goals to support clients from marginalized and
        low-income communities to access our interventions and mental health services.`}
      />
      <div>

      <SupportLevels />
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

export default Support;
