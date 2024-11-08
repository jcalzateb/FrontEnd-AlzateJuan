import "./App.css";
import Card from "./Components/Card";
import Form from "./Components/Form";
import React, { useState } from "react";

function App() {
  const [libro, setLibro] = useState(null);
  const handleBack = () => {
    setLibro(null);
  };
  return (
    <>
      <div className="App">
        <h1>Formulario de libros</h1>
        {libro ? (
          <div>
            <Card info={libro} />
            <button onClick={handleBack}>Volver atras</button>
          </div>
        ) : (
          <Form setLibro={setLibro} />
        )}
      </div>
    </>
  );
}

export default App;
