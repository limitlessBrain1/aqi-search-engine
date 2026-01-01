function PollutantCard({ pollutants }) {
  if (!pollutants) return null;

  return (
    <div className="pollutants">
      <h3>Pollutants</h3>
      <div className="pollutant-grid">
        {Object.entries(pollutants).map(([key, value]) => (
          <div className="pollutant" key={key}>
            <span>{key.toUpperCase()}</span>
            <strong>{value.v}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PollutantCard;
