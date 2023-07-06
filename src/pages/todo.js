import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeTodo } from "../features/todo/TodoSlice";

const Todo = () => {
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      title: e.target.text.value,
      completed: false,
    };

    dispatch({ type: "todo/addTodo", payload: newTodo });

    e.target.text.value = "";
  };

  const updateTodo = (id, title) => {
    dispatch({ type: "todo/updateTodo", payload: { id, title } });
  };

  const removeTodo = (id) => {
    dispatch({ type: "todo/removeTodo", payload: id });
  };

  return (
    <div className="">
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>

        <form onSubmit={handleSubmit}>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </form>
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Active</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
            <span className="visually-hidden"> tasks</span>
          </button>
        </div>
        <h2 id="list-heading">{todos.length} tasks remaining</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="todo stack-small">
                <div className="c-cb">
                  <input id="todo-0" type="checkbox" />
                  <label className="todo-label" htmlFor="todo-0">
                    {todo.title}
                  </label>
                </div>
                <div className="btn-group">
                  <button
                    onClick={() => updateTodo(todo.id, "Run")}
                    type="button"
                    className="btn"
                  >
                    Edit <span className="visually-hidden">Eat</span>
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    type="button"
                    className="btn btn__danger"
                  >
                    Delete <span className="visually-hidden">Eat</span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <div>
        <button aria-label="Increment value" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div> */}
    </div>
  );
};

export default Todo;
