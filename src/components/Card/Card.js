import "./Card.css";
import { useDispatch } from "react-redux";
import { setSelectedCard } from "slices/gameSlice";
import { useSelector } from "react-redux";
import cx from "classnames";

function Card({ card }) {
  const { title, description, cost } = card;

  const isSelected = useSelector(
    (state) => title === state.game.selectedCard?.title
  );
  const dispatch = useDispatch();

  const className = cx({
    card: true,
    "card-active": !!isSelected,
  });

  return (
    <div
      className={className}
      onClick={() => dispatch(setSelectedCard({ card }))}
    >
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="cost">{cost}</div>
    </div>
  );
}

export default Card;
