import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { lazy, Suspense } from "react";
import RotateGif from "./images/rotate.gif";

const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorites = lazy(() => import("./pages/Favorites"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <img src={RotateGif} alt="loading" className="size-40" />
        </div>
      }>
      <BrowserRouter>
        <div className="animate-fade-in font-galmuri">
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
