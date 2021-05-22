import React, { useState } from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, deleteItem, id } = props;
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="itemCard" onClick={() => setIsTrue(!isTrue)}>
      <span className={isTrue === true ? "line-through" : ""}>{content}</span>
      <button className="btn btn-danger" onClick={() => deleteItem(id)}>
        Sil
      </button>
    </div>
  );
}

export default Todo;
