import './healthbar.css';

type HealthbarProps = {
  health: number;
  maxHealth: number;
};

function Healthbar({ health, maxHealth }: HealthbarProps) {
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
