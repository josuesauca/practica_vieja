import { useState, useEffect } from "react";
import "./App.css";
import Buscador from "./Components/Buscador";
import Resultado from "./Components/Resultado";

function App() {
  const [state, setState] = useState({ termino: "", imagenes: [] ,pagina : ""});

  let paginaAnterior = ()=>{
    console.log("anterior");


    let pagina = state.pagina;
    console.log(pagina);
    

    if(pagina === 1){
      return null;
    }
    
    pagina--;

    setState({...state,pagina});
    

  };

  let scroll = ()=>{
    const element = document.querySelector(".jumbotron");
    element.scrollIntoView("smooth","start");
  };


  let paginaSiguiente = ()=>{
    console.log("siguiente");

    let pagina = state.pagina;
    console.log(pagina);
    
    
    pagina++;

    setState({...state,pagina});
    


  };

  let consultarApi = () => {

    let consulta = `https://pixabay.com/api/?key=29941449-5bf7d1b3c627a7a5695abba45&q=${state.termino}&per_page=30&page=${state.pagina}`;

    fetch(consulta)
      .then((response) => {
        response.json().then((objeto) => {
          console.log(objeto.hits);
          setState({ ...state, imagenes: objeto.hits });
        });
      })
      .catch((error) => {
        console.log(error);
      });

    //console.log(consulta);

    //console.log(state.imagenes);

    /*
      fetch(consulta).then( (response) =>response.json()).then(valor=>{
        console.log(valor.hits);
        
      }).catch(error=>{
        console.log(error);
      });
      */
  };

  let datosBusqueda = (termino) => {
    setState({ ...state, termino: termino, pagina : 1 });

    //consultarApi();
  };

  useEffect(() => {
    if (state.termino.length !== 0) {
      consultarApi();
      scroll();
    }
  }, [state.termino, state.pagina]);

  return (
    <div className="App container">
      <div className="jumbotron bg-primary text-white">
        <p className="lead text-center">Buscador de Imagenes</p>

        <Buscador datosBusqueda={datosBusqueda} />
      </div>

      {state.imagenes.length > 0 ? (
        <div className="row justufy-content-center">
          <Resultado imagenes={state.imagenes} 
            paginaAnterior = {paginaAnterior}
            paginaSiguiente = {paginaSiguiente}
          />
        </div>
      ) : (
        <h1>No hay Datos</h1>
      )}
    </div>
  );
}

export default App;
