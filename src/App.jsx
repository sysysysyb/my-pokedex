import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";

function App() {
  // pokeApi 연결 확인
  useEffect(() => {
    const fetchTest = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      const data = await response.json();
      console.log(data);
    };
    fetchTest();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
