import React from 'react';

/**
 * Projects Component
 * Displays a hardcoded list of three student projects reflecting AI, ML, and Software Development.
 */
function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'Smart Resume NLP Parser',
      category: 'Artificial Intelligence & NLP',
      description:
        'An intelligent document processing application that parses PDF resumes, extracts candidate skills and education, and matches candidates against target job descriptions using TF-IDF and cosine similarity.',
      tags: ['Python', 'spaCy', 'NLP', 'Streamlit', 'Scikit-Learn'],
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Student Academic Performance Predictor',
      category: 'Machine Learning & Data Science',
      description:
        'A predictive analytics web application utilizing supervised machine learning algorithms to assess early indicators of student performance and suggest timely academic interventions.',
      tags: ['Python', 'Pandas', 'Random Forest', 'Flask', 'Chart.js'],
      status: 'Completed',
    },
    {
      id: 3,
      title: 'Algorithm & Data Structure Visualizer',
      category: 'Software Development & React',
      description:
        'An interactive single-page application built to help computer science students visualize sorting (QuickSort, MergeSort) and pathfinding (Dijkstra, A*) algorithms step-by-step with real-time controls.',
      tags: ['React', 'JavaScript', 'HTML5 Canvas', 'CSS3'],
      status: 'Active',
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-badge">Portfolio Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
        <p className="section-description">
          A selection of academic and practical projects focused on artificial intelligence, data science, and modern web engineering.
        </p>
      </div>

      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-header">
              <span className="project-category">{project.category}</span>
              <span className={`project-status-badge status-${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-footer">
              <a href="#projects" className="project-link" onClick={(e) => e.preventDefault()}>
                View Details &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
