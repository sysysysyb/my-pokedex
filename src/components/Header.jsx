import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="w-full h-30">
        <div className="w-full h-15 bg-red-600"></div>
        <div className="w-full h-15 bg-black flex justify-center items-center">
          <span className="text-white text-4xl font-bold">Pokédex</span>
        </div>
      </header>
      <div className="w-full h-25 flex justify-center items-center">
        <input
          type="text"
          placeholder="포켓몬 이름을 입력하세요"
          className="w-100 px-6 py-4 border-2 border-solid border-gray-300 rounded-l-lg outline-none"
        />
        <button
          type="submit"
          className="px-6 py-4.5 bg-gray-300 rounded-r-lg cursor-pointer">
          검색
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
