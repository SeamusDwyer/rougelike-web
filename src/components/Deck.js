import { useSelector } from "react-redux";

function Deck() {
  const deck = useSelector((state) => state.game.deck);

  return <div>Deck : {deck.length}</div>;
}

export default Deck;
