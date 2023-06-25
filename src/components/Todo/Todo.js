import { useDispatch, useSelector } from "react-redux";
import { todoListSelector } from "../../utils/selectors";
import { useState } from "react";
import { addTodo, completeTodo, deleteTodo } from "./actions";

function Todo() {
    const [todoInput, setTodoInput] = useState("");

    const todoList = useSelector(todoListSelector);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        const todo = {
            id: Date.now(),
            name: todoInput,
        };

        dispatch(addTodo(todo));
        setTodoInput("");
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const toggleCompleteTodo = (id) => {
        dispatch(completeTodo(id));
    };

    return (
        <div>
            <input
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                placeholder="Todo..."
                type="text"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todoList.map((todo) => {
                    return (
                        <li className="d-flex" key={todo.id}>
                            <div className="d-flex">
                                <input
                                    onChange={() => toggleCompleteTodo(todo.id)}
                                    checked={todo.completed}
                                    type="checkbox"
                                />
                                <span>{todo.name}</span>
                            </div>
                            <span
                                onClick={() => handleDeleteTodo(todo.id)}
                                className="delete-todo"
                            >
                                X
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Todo;
