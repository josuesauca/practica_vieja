import React, {  useState } from "react";

let Buscador = (props) => {
  const [busquedaRef, setBusquedaRef] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    //console.log(busquedaRef);

    props.datosBusqueda(busquedaRef);



  };

  let handleInputChange = (e) => {
      
      setBusquedaRef(e.target.value);
      

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            name="buscador"
            className="form-control"
            onChange={handleInputChange}
            placeholder="Busca tu Imagen
              Ejemplo: Futbol"
          />
        </div>

        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-success btn-block"
            placeholder="Buscar"
            name = "boton"
          />
        </div>
      </div>
    </form>
  );
};

export default Buscador;
