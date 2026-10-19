import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

/**
 * Main App Component
 * Composes all portfolio components, manages active section state,
 * and passes props down to child components (Header, Skills, NavBar).
 */
function App() {
  // Student Data (as per Practical specifications)
  const studentName = 'Parth Patel';
  const themeAccentColor = '#2563eb'; // Clean Royal Blue accent

  // Active section tracking for navigation highlighting
  const [activeSection, setActiveSection] = useState('about');

  // Skills dataset passed as props to Skills component
  const studentSkills = [
    {
      id: 'skill-1',
      name: 'Python & Scientific Computing',
      category: 'Core Programming',
      level: 90,
      description: 'NumPy, Pandas, Matplotlib, and core algorithmic problem solving.',
      icon: '🐍',
    },
    {
      id: 'skill-2',
      name: 'Machine Learning & Scikit-Learn',
      category: 'AI & Data Science',
      level: 85,
      description: 'Supervised & unsupervised learning, regression, classification, clustering.',
      icon: '🤖',
    },
    {
      id: 'skill-3',
      name: 'Deep Learning & Neural Networks',
      category: 'Artificial Intelligence',
      level: 75,
      description: 'TensorFlow, Keras fundamentals, CNNs, and NLP preprocessing.',
      icon: '🧠',
    },
    {
      id: 'skill-4',
      name: 'React.js & Modern JavaScript',
      category: 'Web Development',
      level: 80,
      description: 'Functional components, hooks, JSX, props, and modern ES6+ syntax.',
      icon: '⚛️',
    },
    {
      id: 'skill-5',
      name: 'Data Science & Analytics',
      category: 'Analytics',
      level: 85,
      description: 'Exploratory data analysis (EDA), data cleaning, feature engineering.',
      icon: '📊',
    },
    {
      id: 'skill-6',
      name: 'HTML5, CSS3 & Responsive Design',
      category: 'Frontend Engineering',
      level: 90,
      description: 'Semantic markup, Flexbox, CSS Grid, mobile-first responsive layouts.',
      icon: '🎨',
    },
    {
      id: 'skill-7',
      name: 'SQL & Relational Databases',
      category: 'Database Systems',
      level: 80,
      description: 'Complex queries, schema design, joins, indexing, and data normalization.',
      icon: '🗄️',
    },
    {
      id: 'skill-8',
      name: 'Git, GitHub & Version Control',
      category: 'Software Engineering',
      level: 85,
      description: 'Branching strategies, collaborative workflows, and open-source practices.',
      icon: '🐙',
    },
  ];

  // Lightweight scroll spy to automatically highlight active navigation item
  useEffect(() => {
    const sectionIds = ['about', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for navbar height

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      {/* 5. NavBar with active section highlighting */}
      <NavBar
        activeSection={activeSection}
        onNavClick={(id) => setActiveSection(id)}
      />

      {/* 1. Header with dynamic props: name & themeColor (applied via inline style) */}
      <Header
        name={studentName}
        themeColor={themeAccentColor}
      />

      {/* Main content body */}
      <main className="main-content">
        {/* 2. About section with student bio */}
        <About />

        {/* 3. Skills section receiving skillList array via props & mapped dynamically */}
        <Skills
          skillList={studentSkills}
        />

        {/* 6. Projects section with 3 student projects */}
        <Projects />
      </main>

      {/* 4. Footer with contact info placeholders and copyright */}
      <Footer />
    </div>
  );
}

export default App;
