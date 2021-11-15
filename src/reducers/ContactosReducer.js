export const ContactosReducer = (state = [], action) => {
  //esto es un objeto action, que tiene la propiedad type
  //necesito una copora de el state ...state
  //action payload, es la informacion que viene dentro
  //ejemplo 
  /*const contactos = [
    {
      id: "hbbs"
      nombre: "Raul"
      numero: "555542"
    }
  ]*/

  //actual.id el actual id es el id del estado actual
  //funcion de este state.filter((actual) => actual.id !== action.payload);
  //el estado actual es diferente al valor que quiero eliminar, si
  // cuando sea igual, eso no se guarda
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((actual) => actual.id !== action.payload);

    default:
      return state;
  }
};
