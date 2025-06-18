import { Link } from "react-router-dom";

const Header = ({ resetInput }) => {
  return (
    <header className="w-full fixed z-99 shadow-xl">
      <div className="w-full relative">
        <div className="w-full h-12 bg-red-600"></div>
        <div className="w-full h-6 bg-black"></div>
        <div className="w-full h-12 bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-black flex justify-center items-center rounded-xl">
          <Link
            to="/"
            className="text-white text-4xl font-bold"
            onClick={resetInput}>
            Pokédex
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
