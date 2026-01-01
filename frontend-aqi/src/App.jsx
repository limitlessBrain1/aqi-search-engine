import React, { useState } from "react";
import AqiCard from "./components/AqiCard";

function App() {
  const [city, setCity] = useState("");
  const [aqiData, setAqiData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAQI = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setAqiData(null);

    try {
      const response = await fetch(
        `https://aqi-backend.onrender.com/api/air-quality?city=${city}`
      );

      if (!response.ok) {
        throw new Error("AQI not found");
      }

      const json = await response.json();

      // 👇 Normalize data for dashboard + charts
      setAqiData({
        city: json.data.city.name,
        aqi: json.data.aqi,
        iaqi: json.data.iaqi || {}
      });

    } catch (err) {
      setError("❌ AQI data not available for this city");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>🌍 Air Quality Dashboard</h1>
        <p>Search air quality with live AQI & charts</p>
      </header>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchAQI()}
        />

        <button onClick={fetchAQI}>
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {aqiData && <AqiCard data={aqiData} />}

      <footer className="footer">
        © {new Date().getFullYear()} Sanika Menkudale. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
