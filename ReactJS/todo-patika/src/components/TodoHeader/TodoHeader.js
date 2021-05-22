import React from "react";
import "./TodoHeader.css";

function TodoHeader(props) {
  return (
    <div>
      <h1 className="title">{props.title}</h1>
    </div>
  );
}

export default TodoHeader;
