import React from 'react';

/**
 * Footer Component
 * Displays student contact details (using placeholders as requested) and copyright information.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand-column">
            <h3 className="footer-brand-title">Parth Patel</h3>
            <p className="footer-bio-summary">
              Computer Science student exploring the frontiers of Artificial Intelligence,
              Machine Learning, Data Science, and modern Software Development.
            </p>
            <div className="footer-academic-tag">
              Practical 1: ITUE301 — Component Architecture
            </div>
          </div>

          <div className="footer-contact-column">
            <h4>Contact Information</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-label">Email:</span>
                <span className="contact-value">student.parth@university.edu (Placeholder)</span>
              </li>
              <li>
                <span className="contact-label">GitHub:</span>
                <span className="contact-value">github.com/placeholder-parth</span>
              </li>
              <li>
                <span className="contact-label">LinkedIn:</span>
                <span className="contact-value">linkedin.com/in/placeholder-parth</span>
              </li>
              <li>
                <span className="contact-label">Location:</span>
                <span className="contact-value">University Campus, Computer Science Dept.</span>
              </li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Quick Links</h4>
            <ul className="footer-nav-list">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills & Expertise</a></li>
              <li><a href="#projects">Student Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Parth Patel. All Rights Reserved. Built with React &amp; Vite.
          </p>
          <p className="footer-subtext">
            ITUE301: Application Web Development Frameworks &mdash; Practical 1
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
