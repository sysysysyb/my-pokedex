import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import RotateGif from "./images/rotate.gif";
import Layout from "./layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Detail = lazy(() => import("./components/Detail"));

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
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
