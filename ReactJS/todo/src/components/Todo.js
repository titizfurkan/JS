import React from "react";

const Todo = ({ text, todo, setTodos, todos }) => {
//   const deleteHandler = () => {
//     setTodos(todos.filter((el) => el.id !== todo.id));
//     var element = document.getElementsByClassName("todo");
//     element.className += "fall";
//   };

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

  function deleteHandler(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
      // e.target.parentElement.remove();
      const todo = item.parentElement;
      todo.classList.add("fall");
      //at the end
      removeLocalTodos(todo);
      todo.addEventListener("transitionend", (e) => {
        todo.remove();
      });
    }
    if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
      console.log(todo);
    }
  }

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div
      className={`todo ${todo.completed ? "completed" : ""}`}
    >
      <li className={`todo-item`}>
        {text}
      </li>
      <button title="Bitir" onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button title="Sil" onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
