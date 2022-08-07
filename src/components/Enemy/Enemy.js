import "./Enemy.css";
import mouseImage from "assets/mouse.png";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import Healthbar from "../Healthbar/Healthbar";
import { damageEnemy } from "slices/enemiesSlice";

function Enemy({ enemy }) {
  const dispatch = useDispatch();
  const selectedCard = useSelector((state) => state.game.selectedCard);

  const { name, health } = enemy;
  const className = cx({
    enemy: true,
    "enemy-attack": !!selectedCard,
  });

  return (
    <div
      className={className}
      onClick={() => {
        if (!selectedCard) return;
        dispatch(damageEnemy({ card: selectedCard, name }));
      }}
    >
      <img className="mouse-image" alt="mouse" src={mouseImage} />
      <div className="enemy-name">{name}</div>
      <div className="enemy-name">Health: {health}</div>
      <Healthbar health={health} maxHealth={12} />
    </div>
  );
}

export default Enemy;
