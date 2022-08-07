import "./Enemies.css";
import Enemy from "components/Enemy/Enemy";
import { useSelector } from "react-redux";

function Enemies() {
  const enemies = useSelector((state) => state.enemies.enemies);

  return (
    <div className="enemies">
      {Object.keys(enemies).map((name, index) => {
        const enemy = enemies[name];
        return <Enemy key={index} enemy={enemy} />;
      })}
    </div>
  );
}

export default Enemies;
