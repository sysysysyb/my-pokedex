import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Detail from "../components/Detail";
import Footer from "../components/Footer";

const Layout = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const resetInput = () => {
    setInputValue("");
  };

  useEffect(() => {
    if (inputValue) {
      const debounceSearch = setTimeout(() => {
        navigate(`/search?pokemon=${inputValue}`);
      }, 300);

      return () => clearTimeout(debounceSearch);
    }

    if (!inputValue && location.pathname.startsWith("/search")) {
      navigate("/");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className="w-full h-screen flex flex-col">
      <Header resetInput={resetInput} />

      <div className="pt-30 pb-20 w-full h-full grid grid-cols-3">
        <div className="scrollbar-custom w-full h-full col-span-2 overflow-y-auto z-9">
          <Outlet />
        </div>
        <div className="w-full h-full col-span-1 relative">
          <Detail />
        </div>
      </div>

      <Footer inputValue={inputValue} handleInput={handleInput} />
    </div>
  );
};

export default Layout;
