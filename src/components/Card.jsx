const Card = () => {
  return (
    <div className="w-50 ml-30 py-4 flex flex-col items-center rounded-xl shadow-[2px_2px_0_2px_#000000]">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="image"
        width="150"
      />
      <div className="w-fit h-fit border border-solid border-gray-300 flex justify-center items-center rounded-xl">
        <span className="px-3 py-0.5 bg-green-500 font-semibold rounded-xl">
          001
        </span>
        <span className="px-3">이상해씨</span>
      </div>
    </div>
  );
};

export default Card;
