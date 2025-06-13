import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const pokemonData = useSelector((state) =>
    state.pokemon.data.find((p) => p.id === Number(id))
  );
  console.log(pokemonData);

  return (
    <div className="w-full flex justify-center items-center grow bg-[#747474]">
      <div className="px-4 py-12 flex flex-col gap-6 items-center bg-white rounded-xl shadow-[2px_2px_0_2px_#000000]">
        <div className="font-bold text-3xl flex gap-2">
          <span>#{id}</span>
          <span>{pokemonData.name}</span>
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
    </div>
  );
};

export default Detail;
