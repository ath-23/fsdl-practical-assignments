import React from 'react';
import { useState } from 'react';
import { AQIChart } from './components/AQIChart';
import { LineChart } from './components/LineChart';
import { BarChart } from './components/BarChart';
import { DoughnutChart } from './components/DoughnutChart'; 
import { Wind, Droplets, Sun, CloudRain } from 'lucide-react';
import './App.css';

const cityData = {
  "Mumbai": {
    temp: [22, 24, 27, 30, 28, 25, 23],
    rain: [2, 0, 15, 5, 1, 0, 0],
    humidity: 62,
    wind: 14,
    aqi: [160, 172, 185, 190, 155, 140, 130]
  },
  "London": {
    temp: [8, 9, 11, 10, 8, 6, 5],
    rain: [10, 12, 5, 20, 15, 8, 12],
    humidity: 85,
    wind: 22,
    aqi: [40, 45, 50, 48, 42, 38, 35]
  },
  "New York": {
    temp: [2, 4, 6, 5, 3, 1, -2],
    rain: [0, 2, 0, 5, 0, 10, 5],
    humidity: 45,
    wind: 18,
    aqi: [55, 60, 65, 70, 62, 58, 50]
  }
};

function App() {

  const [activeCity, setActiveCity] = useState("Mumbai");
  const current = cityData[activeCity];

  return (
    <div className="dashboard-container">
      <header className="header">
        <div>
          <h1>SkyCast</h1>
          <div className="location">{activeCity} • 19:00 PM</div>
        </div>

        {/* City Selection Dropdown */}
        <select value={activeCity} onChange={(e) => setActiveCity(e.target.value)} className="city-selector">
          <option value="Mumbai">Mumbai</option>
          <option value="London">London</option>
          <option value="New York">New York</option>
        </select>
      </header>

      <div className="bento-grid">
        <div className="tile tall wide">
          <h3>Temperature Forecast</h3>
          <div className="chart-holder">
            <LineChart dataValues={current.temp} />
          </div>
        </div>

        {/* Small Stat Tiles */}
        <div className="tile small">
          <div className="icon-row"><Wind color="#3b82f6" /> <span>Wind</span></div>
          <h2>{current.wind} <small>km/h</small></h2>
        </div>

        <div className="tile small">
          <div className="icon-row"><Droplets color="#06b6d4" /> <span>Humidity</span></div>
          <div className="chart-holder">
            <DoughnutChart percent={current.humidity} label="Humidity" color="#06b6d4" />
          </div>
        </div>

        <div className="tile wide">
          <h3>Weekly Precipitation</h3>
          <div className="chart-holder">
            <BarChart dataValues={current.rain} />
          </div>
        </div>

        {/* UV Index / Air Quality */}
        <div className="tile small">
          <div className="icon-row"><Sun color="#f59e0b" /> <span>UV Index</span></div>
          <h2>4 <small>Moderate</small></h2>
          <div className="uv-bar"></div>
        </div>

        {/*aqi chart*/}
        <div className="tile aqi-container">
          <div className="icon-row"><CloudRain color="#10b981" /> <span>Weekly AQI</span></div>
          <div className="chart-holder" style={{ marginTop: '10px' }}>
            <AQIChart dataValues={current.aqi} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;