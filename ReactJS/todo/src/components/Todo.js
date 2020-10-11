import React from 'react';

const Todo = ({ text, todo, setTodos, todos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed : !item.completed
                };
            }
            return item;
        })
        );
    };

    return(
        <div className={`todo ${todo.completed ? "completed" : ""}`}>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
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