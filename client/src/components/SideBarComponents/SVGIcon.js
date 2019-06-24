import React from "react";

var SVGIcon = props => {
  if (props.data.name === "Ubisoft")
    return (
      <img
        className="svg"
        src={props.data.img}
        alt={props.data.name}
        value={props.data.name}
      />
    );
  return (
    <img src={props.data.img} alt={props.data.name} value={props.data.name} />
  );
  // <object type="image/svg+xml" data={props.data.img} />;
};

export default SVGIcon;
