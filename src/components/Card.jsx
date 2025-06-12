import { Link } from "react-router-dom";

const Card = ({ id, color, name, sprite }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="w-50 py-4 bg-white flex flex-col items-center shrink-0 rounded-xl shadow-[2px_2px_0_2px_#000000] cursor-pointer duration-300 ease-out hover:scale-110">
        <img src={sprite} width="150" />
        <div className="w-fit h-fit border border-solid border-gray-300 flex justify-center items-center rounded-xl">
          <span
            className="px-3 py-0.5 font-semibold rounded-xl border-r border-solid border-gray-300"
            style={{ backgroundColor: `${color}` }}>
            {id}
          </span>
          <span className="px-3">{name}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
