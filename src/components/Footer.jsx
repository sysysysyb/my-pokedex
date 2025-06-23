import { Link } from "react-router-dom";
import SearchIcon from "../images/search.svg?react";
import { useMediaQuery } from "react-responsive";

const Footer = ({ inputValue, handleInput }) => {
  const isMdScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="w-full px-[5%] lg:px-30 py-2 fixed z-99 bottom-0 bg-blue-600 flex justify-between items-center">
      <div className="relative w-2/3 md:w-3/5">
        <SearchIcon className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5.5 fill-gray-400" />
        <input
          type="text"
          placeholder={isMdScreen ? "포켓몬 이름" : "포켓몬 이름을 입력하세요"}
          className="bg-white py-3 w-full pl-11 pr-2 md:px-11 text-2xl border-3 border-solid border-gray-300 rounded-lg outline-none"
          value={inputValue}
          onChange={handleInput}
        />
      </div>
      <Link
        to="/favorites"
        className="p-3 bg-white border-3 border-solid border-gray-300 text-2xl font-bold rounded-lg">
        <span className="hidden md:inline">Favorites</span>
        <span className="inline md:hidden">Fav</span>
      </Link>
    </div>
  );
};

export default Footer;
