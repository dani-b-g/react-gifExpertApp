import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["tokyo ghoul"]);

  // const handleAdd = () => {
  //   // PAra añdir al inicio de la coleccion
  //   // setCategories( ["Tokyo Ghoul", ...categories]);

  //   // PAra añdir al final de la coleccion
  //   // setCategories((cats) => [...categories, "Tokyo Ghoul"]);
  // };

  // TEMPLATE
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
