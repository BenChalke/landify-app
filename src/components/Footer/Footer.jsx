import React from 'react';

import '../../styles/Footer.scss';


function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner container">
        <div className="footer__inner__content">
          <img src="logo-sml.svg" alt="Landify logo" />
          <ul>
            <li><a href="#">Download Now</a></li>
            <li><a href="#">License</a></li>
          </ul>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>

          <p>&copy; 2020 Landify UI Kit. All rights reserved</p>
        </div>

        <div className="footer__inner__download">
          <p>Get the App</p>

          <a href="#"><img src="Google-Play-Badge.png" className="img-responsive" alt="Google-Play-Badge" /></a>
          <a href="#"><img src="App-Store-Badge.png" className="img-responsive" alt="App Store Badge" /></a>
        </div>

      </div>
    </div>
  );
}

export default Footer;
