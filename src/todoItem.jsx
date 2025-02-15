import React, { useState } from "react";

function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function crossItem() {
    setIsDone((previous) => !previous);
  }

  return (
    <div onClick={crossItem} onDoubleClick={() => props.removeItem(props.id)}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default TodoItem;