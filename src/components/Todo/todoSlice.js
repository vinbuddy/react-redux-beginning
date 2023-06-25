const initState = [
    { id: 1, name: "Learn Typescript", completed: false },
    { id: 2, name: "Learn ReactJS", completed: true },
];

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case "todo/addTodo":
            return [...state, action.payload];
        case "todo/deleteTodo":
            return state.filter((data) => data.id !== action.payload);
        case "todo/completeTodo":
            return state.map((data) => {
                if (data.id === action.payload)
                    return { ...data, completed: !data.completed };

                return data;
            });
        default:
            return state;
    }
};

export default todoReducer;
