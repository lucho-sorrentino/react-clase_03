import PropTypes from "prop-types"
import estilo from "../../theme/colors"
import UsuarioDesconocido from "./UsuarioDesconocido/UsuarioDesconocido";
import "./App.css"

const App = ( {nombre, unColor} ) => {       
    let saludo = <h1 style= {estilo}>Hola {nombre}</h1>; 
        
    return nombre ? saludo : <UsuarioDesconocido />
};

App.propTypes = {
    nombre : PropTypes.string,
}

export default App;