import './game.css';
import catImage from 'assets/cat.png';
import { resetGame, generateDeck, dealHand } from 'slices/gameSlice';
import Cards from 'components/cards/cards';
import Enemies from 'components/enemies/enemies';
import { generateEnemies } from 'slices/enemiesSlice';
import Healthbar from 'components/healthbar/healthbar';
import Deck from 'components/deck';
import Grave from 'components/grave';
import { useAppDispatch, useAppSelector } from '../../redux/redux-typed-hooks';
import { nextPhase } from 'slices/phaseSlice';

function Game() {
  const catHealth = useAppSelector(({ game: { playerHealth } }) => playerHealth);
  const phase = useAppSelector(({ phase: { phase } }) => phase);
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
      <div>{phase}</div>
      <button
        onClick={() => {
          dispatch(nextPhase());
        }}
      >
        Next Phase
      </button>
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
