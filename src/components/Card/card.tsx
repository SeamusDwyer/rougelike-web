import './card.css';
import { useDispatch } from 'react-redux';
import { setSelectedCard } from 'slices/gameSlice';
import cx from 'classnames';
import { useAppSelector } from '../../redux/redux-typed-hooks';

export type CardProps = {
  id: string;
  title: string;
  description: string;
  cost: number;
  damage: number;
};

function Card({ card }: { card: CardProps }) {
  const { title, description, cost } = card;

  const isSelected = useAppSelector((state) => title === state.game.selectedCard?.title);
  const dispatch = useDispatch();

  const className = cx({
    card: true,
    'card-active': !!isSelected,
  });

  return (
    <button className={className} onClick={() => dispatch(setSelectedCard({ card }))}>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="cost">{cost}</div>
    </button>
  );
}

export default Card;
