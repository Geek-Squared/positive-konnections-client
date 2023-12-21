import React from "react";
import Hero from "./shared/hero/Hero";
import mainImage from "../assets/Images/contact/300ppi/main.png";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./forms/contact/Contact";

const Contact: React.FC = () => {
  return (
    <>
      <Hero
        headerText={`Contact us`}
        mainImage={mainImage}
        hasButton={false}
        heroText={`“Contact us today and let’s have a conversation.
        We’d love to heat from you"`}
        hasHeroText={true}
      />
      <ContactInfo />
      <div className="colored-background">
      <ContactForm />
      </div>
    </>
  );
};

export default Contact;
