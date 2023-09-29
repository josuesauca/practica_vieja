import React from "react";

const Paginacion = ({paginaAnterior, paginaSiguiente})=>{
    return(
        <div className="py-3">
            <button onClick={paginaAnterior} type="button" className="btn btn-info mr-1">Anterior  &larr;</button>
            <button onClick={paginaSiguiente} type="button" className="btn btn-info mr-1">Siguiente &rarr;</button>
        </div>
    );

};

export default Paginacion;