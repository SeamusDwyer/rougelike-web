import "./Healthbar.css";

function Healthbar({ health, maxHealth = health }) {
  const fraction = (health / maxHealth) * 10;

  return (
    <div className="health-bar">
      <div className="red-health">
        <div style={{ width: `${fraction}vw` }} className="green-health" />
      </div>
    </div>
  );
}

export default Healthbar;
