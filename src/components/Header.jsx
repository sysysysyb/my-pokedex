import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    console.log(navigate);
    if (inputValue) {
      const debounceSearch = setTimeout(() => {
        navigate(`/search?query=${inputValue}`);
      }, 1000);

      return () => clearTimeout(debounceSearch);
    }

    if (!inputValue && location.pathname.startsWith("/search")) {
      navigate("/");
      return;
    }
  }, [inputValue, location.pathname, navigate]);

  return (
    <div className="h-screen flex flex-col">
      <header className="w-full">
        <div className="w-full py-4 bg-black border-t-65 border-solid border-red-600 flex justify-center items-center">
          <Link to="/" className="text-white text-4xl font-bold">
            Pokédex
          </Link>
        </div>
      </header>
      <div className="w-full p-5 flex justify-center items-center">
        <input
          type="text"
          placeholder="포켓몬 이름을 입력하세요"
          className="w-100 px-6 py-4 border-2 border-solid border-gray-300 rounded-l-lg outline-none"
          value={inputValue}
          onChange={handleInput}
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
