import './enemies.css';
import Enemy from 'components/enemy/enemy';
import { useAppSelector } from 'redux/redux-typed-hooks';

function Enemies() {
  const enemies = useAppSelector((state) => state.enemies.enemies);

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
