import Card from "../components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById, fetchPokemonId } from "../RTK/thunk";

const Home = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon.data);
  const pokemonIdList = useSelector((state) => state.pokemonId.data);
  console.log("pokemonData : ", pokemonData);

  useEffect(() => {
    dispatch(fetchPokemonId());
  }, [dispatch]);

  useEffect(() => {
    if (pokemonIdList.length > 0) {
      dispatch(fetchMultiplePokemonById(pokemonIdList));
    }
  }, [dispatch, pokemonIdList]);

  return (
    <section className="py-5 flex flex-wrap justify-center gap-12 grow bg-[#747474]">
      {pokemonData.length > 0 &&
        pokemonData.map((el) => (
          <Card
            key={el.id}
            id={`${el.id}`.padStart(3, "0")}
            color={el.color}
            name={el.name}
            sprite={el.sprites.front_default}
          />
        ))}
    </section>
  );
};

export default Home;
