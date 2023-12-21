import React from 'react';
import './styles.scss';
import youtube from '../../assets/svgs/SVG/yt.svg';
import xLink from '../../assets/svgs/SVG/x.svg';
import facebook from '../../assets/svgs/SVG/fb.svg';
import instagram from '../../assets/svgs/SVG/insta.svg';
import Logo from '../../assets/svgs/SVG/logo_white.svg';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="logo">
        <img src={Logo} alt="logo" className='logo' />
      </div>
      <div className="menu">
        <a href="/about">About</a>
        <a href="/method">Our Method</a>
        <a href="/resources">Resources</a>
        <a href="/comic">Comic Book</a>
        <a href="/contact">Contact</a>
        <a href="blog">Blog</a>
        <a href="support" className='support-us'>Support Us</a>
      </div>
      <hr />
      <div className="social-media">
        <img src={youtube} alt="youtube" />
        <img src={xLink} alt="xLink" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </div>
      <div className="copyright">Copyright © {year}, All Rights Reserved</div>
    </div>
  );
};

export default Footer;