import React from 'react';
import { FaCalculator, FaChartLine, FaCode, FaBrain } from 'react-icons/fa';

const About = () => {
  const cards = [
    {
      icon: <FaCalculator />,
      title: "Advanced Mathematics",
      description: "Application of complex mathematical concepts including differential equations, linear algebra, and numerical analysis to solve real-world engineering problems."
    },
    {
      icon: <FaChartLine />,
      title: "Data Analysis",
      description: "Statistical modeling, data visualization, and predictive analytics to extract meaningful insights from complex datasets."
    },
    {
      icon: <FaCode />,
      title: "Scientific Computing",
      description: "Implementation of mathematical algorithms using programming languages like Python, MATLAB, and R for solving engineering challenges."
    },
    {
      icon: <FaBrain />,
      title: "Problem Solving",
      description: "Developing innovative solutions through mathematical modeling and optimization techniques."
    }
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">Mathematical Engineering</h1>
      <p className="about-description">
        Mathematical Engineering combines advanced mathematics with engineering principles
        to solve complex real-world problems. Our approach integrates theoretical foundations
        with practical applications.
      </p>
      
      <div className="cards-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
