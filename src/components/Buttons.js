import React from "react";
import styled from "styled-components";
export default function Button({ text, blue = false }) {
  return (
    <Div>
      <button className={`${blue ? "blue" : ""}`}>{text}</button>
    </Div>
  );
}

const Div = styled.div`
  button {
    border-radius: 1rem;
    padding: 0.8rem 2rem;
    border: none;
    color: #1F1F1F;
    font-size: 1.1rem;
    margin: 2rem;    cursor: pointer;
    :not(.blue) {
      background-color: transparent;
      border: 1px solid white;
    }
  }
  .blue {
    background-color: whitesmoke;
  }
`;