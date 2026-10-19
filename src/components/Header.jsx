import React from 'react';

/**
 * Header Component
 * Displays the portfolio title, student name, and applies the dynamic themeColor prop via inline style.
 * 
 * @param {Object} props
 * @param {string} props.name - Student Name
 * @param {string} props.themeColor - Accent color applied via inline style
 */
function Header({ name, themeColor }) {
  return (
    <header className="header-container" style={{ borderTop: `5px solid ${themeColor}` }}>
      <div className="header-content">
        <div className="header-badge" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>
          Computer Science & Engineering
        </div>
        <h1 className="header-title">
          Hi, I'm <span className="highlight-name" style={{ color: themeColor }}>{name}</span>
        </h1>
        <p className="header-subtitle">
          Student & Aspiring Software Engineer | Specializing in AI, ML & Web Technologies
        </p>
        <div className="header-cta-group">
          <a href="#projects" className="btn btn-primary" style={{ backgroundColor: themeColor }}>
            View My Projects
          </a>
          <a href="#contact" className="btn btn-outline" style={{ borderColor: themeColor, color: themeColor }}>
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
