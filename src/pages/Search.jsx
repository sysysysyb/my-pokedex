import { getRegExp } from "korean-regexp";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../RTK/selector";
import { useSelector } from "react-redux";

const Search = () => {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  const reg = getRegExp(param);

  const pokemon = useSelector(selectPokemonByRegExp(reg));
  console.log(pokemon);

  return <div>Search Page</div>;
};

export default Search;
