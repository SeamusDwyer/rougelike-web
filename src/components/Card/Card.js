import "./Card.css";
import { useDispatch } from "react-redux";
import { setSelectedCard } from "slices/gameSlice";

function Card({ card }) {
  const dispatch = useDispatch();
  const { title, description, cost } = card;
  return (
    <div className="card" onClick={() => dispatch(setSelectedCard({ card }))}>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="cost">{cost}</div>
    </div>
  );
}

export default Card;
