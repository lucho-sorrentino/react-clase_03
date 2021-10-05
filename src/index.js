// =================== PRIMERA PARTE DE LAS CLASE ===================

// import React from "react";
// import ReactDOM from "react-dom";
// import propTypes from "prop-types";

// const array = ["Peras", "Manzanas", "Sandias"];

// const Lista = () => (
//     <ol>
//       <li>{array[0]}</li>
//       <li>{array[1]}</li>
//       <li>{array[2]}</li>
//     </ol>
//   );  

// const Subtitulo = ({ sub, num }) => <h4>{num * 2}</h4>;
// const Parrafo = () => <p>Lorem solo</p>;

// const elemento = <h1>Hola mundo</h1>;
// const elemento2 = "ELEMENTO 2";

// const TituloFrutas = (props) => {
//   const { titulo = "Acá va un título", id } = props;
//   return (
//     <>
//       <h1>{titulo}</h1>
//       <p>El id es: {id}</p>
//     </>
//   );
// };

// TituloFrutas.propTypes = {
//     titulo : propTypes.string,
//     id : propTypes.number.isRequired,
// };

// const Frutas = () => {
//   return (
//     <>
//         {elemento}
//         <div>{elemento2}</div>
//         <TituloFrutas />
//         <Subtitulo num={5} />
//         <Parrafo />
//         <Lista />
//     </>
//   );
// };

// ReactDOM.render(
//   <Frutas />,  
//   document.getElementById(
//     "root"
//   )
// );




// =================== SEGUNDA PARTE DE LAS CLASE ===================

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";


ReactDOM.render(<App unColor="red" />, document.getElementById("root"));
