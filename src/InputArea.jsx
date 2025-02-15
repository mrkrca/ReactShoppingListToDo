import React from "react";

function InputArea(props) {
  return (
    <>
      <input
        onChange={props.takingValueFunction}
        type="text"
        value={props.value}
        onKeyDown={props.onKeyDown}
      />
      <button onClick={props.onClickFunction}>
        <span>Dodaj</span>
      </button>
    </>
  );
}

export default InputArea;