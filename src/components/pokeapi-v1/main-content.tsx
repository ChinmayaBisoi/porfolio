import React, { useEffect } from "react";

const MainContent = () => {
  useEffect(() => {
fetch("https://pokeapi.co/api/v2/pokemon?limit=800")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div></div>
    </div>
  );
};

export default MainContent;
