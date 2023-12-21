import React from "react";
import "./styles.scss";
import dividerIcon from "../../../assets/svgs/SVG/awards.svg";
import sepIcon from "../../../assets/svgs/SVG/gray_sep.svg";

const AwardSection: React.FC = () => {
  return (
    <section className="about-us">
      <h3>Awards and Recognition</h3>
      <img src={dividerIcon} alt="Divider" className="awardIcon" />
      <div className="awards-container">
        <div className="award">
          <h4>Ember Mental Health, Mentorship Award 2022-2023</h4>
          <p>Growing the work and building new business models.</p>
          <a href="https://embermentalhealth.org/ourCohorts/positive-konnections">
            View
          </a>
        </div>
        <div className="award">
          <h4>World Economic Forum, Top Innovator Award 2023</h4>
          <p>
            Interventions supporting young people with mental health challenges.
            Award for interventions supporting SDG’s particularly, health and
            well being for all.
          </p>
          <a href="https://uplink.weforum.org/uplink/s/uplink-contribution/a012o00001pU5gMAAS/villains-to-superheroes-overturning-the-stigma-narrative">
            Watch Video
          </a>
        </div>
      </div>
      <img src={sepIcon} alt="Divider" className="iconDivider" />
    </section>
  );
};

export default AwardSection;
