const initState = [
    { id: 1, name: "Learn Typescript" },
    { id: 2, name: "Learn ReactJS" },
];

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case "todo/addTodo":
            return [...state, action.payload];

        default:
            return state;
    }
};

export default todoReducer;
