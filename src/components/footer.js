import React from "react";

export default function footer() {
  // let footerStyle = {
  //   position: "fixed",
  //   bottom: "0",
  //   width: "100%",
  // };
  let icon = {
    color: "red",
  };
  return (
    <div className="bg-dark text-light p-1">
      <p className="text-center">
        Made with <i className="fa-solid fa-heart" style={icon}></i> by
        Amarendra Dash A.K.A Xenor.
      </p>
    </div>
  );
}
