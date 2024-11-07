import React from "react";

const Card = ({ titulo, autor }) => {
  return (
    <div>
      <h3>Libro: {titulo}</h3>
      <h4>Autor: {autor}</h4>
    </div>
  );
};

export default Card;
