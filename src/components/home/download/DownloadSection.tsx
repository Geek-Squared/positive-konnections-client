import React from "react";
import "./styles.scss";
import heroImage from "../../../assets/Images/home/download.png";
import CustomButton from "../../shared/buttons/CustomButton";

const DownloadSection: React.FC = () => {
  return (
    <section className="unlock">
      <div className="unlock-content">
        <img src={heroImage} alt="Hero" />
        <div>
          <h1>
            Unlock the super hero
            <br /> within you!
          </h1>
          <p>
            Unlock the hero within you through Positive Konnections, a
            tech-enabled support programme designed primarily to assist young
            people living with HIV improve their quality of life and mental well
            being in a supportive community where everyone, regardless of their
            HIV status is valued and included.
          </p>
          <h4>Easy Start, Structured Support:</h4>
          <p>
            Download is simple and fast, experience a structured programme and
            support from counsellors—your journey to unlocking the hero within
            you begins effortlessly.
          </p>
          <h4>Privacy Assurance:</h4>
          <p>
            Your data stays private, ensuring a secure and confidential
            experience.
          </p>
          <h4>Community:</h4>
          <p>Connect in a secure space. Share, support, and belong.</p>
          <h3>Join now and start your journey!</h3>
          <CustomButton
            additionalClass="download-button"
            buttonText="Download our App"
            onClick={() => {
              window.location.href =
                "https://play.google.com/store/apps/details?id=com.health.positive_konnections";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
