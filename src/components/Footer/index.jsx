import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css'; 

const Footer = () => {
  
  return (
  <div className="footer container fluid">
    <div className="socialmedia">
      <h5>You can find us on:</h5>

      <div className="social-icons">
         
          <a href="#" className="social-icon"><SocialIcon network="linkedin" /></a>
           <a href="https://github.com/MAMCB/WBS-Contentful-ProgrammingLanguages" className="social-icon" target="_blank" rel="noopener noreferrer"><SocialIcon network="github" /></a>
          <a href="#" className="social-icon"><SocialIcon network="facebook" /></a>
          <a href="#" className="social-icon"><SocialIcon network="instagram" /></a>
          <a href="#" className="social-icon"><SocialIcon network="youtube" /></a>
          <a href="#" className="social-icon"><SocialIcon network="twitter" /></a>
          
          
      </div>          
    </div>
  </div>
  );
}

export default Footer;