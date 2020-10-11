import React from "react";
import swal from "sweetalert";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText.length !== 0) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    }
    else{
      swal("UYARI", "Yapılacaklar Listesi'ne boş görev eklenemez.", "error");  
      // alert("Yapılacaklar Listesi'ne boş görev eklenemez.");
    }
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value)
  };
  return (
    <form>
      <input autoFocus
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button title="Ekle" onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">Hepsi</option>
          <option value="completed">Bitirilen Görevler</option>
          <option value="uncompleted">Bitirilmemiş Görevler</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
