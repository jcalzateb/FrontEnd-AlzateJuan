import React, { useState } from "react";

const Form = ({ setLibro }) => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo.length >= 3 && autor.length >= 6 && !titulo.startsWith(" ")) {
      setLibro({ titulo, autor });
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
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <label>Autor del libro: </label>
      <input
        type="text"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
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
