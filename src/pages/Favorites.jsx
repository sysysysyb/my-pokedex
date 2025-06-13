import { selectPokemonByFavorites } from "../RTK/selector";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Favorites = () => {
  const favoritesList = useSelector((state) => state.favorites.list);
  const filteredPokemonData = useSelector(selectPokemonByFavorites);
  console.log(favoritesList);
  console.log(filteredPokemonData);

  return (
    <section className="px-16 py-8 flex flex-wrap justify-center gap-12 grow bg-[#747474]">
      {filteredPokemonData.length > 0 &&
        filteredPokemonData.map((el) => (
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

export default Favorites;
