export const addTodo = (data) => {
    return {
        type: "todo/addTodo",
        payload: data,
    };
};

export const deleteTodo = (id) => {
    return {
        type: "todo/deleteTodo",
        payload: id,
    };
};

export const completeTodo = (id) => {
    return {
        type: "todo/completeTodo",
        payload: id,
    };
};
