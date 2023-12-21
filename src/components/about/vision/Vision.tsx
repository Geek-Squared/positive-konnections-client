import React from 'react';
import './styles.scss';
import image1 from '../../../assets/Images/about/300ppi/girl.png';
import image2 from '../../../assets/Images/about/300ppi/2.png';
import image3 from '../../../assets/Images/about/300ppi/3.png';
import image4 from '../../../assets/Images/about/300ppi/4.png';

const VisionSection: React.FC = () => {
  return (
    <section className="vision-mission">
      <div className="image-section">
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
        <img src={image4} alt="Image 4" />
      </div>
      <div className="text-section">
        <h2>Our Vision</h2>
        <p>All young people living with or affected by HIV in Zimbabwe and Sub-Saharan Africa get the mental health and well-being support that they need.</p>
        <h2>Our Mission</h2>
        <p>To create and use tools of support for young people living with or affected by HIV, developed by young people and can be replicated or adopted by stakeholders who share a similar vision.</p>
        <button>Support Us</button>
      </div>
    </section>
  );
};

export default VisionSection;