import React from "react";

function Photo(props) {
  if (props.photos) {
    return (
      <div className="search-photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-sm-3" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Photo;
