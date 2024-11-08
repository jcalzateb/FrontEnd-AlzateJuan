import React from "react";

const Card = ({ info }) => {
  return (
    <div>
      <h3>Libro: {info.titulo}</h3>
      <h4>Autor: {info.autor}</h4>
    </div>
  );
};

export default Card;
