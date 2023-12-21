import React from "react";
import "./styles.scss";
import mailIcon from "../../assets/svgs/SVG/mail.svg";
import phoneIcon from "../../assets/svgs/SVG/call.svg";
import locationIcon from "../../assets/svgs/SVG/location.svg";

const ContactInfo: React.FC = () => {
  return (
    <div className="container">
      <section className="contact-section">
        <div className="stat-block three-items">
          <div className="stat-item">
            <img src={mailIcon} alt="mail" />
            <h4>Info@renewal.org.zw</h4>
          </div>
          <div className="stat-item">
            <img src={phoneIcon} alt="phone" />
            <h4>+263 771 651 429</h4>
          </div>
          <div className="stat-item">
            <img src={locationIcon} alt="phone" />
            <h4>58 Palmer Road, Milton Park, Harare, Zimbabwe</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
