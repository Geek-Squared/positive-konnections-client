import React from "react";
import BodySection from "./home/sections/body/BodySection";
import supportIcon from "../assets/svgs/SVG/discovery.svg";
import SupportSection from "./home/support/SupportSection";

const Blog: React.FC = () => {
  return (
    <>
      <BodySection headerText={`Mental health articles`} />

      <SupportSection
        icon={supportIcon}
        hasTwoButtons={true}
        text={`Support us in our goals to reach out to and unlock more hidden\nheroes or contact us to discover more about our team
        and our processes`}
      />
    </>
  );
};

export default Blog;
