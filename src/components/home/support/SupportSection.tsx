import React from "react";
import "./styles.scss";
import supportIcon from "../../../assets/svgs/SVG/hero_fem.svg";
import CustomButton from "../../shared/buttons/CustomButton";

interface SupportSectionProps {
  icon?: string;
  hasTwoButtons?: boolean;
  text?: string;
}

const SupportSection: React.FC<SupportSectionProps> = ({
  icon,
  hasTwoButtons = false,
  text,
}) => {
  return (
    <section className="support-us">
      <img
        src={icon || supportIcon}
        alt="Support Icon"
        className="supportIcon"
      />
      <h2>Support Our Cause</h2>
      {(text && (
        <p dangerouslySetInnerHTML={{ __html: text.replace("\n", "<br />") }} />
      )) || (
        <p>
          We want to reach out to and unlock more hidden heroes.
          <br /> Your support can go a long way in helping us achieve our goals.
        </p>
      )}

      {hasTwoButtons ? (
        <div className="buttons">
          <CustomButton
            additionalClass="touching-button"
            buttonText="Download Sponsor Form"
          />
        </div>
      ) : (
        <CustomButton
          additionalClass="touching-button-2"
          buttonText="Support Us"
          onClick={() => {
            window.location.href = "/support";
          }}
        />
      )}
    </section>
  );
};

export default SupportSection;
