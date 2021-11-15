import React, { useEffect, useReducer, useState } from "react";
import { ContactosReducer } from "../reducers/ContactosReducer";  //importar el reducer
import FormularioAdd from "./FormularioAdd";
import TablaContactos from "./TablaContactos";
  /*const contactos = [
    {
      id: "hbbs"
      nombre: "Raul"
      numero: "555542"
    }
  ]*/
/* const contactos = () => {
  const reducer = useReducer(contactos, contactos) //contactos pide el inicial state
  //useReducer const [state, dispath] = useReducer(ContactosReducer, contactos)

  return (
    <div>
    <formularioAdd data ={{state, dispath}} />
    <tablaContacos contactos ={state}/>
    <div/>
  )
};
}*/
//dispath es la funcion, se llama dispath por que va a disparar el cambio de este estado
//<TablaContactos contactos={state} dispatch={dispatch} />  para activarlo, el boton eliminar,  tengo que agregar como props dispatch={dispatch}



//local storage tiene algo que tiene key y value
//

//creo una constante que se va a llamar init
//va hacer cosas como grabar en el localStorage, leer el local storage
//o cosas de ese tipo
const init = () => {
   //mis contactos va hacer iguales, a localStorage tiene varios elementos el local storage
  //en este local storage me interesa el get item
  //lo que va a buscar en el local storage algo que diga key, vamos a ponerle ("contactos"); pero puede
  //ser cualquier nombre
  const contactos = localStorage.getItem("contactos");
  //voy a mandar un ternario que si contactos existe, entonces va a mandar un JSON
  //JSON.parse necesito convertir de texto plano a javascrip, en caso de que esto no ocurra,
  //mando un array vacio
  return contactos ? JSON.parse(contactos) : [];  
};

const Contactos = () => {
  //initial state va hacer un array vacio
  //el init es una funcion que va a calcular el valor inicial de este state
  //mi valor inicial va hacer la lectura del local storage, de que ya tenga alguna informacion
  //cada vez que mi state cambie
  //y el state cambia gracias al dispath, esto lo hace automatico
  const [state, dispatch] = useReducer(ContactosReducer, [], init);

  useEffect(() => {
    //el set item me va pedir 2 parametros, el primer parametro va hacer una key
    //el segundo va hacer "contactos", le voy a mandar un nuevo valor,
    //el objeto se va a llamar JSON. stringify lo que va hacer todo lo que sea javascrip, en string
    //cada vez que mi state cambie, se va actualizar
    //la informacion la va asignar aqui, esta logica va hacer que todo se automatize al 100%
    //esto se va a volver a grabar
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  //inicial state useState(false)
  //{formView && <FormularioAdd dispatch={dispatch} />} si es verdadero, esto muestra
  //mi form, si es falso no lo va a mostrar
  //<button el boton va a mandar lo contrario del fromview, cuando se presiona
  //si formview es true + Agregar Contacto" si es falso "- Cerrar Formulario"
  const [formView, setFormView] = useState(false);

  return (
    <div className="container mt-3">
      <button
        onClick={() => setFormView(!formView)}
        className="btn btn-success"
      >
        {!formView ? "+ Agregar Contacto" : "- Cerrar Formulario"}
      </button>
      {formView && <FormularioAdd dispatch={dispatch} />}

      <TablaContactos contactos={state} dispatch={dispatch} /> 
    </div>
  );
};

export default Contactos;
