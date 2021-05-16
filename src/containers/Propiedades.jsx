import React, { useState } from "react";
import Home from "../components/Home";
import "../styles/main.css";
import { lista } from "../assets/lista";
import Header from "../components/Header";

const Propiedades = () => {
  const [searchProp, setSearchProp] = useState("");
    // ROSITA: aquí puse los hooks del searchProp y  también ya tenemos el Header componente.
    // Estos hooks son pasados como props al Header le pasamos el Set para que pueda actualizar el valor del searchProp y al Home le estoy pasa el searchProp para que filtre.
  return (
    <div className="contenedor">
      <Header setSearchProp={setSearchProp} />
      <Home title={"Casas en Bolivia"} data={lista} searchProp={searchProp} />
    </div>
  );
};

export default Propiedades;
