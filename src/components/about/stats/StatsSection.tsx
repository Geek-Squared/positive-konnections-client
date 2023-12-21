import React from "react";
import "./styles.scss";
import dividerIcon from "../../../assets/svgs/SVG/gray_sep.svg";

const StatsSection: React.FC = () => {
  return (
    <div className="container">
      <h1>
        There is a high prevalence of common mental health conditions in Zimbabwe
      </h1>
      <section className="stats-section">
        <div className="stat-block">
          <div className="stat-item">
            <p>High prevalence of suicide among men</p>
            <p>
              <span className="highlight">26.9%</span>, women{" "}
              <span className="highlight">9.7%</span> and older people{" "}
              <span className="highlight">84.4%</span>
            </p>
          </div>
          <div className="stat-item">
            <p>
              <strong>Few service providers:</strong>
            </p>
            <p>
              <span className="highlight">
                15 Psychiatrists & 16 Psychologists
              </span>{" "}
              to cater for a population of 14 Million
            </p>
          </div>
        </div>
        <h3>Our first online Intervention focused on young people with HIV.</h3>
        <div className="stat-block three-items">
          <div className="stat-item">
            <p>
              <strong>
                <span className="highlight">38 million</span> with HIV GLOBALLY
              </strong>
            </p>
            <p>
              <span className="highlight">80%</span> live in Southern Africa
            </p>
          </div>
          <div className="stat-item">
            <p>
              Globally, Zimbabwe has a high HIV incidence rate (
              <span className="highlight">13.8%</span>)
            </p>
          </div>
          <div className="stat-item">
            <p>
              <strong>
                Every minute 1 young woman is infected by HIV in Southern Africa
              </strong>{" "}
              & <span className="highlight">30%</span> of new infections, in
              Zimbabwe, are young women 15-24 years old.
            </p>
          </div>
        </div>
        <div className="stat-block">
          <div className="stat-item">
            <p>
              Although AIDS related deaths have reduced by{" "}
              <span className="highlight">30%</span> in adults,
              <br /> <strong>they continue to rise in young people</strong>
            </p>
          </div>
          <div className="stat-item">
            <p>
              This is due to poor mental health (
              <span className="highlight">78%</span>) and poor adherence to
              medication, <span className="highlight">48%</span> treatment
              failure a form of slow suicide
            </p>
          </div>
        </div>
      </section>
        <img
         src={dividerIcon}
         alt="divider"
        />
    </div>
  );
};

export default StatsSection;
