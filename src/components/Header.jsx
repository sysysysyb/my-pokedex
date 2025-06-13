import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="w-full">
        <div className="w-full py-4 bg-black border-t-65 border-solid border-red-600 flex justify-center items-center">
          <span className="text-white text-4xl font-bold">Pokédex</span>
        </div>
      </header>
      <div className="w-full p-5 flex justify-center items-center">
        <input
          type="text"
          placeholder="포켓몬 이름을 입력하세요"
          className="w-100 px-6 py-4 border-2 border-solid border-gray-300 rounded-l-lg outline-none"
        />
        <button
          type="submit"
          className="px-6 py-4.5 bg-gray-300 font-medium rounded-r-lg cursor-pointer">
          검색
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
