const Card = ({ id, color, name, sprite }) => {
  return (
    <div className="w-50 ml-30 py-4 flex flex-col items-center rounded-xl shadow-[2px_2px_0_2px_#000000]">
      <img src={sprite} width="150" />
      <div className="w-fit h-fit border border-solid border-gray-300 flex justify-center items-center rounded-xl">
        <span
          className="px-3 py-0.5 font-semibold rounded-xl"
          style={{ backgroundColor: `${color}` }}>
          {id}
        </span>
        <span className="px-3">{name}</span>
      </div>
    </div>
  );
};

export default Card;
