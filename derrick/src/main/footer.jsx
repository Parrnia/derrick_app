
import  './footer.css';
import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt, ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
        </p>
        <div className="icons">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p><span> Street name and number</span> City, Country</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <p> (+00) 0000 000 000</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          <p><a href="#"> office@company.com</a></p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2> Company<span> logo</span></h2>
        <p className="menu">
          <a href="#"> Home</a> |
          <a href="#"> About</a> |
          <a href="#"> Services</a> |
          <a href="#"> Portfolio</a> |
          <a href="#"> News</a> |
          <a href="#"> Contact</a>
        </p>
        <p className="name"> Company Name &copy; 2016</p>
      </div>
    </footer>
  );
};

export default Footer;