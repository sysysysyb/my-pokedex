import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const pokemon = useSelector((state) =>
    state.pokemon.data.find((p) => p.id === Number(id))
  );
  console.log(pokemon);

  return <div>Detail Page : {id}</div>;
};

export default Detail;
