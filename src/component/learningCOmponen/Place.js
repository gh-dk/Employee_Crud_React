import React from "react";

function Place({ title, address }) {
  return (
    <div className="card card-body">
      <h1 className="card-header">{title}</h1>
      <p className="card-footer">{address}</p>
    </div>
  );
}

export default Place;
