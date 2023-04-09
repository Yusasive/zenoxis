import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

function Button() {
  return (
    <>
      <Link to="Connect-Wallet">
        <button className="btn">
         
          <span>Connect Wallet</span>
        </button>
      </Link>
    </>
  );
}

export default Button;