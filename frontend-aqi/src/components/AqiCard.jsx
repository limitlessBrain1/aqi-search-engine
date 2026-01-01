import React from "react";
import AqiChart from "./AqiChart";

function getAqiStatus(aqi) {
  if (aqi <= 50) return { label: "Good 😊", color: "#2ecc71" };
  if (aqi <= 100) return { label: "Moderate 😐", color: "#f1c40f" };
  if (aqi <= 200) return { label: "Poor 😷", color: "#e67e22" };
  return { label: "Very Poor ☠️", color: "#e74c3c" };
}

const AqiCard = ({ data }) => {
  const status = getAqiStatus(data.aqi);

  return (
    <div className="aqi-card">
      <h2>{data.city}</h2>

      <div
        className="aqi-value"
        style={{ background: status.color }}
      >
        AQI: {data.aqi}
      </div>

      <p className="aqi-status">{status.label}</p>

      <div className="pollutants">
        <h3>Pollutants</h3>
        {Object.entries(data.iaqi).map(([key, value]) => (
          <div key={key} className="pollutant">
            <span>{key.toUpperCase()}</span>
            <span>{value.v}</span>
          </div>
        ))}
      </div>
      <AqiChart iaqi={data.iaqi} />
    </div>
  );
};

export default AqiCard;