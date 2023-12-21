import React from "react";
import "./styles.scss";
import iconImage from "../../../assets/svgs/SVG/female_avatar.svg";
import rating from "../../../assets/svgs/SVG/stars.svg";

interface TestimonialSectionProps {
  additionalClass?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  additionalClass,
}) => {
  return (
    <section className={`testimonial ${additionalClass}`}>
      <img src={iconImage} alt="Icon" className="icon" />
      <h2>What people are saying</h2>
      <p>We have over 300 active users on our application</p>
      <div className="rating">
        {" "}
        {/* Replace this with your rating stars */}
        <img src={rating} alt="Icon" className="rating" />
      </div>
      <p className="testimony">
        “These days my attitude has changed I just feel happy…
        <br /> I used to feel upset every time I had to take my pills…
        <br /> now its easy, I keep telling myself its just one pill.."
        <br />
      </p>
      <span>-Positive Konnections user</span>
    </section>
  );
};

export default TestimonialSection;
