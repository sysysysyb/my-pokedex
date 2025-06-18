import { Link } from "react-router-dom";
import SearchIcon from "../images/search.svg?react";

const Footer = ({ inputValue, handleInput }) => {
  return (
    <div className="w-full px-30 py-2 fixed z-99 bottom-0 bg-blue-600 flex justify-between items-center">
      <div className="relative w-3/5">
        <SearchIcon className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5.5 fill-gray-400" />
        <input
          type="text"
          placeholder="포켓몬 이름을 입력하세요"
          className="bg-white py-3 w-full px-11 text-2xl border-3 border-solid border-gray-300 rounded-lg outline-none"
          value={inputValue}
          onChange={handleInput}
        />
      </div>
      <Link
        to="/favorites"
        className="p-3 bg-white border-3 border-solid border-gray-300 text-2xl font-bold rounded-lg">
        Favorites
      </Link>
    </div>
  );
};

export default Footer;
