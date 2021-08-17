import {
    addTodo,
    findById,
    toggleTodo,
    updateTodo,
    removeTodo,
    filterTodos
} from './todoHelpers';

test('addTodo should add the passed todo to the list', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false }
    ];
    const newTodo = { id: 3, name: 'three', isComplete: false };
    const expected = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ];

    const result = addTodo(startTodos, newTodo);

    expect(result).toEqual(expected);
});

test('addTodo should not mutate the existing todo array', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false }
    ];
    const newTodo = { id: 3, name: 'three', isComplete: false };
    const expected = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ];

    const result = addTodo(startTodos, newTodo);

    expect(result).not.toBe(startTodos);
});
test('findById should return the expected item from an array', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ];
    const expected = { id: 2, name: 'two', isComplete: false };
    const result = findById(2, startTodos);
    expect(result).toEqual(expected);
});

test('toggleTodo should toggle the isComplete prop of a todo', () => {
    const startTodo = { id: 2, name: 'two', isComplete: false };
    const expected = { id: 2, name: 'two', isComplete: true };
    const result = toggleTodo(startTodo);
    expect(result).toEqual(expected);
});

test('toggleTodo should not mutate the original todo', () => {
    const startTodo = { id: 2, name: 'two', isComplete: false };
    const result = toggleTodo(startTodo);
    expect(result).not.toBe(startTodo);
});

test('updateTodo should update an item by id', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ];
    const updatedTodo = { id: 2, name: 'two', isComplete: true };
    const expectedTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: true },
        { id: 3, name: 'three', isComplete: false }
    ];

    const result = updateTodo(startTodos, updatedTodo);

    expect(result).toEqual(expectedTodos);
});

test('updateTodo should not mutate the original array', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ];
    const updatedTodo = { id: 2, name: 'two', isComplete: true };

    const result = updateTodo(startTodos, updatedTodo);

    expect(result).not.toBe(startTodos);
});

test('remove should remove an item from the array', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ];
    const endTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ];
    const removeIndex = 2;
    const result = removeTodo(startTodos, removeIndex);

    expect(result).toEqual(endTodos);
});

test('removeTodo should not mutate the original array', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ];
    const removeIndex = 3;

    const result = removeTodo(startTodos, removeIndex);

    expect(result).not.toBe(startTodos);
});

test('filterTodos should return only completed items', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: true },
        { id: 3, name: 'three', isComplete: false }
    ];
    const expectedTodos = [{ id: 2, name: 'two', isComplete: true }];

    const result = filterTodos(startTodos, '/complete');

    expect(result).toEqual(expectedTodos);
});

test('filterTodos should return only active items', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: true },
        { id: 3, name: 'three', isComplete: false }
    ];
    const expectedTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ];

    const result = filterTodos(startTodos, '/active');

    expect(result).toEqual(expectedTodos);
});
