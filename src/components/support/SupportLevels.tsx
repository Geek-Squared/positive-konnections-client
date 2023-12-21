import React from "react";
import "./styles.scss";

const SupportLevels: React.FC = () => {
  return (
    <div className="container">
      <section className="support-section">
        <div className="stat-block three-items">
          <div className="stat-item">
            <h4>Silver Level: Hope Giver</h4>
            <h5>Donation Range:</h5>
            <p className="highlight">$500 - $1,000 USD</p>
            <h5>Benefits</h5>
            <p>- Recognition on our organization's social media platforms.</p>
          </div>
          <div className="stat-item">
            <h4>Gold Level: Wellness Advocate</h4>
            <h5>Donation Range:</h5>
            <p className="highlight">$1,000 - $5,000 USD</p>
            <h5>Benefits</h5>
            <p>- Prominent logo placement on our organization's website.</p>
            <p>- Exclusive access to mental-health webinars and workshops.</p>
            <p>- Opportunity to host a dedicated virtual or in person session to share insights or expertise and meet our heroes.</p>
            <p>- Wellness Champion certificate for display.</p>
          </div>
          <div className="stat-item">
            <h4>Platinum Level: Transformation Partner</h4>
            <h5>Donation Range:</h5>
            <p className="highlight">$5,000 USD and above</p>
            <h5>Benefits</h5>
            <p>- Featured sponsor spotlight in press releases and media outreach.</p>
            <p>- VIP access to in-person and virtual events, including exclusive meet-and-greet opportunities with our organization leaders.</p>
            <p>- Customized impact reports tailored to the donor's specific areas of interest.</p>
            <p>- Recognition as a Transformation Partner in all organizational materials.</p>
            <p>- Personalized acknowledgment plaque for display at the donor's location.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportLevels;