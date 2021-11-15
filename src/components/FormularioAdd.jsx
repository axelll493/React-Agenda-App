import React, { useState } from "react";
import { v4 as uuid } from "uuid"; //este uuid viene de los node_modules
//trabajare con la version 4 as y el nombre a que le quiero poner a mi funcion, uuid


//Todos los dispath van a tener referencia al reducer y nunca se van a perder
//onChange={handleChange} el handle change va a ir al evento

//const { nombre, numero } = data;  estoy destructurando mi state de arriba
//ya no tengo que poner data.nombre o data.numero
//y con el set data va a cambiar los valores de adentro y los del useState
//e.target.name si lo paso en consola, cada vez que quiera poner algo en los imput, me va a devolver el nombre del imput
// ... copia la propiedad

const FormularioAdd = ({ dispatch }) => {
  const [data, setData] = useState({ nombre: "", numero: "" });

  const { nombre, numero } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: { //el payload es este objeto
      id: uuid(),
      nombre,
      numero,
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
  };

  
  return (
    //"mx-1 d-grid gap-2" //display d-grid 
    //btn btn-info mt-2" boton azul
    //arriba del div <pre>{data}<pre/>
    <>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Nombre:{" "}
          <input
            onChange={handleChange}
            name="nombre"
            value={nombre}
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </label>
        <label className="mx-1 d-grid gap-2">
          Número:{" "}
          <input
            onChange={handleChange}
            value={numero}
            name="numero"
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </label>
        <div className="mx-1 d-grid gap-2">
          <button onClick={handleAdd} className="btn btn-info mt-2">
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};
//}
export default FormularioAdd;
