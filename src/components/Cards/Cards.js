import "./Cards.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

function Cards() {
  const cards = useSelector((state) => state.game.hand);

  return (
    <div className="cards">
      {cards?.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

export default Cards;
