import './enemy.css';
import mouseImage from 'assets/mouse.png';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import Healthbar from 'components/healthbar/healthbar';
import { damageEnemy } from 'slices/enemiesSlice';
import { playCard } from 'slices/gameSlice';
import { useAppSelector } from '../../redux/redux-typed-hooks';

type EnemyProps = {
  id: string;
  name: string;
  health: number;
  maxHealth: number;
};

function Enemy({ enemy }: { enemy: EnemyProps }) {
  const dispatch = useDispatch();
  const selectedCard = useAppSelector((state) => state.game.selectedCard);

  const { id, name, health, maxHealth } = enemy;
  const className = cx({
    enemy: true,
    'enemy-attack': !!selectedCard,
  });

  return (
    <button
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
    </button>
  );
}

export default Enemy;
