import './cards.css';
import Card, { CardProps } from 'components/card/card';
import { useAppSelector } from 'redux/redux-typed-hooks';

function Cards() {
  const cards = useAppSelector((state) => state.game.hand);

  return (
    <div className="cards">{cards?.map((card: CardProps, index: number) => <Card key={index} card={card} />)}</div>
  );
}

export default Cards;
