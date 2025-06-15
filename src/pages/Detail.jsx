import { useDispatch, useSelector } from "react-redux";
import { selectPokemonById } from "../RTK/selector";
import HeartIcon from "../images/heart.svg?react";
import HeartFillIcon from "../images/heart_fill.svg?react";
import { add, remove } from "../RTK/slice";

const Detail = () => {
  const selectedId = useSelector((state) => state.selectedPokemon?.id);
  const pokemonData = useSelector(selectPokemonById(selectedId));
  const favoritesList = useSelector((state) => state.favorites.list);
  const dispatch = useDispatch();
  console.log(pokemonData);

  const handleFavorite = (event, id) => {
    event.preventDefault();
    if (favoritesList.includes(id)) {
      dispatch(remove(id));
    } else {
      dispatch(add(id));
    }
  };

  if (!pokemonData) return <div>Loading...</div>;

  return (
    <aside className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center grow bg-white">
      <div className="px-4 py-12 flex flex-col gap-6 items-center bg-white rounded-xl shadow-[2px_2px_0_2px_#000000]">
        <div className="font-bold text-3xl flex items-center gap-3">
          <span>#{selectedId}</span>
          <span>{pokemonData.name}</span>
          <button
            type="button"
            className="w-fit h-fit p-1 cursor-pointer"
            onClick={(e) => handleFavorite(e, selectedId)}>
            {favoritesList.includes(selectedId) ? (
              <HeartFillIcon fill="#fff" className="w-10 h-10 fill-rose-500" />
            ) : (
              <HeartIcon className="w-10 h-10 fill-gray-300" />
            )}
          </button>
        </div>
        <div className="font-semibold text-md text-center whitespace-pre-wrap">
          {pokemonData.desc}
        </div>
        <div className="flex">
          <div className="inline-grid perspective-midrange transform-3d rotate-y-0 duration-300 hover:perspective-midrange hover:rotate-y-180">
            <img
              className="backface-hidden row-start-1 col-start-1 row-end-1 col-end-1"
              src={pokemonData.sprites.front_default}
              alt="default"
              width="200"
            />
            <img
              className="rotate-y-180 backface-hidden row-start-1 col-start-1 row-end-1 col-end-1"
              src={pokemonData.sprites.back_default}
              alt="default"
              width="200"
            />
          </div>
          <div className="inline-grid perspective-midrange transform-3d rotate-y-0 duration-300 hover:perspective-midrange hover:rotate-y-180">
            <img
              className="backface-hidden row-start-1 col-start-1 row-end-1 col-end-1"
              src={pokemonData.sprites.front_shiny}
              alt="shiny"
              width="200"
            />
            <img
              className="rotate-y-180 backface-hidden row-start-1 col-start-1 row-end-1 col-end-1"
              src={pokemonData.sprites.back_shiny}
              alt="shiny"
              width="200"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Detail;
