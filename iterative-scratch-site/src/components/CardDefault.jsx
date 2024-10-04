import React from "react";

function CardDefault({ props }) {
  return <>{props ? <h3>{props.recipes[0].title}</h3> : null}</>;
}

export default CardDefault;
