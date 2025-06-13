import { getRegExp } from "korean-regexp";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../RTK/selector";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Search = () => {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  const reg = getRegExp(param);

  const filteredPokemonData = useSelector(selectPokemonByRegExp(reg));
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

export default Search;
