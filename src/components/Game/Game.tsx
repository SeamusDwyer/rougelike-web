import './Game.css';
import catImage from 'assets/cat.png';
import { resetGame, generateDeck, dealHand } from 'slices/gameSlice';
import Cards from 'components/cards/cards';
import Enemies from 'components/Enemies/Enemies';
import { generateEnemies } from 'slices/enemiesSlice';
import Healthbar from 'components/Healthbar/Healthbar';
import Deck from 'components/Deck';
import Grave from 'components/Grave';
import { useAppDispatch, useAppSelector } from '../../redux/redux-typed-hooks';

function Game() {
  const catHealth = useAppSelector((state) => {
    return state.game.playerHealth;
  });

  const dispatch = useAppDispatch();

  return (
    <div className="main">
      <div className="battlefield">
        <div className="cat">
          <div>Cat</div>
          <img className="cat-image" alt="cat" src={catImage} />
          {catHealth}
          <Healthbar health={catHealth} maxHealth={10} />
        </div>
        <Enemies />
      </div>

      <Cards />
      <Deck />
      <Grave />
      <div>
        <button
          onClick={() => {
            dispatch(resetGame());
          }}
        >
          Reset Game
        </button>

        <button
          onClick={() => {
            dispatch(generateDeck());
          }}
        >
          Generate Deck
        </button>

        <button
          onClick={() => {
            dispatch(dealHand());
          }}
        >
          Deal Hand
        </button>

        <button
          onClick={() => {
            dispatch(generateEnemies());
          }}
        >
          Generate Enemies
        </button>
      </div>
    </div>
  );
}

export default Game;
