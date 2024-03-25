import React from "react";

function Helment(props) {
  document.title = "store🎇-" + props.title;
  return <div className="w-full">{props.children}</div>;
}

export default Helment;
