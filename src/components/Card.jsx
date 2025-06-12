import { useEffect } from "react";

const Card = () => {
  // pokeApi 연결 확인
  useEffect(() => {
    const fetchTypes = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      const data = await response.json();
      console.log("id : ", data.id);
      console.log(
        "types : ",
        data.types.map((el) => el.type.name)
      );
    };
    fetchTypes();
  }, []);

  useEffect(() => {
    const fetchNameKo = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon-species/1/"
      );
      const data = await response.json();
      console.log("color : ", data.color.name);
      console.log(
        "name : ",
        data.names.find((el) => el.language.name === "ko").name
      );
      console.log(
        "desc : ",
        data.flavor_text_entries.find((el) => el.language.name === "ko")
          .flavor_text
      );
    };
    fetchNameKo();
  }, []);

  return <div>Card</div>;
};

export default Card;
