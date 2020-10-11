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
  localStorage.setItem("todos", JSON.stringify(todos));
}

    const item = e.target;

    if (item.classList[0] === "trash-btn") {
      todo.classList.add("fall");
      //at the end
      removeLocalTodos(todo);
