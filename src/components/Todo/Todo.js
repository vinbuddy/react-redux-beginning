import { useDispatch, useSelector } from "react-redux";
import { todoListSelector } from "../../utils/selectors";
import { useState } from "react";
import { addTodo } from "./actions";

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
                    return <li key={todo.id}>{todo.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default Todo;
