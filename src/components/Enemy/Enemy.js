import "./Enemy.css";
import mouseImage from "assets/mouse.png";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import Healthbar from "../Healthbar/Healthbar";
import { damageEnemy } from "slices/enemiesSlice";
import { playCard } from "slices/gameSlice";
function Enemy({ enemy }) {
  const dispatch = useDispatch();
  const selectedCard = useSelector((state) => state.game.selectedCard);

  const { id, name, health, maxHealth } = enemy;
  const className = cx({
    enemy: true,
    "enemy-attack": !!selectedCard,
  });

  return (
    <div
      className={className}
      onClick={() => {
        if (!selectedCard) return;
        dispatch(damageEnemy({ card: selectedCard, id }));
        dispatch(playCard(selectedCard));
      }}
    >
      <img className="mouse-image" alt="mouse" src={mouseImage} />
      <div className="enemy-name">{name}</div>
      <div className="enemy-name">Health: {health}</div>
      <Healthbar health={health} maxHealth={maxHealth} />
    </div>
  );
}

export default Enemy;
