import { Link } from "react-router-dom";
import HeartIcon from "../images/heart.svg?react";
import HeartFillIcon from "../images/heart_fill.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../RTK/slice";
import { memo } from "react";

const Card = memo(({ id, color, name, sprite }) => {
  const favoritesList = useSelector((state) => state.favorites.list);
  const dispatch = useDispatch();

  const handleFavorite = (event, id) => {
    event.preventDefault();
    if (favoritesList.includes(id)) {
      dispatch(remove(id));
    } else {
      dispatch(add(id));
    }
  };

  return (
    <Link to={`/detail/${id}`}>
      <div className="relative w-50 py-4 relative bg-white flex flex-col items-center shrink-0 rounded-xl shadow-[2px_2px_0_2px_#000000] cursor-pointer duration-300 ease-out hover:scale-110">
        <img src={sprite} width="150" />
        <div className="w-fit h-fit border border-solid border-gray-300 flex justify-center items-center rounded-xl">
          <span
            className="px-3 py-0.5 font-semibold rounded-xl border-r border-solid border-gray-300"
            style={{
              backgroundColor: `${color}`,
              color: `${
                color === "black" ||
                color === "blue" ||
                color === "purple" ||
                color === "brown"
                  ? "#D1D5DC"
                  : "black"
              }`,
            }}>
            {id}
          </span>
          <span className="px-3">{name}</span>
        </div>
        <button
          type="button"
          className="w-fit h-fit p-2 absolute top-1 right-1 cursor-pointer"
          onClick={(e) => handleFavorite(e, id)}>
          {favoritesList.includes(id) ? (
            <HeartFillIcon fill="#fff" className="w-8 h-8 fill-rose-500" />
          ) : (
            <HeartIcon className="w-8 h-8 fill-gray-300" />
          )}
        </button>
      </div>
    </Link>
  );
});

export default Card;
