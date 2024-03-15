import React from "react";

function Helment(props) {
  document.title = "maltimart-" + props.title;
  return <div className="w-full">{props.children}</div>;
}

export default Helment;
