import React from 'react';
import './styles.scss';

interface IBodySectionProps {
  headerText?: string;
  dividerIcon?: string;
  bodyText?: string;
}

const BodySection: React.FC<IBodySectionProps> = ({
  headerText,
  dividerIcon,
  bodyText,
}) => {
  return (
    <section className="about-us">
      <h3>{headerText}</h3>
      {
        dividerIcon ? <img src={dividerIcon} alt="Divider" /> : null
      }
      {bodyText ? <p dangerouslySetInnerHTML={{ __html: bodyText.replace(/\n/g, '<br />') }} /> : null}
    </section>
  );
};

export default BodySection;