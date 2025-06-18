import React, { useEffect } from 'react';
import { FaAtom, FaRobot, FaStarHalfAlt, FaChartBar } from 'react-icons/fa';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const researchers = [
    {
      name: "Alan Turing",
      field: "AI & Computing",
      contribution: "Father of Computer Science and AI",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
    },
    {
      name: "Katherine Johnson",
      field: "Space Mathematics",
      contribution: "Calculations for NASA Space Missions",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Katherine_Johnson_1983.jpg"
    },
    {
      name: "Stephen Hawking",
      field: "Physics & Cosmology",
      contribution: "Black Hole Radiation Theory",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg"
    }
  ];

  const lineChartData = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'AI Research Papers',
        data: [1200, 1800, 2400, 3200, 4000],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4
      }
    ]
  };

  const pieChartData = {
    labels: ['AI & ML', 'Physics', 'Astronomy', 'Pure Math'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0'
      ]
    }]
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Mathematical Research & Innovation</h1>
        <p>Exploring the intersection of Mathematics with AI, Physics, and Astronomy</p>
      </header>

      <section className="research-areas">
        <h2>Key Research Areas</h2>
        <div className="area-cards">
          <div className="area-card">
            <FaRobot className="area-icon" />
            <h3>Artificial Intelligence</h3>
            <p>Mathematical foundations of machine learning and neural networks</p>
          </div>
          <div className="area-card">
            <FaAtom className="area-icon" />
            <h3>Quantum Physics</h3>
            <p>Mathematical models in quantum mechanics and particle physics</p>
          </div>
          <div className="area-card">
            <FaStarHalfAlt className="area-icon" />
            <h3>Astronomy</h3>
            <p>Mathematical analysis of celestial phenomena and space exploration</p>
          </div>
        </div>
      </section>

      <section className="researchers-section">
        <h2>Notable Researchers</h2>
        <div className="researcher-cards">
          {researchers.map((researcher, index) => (
            <div className="researcher-card" key={index}>
              <img src={researcher.image} alt={researcher.name} />
              <h3>{researcher.name}</h3>
              <p className="field">{researcher.field}</p>
              <p className="contribution">{researcher.contribution}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="statistics-section">
        <h2>Research Statistics</h2>
        <div className="charts-container">
          <div className="chart">
            <h3>Research Growth</h3>
            <Line data={lineChartData} />
          </div>
          <div className="chart">
            <h3>Field Distribution</h3>
            <Pie data={pieChartData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;