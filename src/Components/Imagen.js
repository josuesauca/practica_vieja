import React from "react";

function Imagen({ imagen }) {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;
  return (
    <div className="col-12 col-sm-6 cold-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="catd-img-top" />

        <div className="card-body">
          <p className="card-text">{likes} Me gusta</p>
          <p className="card-text">{views} Vistas</p>

          <a href={largeImageURL} rel="noreferrer" target="_blank" className="btn btn-primary">
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
}

export default Imagen;
