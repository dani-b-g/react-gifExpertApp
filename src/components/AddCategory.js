import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      // console.log(e);
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    // No hace Falta <> si es un elemento completo
    <form onSubmit={handelSubmit}>
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

// AddCategory.propTypes={
//   setCategories: PropTypes
// }
export default AddCategory;
