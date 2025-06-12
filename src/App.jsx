import { useEffect } from "react";

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
    <>
      <div>App</div>
    </>
  );
}

export default App;
