import Card from "../components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "../RTK/thunk";

const Home = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon.data);
  console.log(pokemonData);

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [dispatch]);

  return (
    <section className="px-16 py-8 flex flex-wrap justify-center gap-12 bg-[#747474]">
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
