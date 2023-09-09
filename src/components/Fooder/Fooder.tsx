import React from 'react';
import '../css/Fooder.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Portafolio </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100032686640633" target="_blank" rel="noopener noreferrer">
            <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/jaime_17ja/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Twitter" />
          </a>
          <a href="https://github.com/jaime221" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/jaime-perez-4728bb283/" target="_blank" rel="noopener noreferrer">
            <img src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
