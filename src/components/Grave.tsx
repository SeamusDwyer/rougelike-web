import { useSelector } from "react-redux";

function Grave() {
  const grave = useSelector((state) => state.game.grave);

  return <div>Grave : {grave.length}</div>;
}

export default Grave;
