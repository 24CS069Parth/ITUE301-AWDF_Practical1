import React from 'react';

/**
 * About Component
 * Displays student background, academic focus, and core technical interests.
 */
function About() {
  const highlights = [
    { title: 'Academic Focus', value: 'B.Tech Computer Science' },
    { title: 'Current Year', value: '3rd Year (Semester 5)' },
    { title: 'Primary Domains', value: 'AI / ML & Full Stack' },
    { title: 'Goal', value: 'Software Development Engineer' },
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <span className="section-badge">Get to Know Me</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-grid">
        <div className="about-bio-card">
          <h3>Hello! I'm Parth Patel</h3>
          <p className="about-paragraph">
            I am a dedicated Computer Science student with a passionate drive for creating intelligent,
            user-centric, and scalable software solutions. My academic journey combines foundational computer science
            principles with hands-on modern software development practices.
          </p>
          <p className="about-paragraph">
            My primary technical interests encompass <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, 
            <strong> Data Science</strong>, and <strong>Full-Stack Software Development</strong>. I enjoy exploring algorithms,
            building data-driven web applications, and experimenting with modern frontend frameworks like React.
          </p>
          <p className="about-paragraph">
            When I'm not writing code or experimenting with neural models, I actively explore emerging web standards,
            contribute to student technical workshops, and collaborate with peers on impactful projects.
          </p>
        </div>

        <div className="about-highlights-card">
          <h3>Key Highlights</h3>
          <div className="highlights-list">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <span className="highlight-title">{item.title}</span>
                <span className="highlight-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="interests-box">
            <h4>Core Areas of Interest</h4>
            <div className="interest-tags">
              <span className="interest-tag">🤖 Artificial Intelligence</span>
              <span className="interest-tag">📊 Machine Learning</span>
              <span className="interest-tag">📈 Data Science</span>
              <span className="interest-tag">💻 Software Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
