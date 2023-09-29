import React from "react";
import Imagen from "./Imagen";
import Paginacion from "./Paginacion";

/**
 *
 * @param {Array} imagenes
 * @returns
 */
function Resultado({ imagenes,paginaAnterior,paginaSiguiente }) {
  let mostrarImagenes = () => {
    if (imagenes.length === 0) {
      return null;
    }
    console.log("resultado", typeof imagenes);

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {imagenes.map((imagen) => {
            return (
              <>
                <Imagen key={imagen.id} imagen={imagen}></Imagen>
              </>
            );
          })}
        </div>
        <Paginacion
          paginaAnterior = {paginaAnterior}
          paginaSiguiente = {paginaSiguiente}
        
        />
      </React.Fragment>
    );
  };

  return <React.Fragment>{mostrarImagenes()}</React.Fragment>;
}

export default Resultado;
