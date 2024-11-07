import "./App.css";
import Card from "./Components/Card";
import Form from "./Components/Form";
import React, { useState } from "react";

function App() {
  const [libro, setLibro] = useState({
    titulo: "",
    autor: ",",
  });
  return (
    <>
      <div className="App">
        <h1>Formulario de libros</h1>
        {libro.titulo && libro.autor ? (
          <Card titulo={libro.titulo} autor={libro.autor} />
        ) : (
          <Form setLibro={setLibro} />
        )}
      </div>
    </>
  );
}

export default App;
