import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById, fetchPokemonId } from "../RTK/thunk";
import { setSelected } from "../RTK/slice";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const pokemonIdList = useSelector((state) => state.pokemonId.data);
  const pokemonData = useSelector((state) => state.pokemonHome.data);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const selectedId = state?.fromDetailId ?? 1;
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    dispatch(fetchPokemonId());
    console.log("dispatch(fetchPokemonId())");
  }, [dispatch]);

  useEffect(() => {
    if (!inView || loading || !hasMore || pokemonIdList.length === 0) return;

    const getCurrentData = async () => {
      console.log("렌더링");
      const dataNum = 30;
      setLoading(true);
      console.log("setLoading(true)");
      const currentIdList = pokemonIdList.slice(
        page * dataNum,
        page * dataNum + dataNum
      );
      try {
        await dispatch(fetchMultiplePokemonById(currentIdList)).unwrap();
        console.log("dispatch(fetchMultiplePokemonById(currentIdList))");
        dispatch(setSelected(selectedId));
        console.log("setSelected(selectedId)");
        setPage((prev) => prev + 1);
        console.log("setPage((prev) => prev + 1)");
        if (dataNum > currentIdList.length) setHasMore(false);
        console.log("if (dataNum > currentIdList.length) setHasMore(false)");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCurrentData();
  }, [dispatch, inView, pokemonIdList]);

  // if (pokemonData.length === 0) return;

  return (
    <section className="py-5 bg-white">
      <div className="flex flex-wrap justify-center">
        {pokemonData.length > 0 &&
          pokemonData.map((el, idx) => (
            <Card
              key={el.id}
              id={`${(idx + 1).toString().padStart(3, "0")}`}
              color={el.color}
              name={el.name}
              sprite={el.sprites?.front_default}
            />
          ))}
        {hasMore && <div ref={ref} className="w-full h-10"></div>}
      </div>
    </section>
  );
};

export default Home;
