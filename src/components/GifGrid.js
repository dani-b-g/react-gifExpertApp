import React from "react";
import { useFetchGifs } from "../hooks/useFecthGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  const { data: images, loading } = useFetchGifs(category);

  // console.log(data);
  console.log(loading);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}

      <div className="card-grid animate__animated animate__fadeIn">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
