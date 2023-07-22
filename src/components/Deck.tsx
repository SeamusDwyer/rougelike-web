import { useAppSelector } from '../redux/redux-typed-hooks';

function Deck() {
  const deck = useAppSelector((state) => state.game.deck);

  return <div>Deck : {deck.length}</div>;
}

export default Deck;
