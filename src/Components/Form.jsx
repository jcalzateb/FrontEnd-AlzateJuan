import React, { useState } from "react";

const Form = ({ setLibro }) => {
  const [info, setInfo] = useState({
    titulo: "",
    autor: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      info.titulo.length >= 3 &&
      info.autor.length >= 6 &&
      !info.titulo.startsWith(" ")
    ) {
      setLibro(info);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Titulo del Libro: </label>
      <input
        type="text"
        value={info.titulo}
        onChange={(e) => setInfo({ ...info, titulo: e.target.value })}
      />
      <label>Autor del libro: </label>
      <input
        type="text"
        value={info.autor}
        onChange={(e) => setInfo({ ...info, autor: e.target.value })}
      />
      <button type="submit">Enviar</button>
      {error && (
        <h4 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h4>
      )}
    </form>
  );
};

export default Form;
