export const addTodo = (list, item) => [...list, item];

export const generateId = () => Math.floor(Math.random() * 10000);

export const findById = (index, todos) => {
    var oneList = todos.filter((obj) => {
        return obj.id === index;
    });
    return oneList.shift();
};

export const findById1 = (id, list) => list.find((item) => item.id === id);

export const toggleTodo1 = (todo) => {
    var newComplete = todo.isComplete ? false : true;
    return { name: todo.name, id: todo.id, isComplete: newComplete };
};

export const toggleTodo = (todo) => ({ ...todo, isComplete: !todo.isComplete });

export const updateTodo1 = (todoList, newTodo) => {
    var cleanList = todoList.map((obj) => {
        if (obj.id === newTodo.id) {
            return newTodo;
        } else {
            return obj;
        }
    });
    return cleanList;
};

export const updateTodo = (list, updated) => {
    const updatedIndex = list.findIndex((item) => item.id === updated.id);
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex + 1)
    ];
};

export const removeTodo1 = (list, id) => {
    return list.filter((item) => item.id !== id);
};

export const removeTodo = (list, rid) => {
    const removeIndex = list.findIndex((item) => item.id === rid);
    return [...list.slice(0, removeIndex), ...list.slice(removeIndex + 1)];
};

export const filterTodos = (list, route) => {
    switch (route) {
        case '/active':
            return list.filter((item) => !item.isComplete);
        case '/complete':
            return list.filter((item) => item.isComplete);
        default:
            return list;
    }
};
