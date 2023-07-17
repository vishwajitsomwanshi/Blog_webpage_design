import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="foot-panel">
      <div className="first-foot-panel common-props">
        <div className="panel">
          <div className="panel-content">
            <p className="content-heading">ABOUT</p>
            <p className="des">
              Blogpageclone code wants to be simple is an initiative to help the
              upcoming programmers with the code. Scanfcode focuses on providing
              the most efficient code or snippets as the code wants to be
              simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </div>
        </div>
        <div className="panel">
          <div className="panel-content">
            <p className="content-heading">CATEGORIES</p>
            <div className="foot-panel-ops">
              <li>C</li>
              <li>UI Design</li>
              <li>PHP</li>
              <li>Java</li>
              <li>Android</li>
              <li>Templates</li>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-content">
            <p className="content-heading">QUICK LINKS</p>
            <div className="foot-panel-ops">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Contribute</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
            </div>
          </div>
        </div>
      </div>
      <div className="second-foot-panel common-props">
        <div className="des">
          <p>Copyright © 2023 All Rights Reserved by Blogpageclone.</p>
        </div>
        <div className="social-links des">
          <div>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
          </div>
          <div>
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>
          </div>
          <div>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
          </div>
          <div>
            <li>
              <i class="fa-brands fa-linkedin-in"></i>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
