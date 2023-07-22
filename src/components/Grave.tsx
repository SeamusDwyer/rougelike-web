import { useAppSelector } from 'redux/redux-typed-hooks';

function Grave() {
  const grave = useAppSelector((state) => state.game.grave);

  return <div>Grave : {grave.length}</div>;
}

export default Grave;
