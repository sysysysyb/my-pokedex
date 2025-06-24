import { useDispatch, useSelector } from "react-redux";
import { selectPokemonById } from "../RTK/selector";
import HeartIcon from "../images/heart.svg?react";
import HeartFillIcon from "../images/heart_fill.svg?react";
import { add, remove } from "../RTK/slice";
import { useEffect, useState } from "react";
import POKEMON_TYPE_LIST from "../constants/POKEMON_TYPE_LIST";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const [showShiny, setShowShiny] = useState(false);
  const selectedId = useSelector((state) => state.selectedPokemon?.id);
  const pokemonData = useSelector(selectPokemonById(selectedId));
  const favoritesList = useSelector((state) => state.favorites.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  const returnPath = state?.from || "/";
  const isLgScreen = useMediaQuery({ query: "(max-width: 1023px)" });

  const handleFavorite = (event, id) => {
    event.preventDefault();
    if (favoritesList.includes(id)) {
      dispatch(remove(id));
    } else {
      dispatch(add(id));
    }
  };

  useEffect(() => {
    setShowShiny(false);
  }, [pokemonData]);

  useEffect(() => {
    if (!pathname.startsWith("/detail")) return;

    if (!isLgScreen) {
      console.log(returnPath);
      returnPath === "/"
        ? navigate(returnPath, { state: { fromDetailId: selectedId } })
        : navigate(returnPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLgScreen, returnPath]);

  if (!pokemonData)
    return (
      <div className="h-full flex justify-center items-center">Loading...</div>
    );

  return (
    <aside className="lg:pt-0 lg:pb-20 w-full h-full sm:absolute z-1 sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white">
      <div className="hidden lg:block w-full pl-4 py-2 mb-4 bg-red-500 text-xl text-white border-b-3 border-solid border-black shadow-[0px_5px_5px_1px_#00000015]">
        설명
      </div>
      <div className="h-full flex flex-col justify-center sm:flex-row items-center px-5">
        <div className="flex justify-center items-center sm:block">
          <div
            style={{ display: showShiny ? "none" : "inline-grid" }}
            className="perspective-midrange transform-3d rotate-y-0 duration-300 hover:perspective-midrange hover:rotate-y-180">
            <img
              className="p-2 backface-hidden row-start-1 col-start-1 row-end-1 col-end-1"
              src={pokemonData.sprites.front_default}
              alt="default"
              width="250"
            />
            <img
              className="p-2 rotate-y-180 backface-hidden row-start-1 col-start-1 row-end-1 col-end-1"
              src={pokemonData.sprites.back_default}
              alt="default"
              width="250"
            />
          </div>
          <div
            style={{ display: showShiny ? "inline-grid" : "none" }}
            className="p-2 perspective-midrange transform-3d rotate-y-0 duration-300 hover:perspective-midrange hover:rotate-y-180">
            <img
              className="backface-hidden row-start-1 col-start-1 row-end-1 col-end-1"
              src={pokemonData.sprites.front_shiny}
              alt="shiny"
              width="250"
            />
            <img
              className="p-2 rotate-y-180 backface-hidden row-start-1 col-start-1 row-end-1 col-end-1"
              src={pokemonData.sprites.back_shiny}
              alt="shiny"
              width="250"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <button
              onClick={() => setShowShiny(false)}
              className="px-2 py-1 text-gray-500 border-3 border-solid border-gray-300 rounded-lg cursor-pointer hover:bg-gray-300 hover:text-white">
              default
            </button>
            <button
              onClick={() => setShowShiny(true)}
              className="px-2 py-1 text-gray-500 border-3 border-solid border-gray-300 rounded-lg cursor-pointer hover:bg-gray-300 hover:text-white">
              shiny
            </button>
          </div>
        </div>
        <div className="sm:basis-3/5 flex flex-col gap-5 lg:gap-10">
          <div className="shadow-[5px_5px_5px_1px_#00000015] w-full border border-solid border-gray-300 rounded-lg">
            <div className="w-full pl-5 bg-red-400 flex items-center gap-3 text-white text-lg rounded-t-lg">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="w-fit h-fit p-1 cursor-pointer"
                  onClick={(e) =>
                    handleFavorite(e, String(selectedId).padStart(3, "0"))
                  }>
                  {favoritesList.includes(
                    String(selectedId).padStart(3, "0")
                  ) ? (
                    <HeartFillIcon
                      fill="#fff"
                      className="w-8 h-8 fill-rose-600"
                    />
                  ) : (
                    <HeartIcon className="w-8 h-8 fill-white" />
                  )}
                </button>
                <span>{String(selectedId).padStart(3, "0")}</span>
              </div>
              <span>{pokemonData.name}</span>
            </div>
            <div className="pr-5 flex justify-end p-2 rounded-b-lg bg-white">
              <span className="">{pokemonData.genus}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 flex gap-2">
              {pokemonData.types.map((type, idx) => (
                <div
                  key={idx}
                  className="p-1 flex-1 rounded-lg flex justify-center items-center"
                  style={{
                    boxShadow: `5px 5px 5px 1px ${POKEMON_TYPE_LIST[type]}50`,
                    background: POKEMON_TYPE_LIST[type],
                  }}>
                  {type}
                </div>
              ))}
            </div>
            <div className="shadow-[5px_5px_5px_1px_#00000015] rounded-lg flex-1 text-center border border-solid border-gray-300">
              <div className="border-b border-dotted border-gray-600">
                키 : {pokemonData.height / 10}m
              </div>
              <div>몸무게 : {pokemonData.weight / 10}kg</div>
            </div>
          </div>
          <div className="rounded-lg mb-2 p-2 border-x-10 border-y-2 border-solid border-red-400 shadow-[5px_5px_5px_1px_#00000015]">
            {pokemonData.desc}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Detail;
