import React from "react";

function Photo(props) {
  if (props.photos) {
    return (
      <section className="search-photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-sm-6 mb-3" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <div className="filter-background">
                    <img
                      src={photo.src.landscape}
                      alt={photo.alt}
                      className="photo-filter img-fluid"
                    />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

export default Photo;
