import { partial, pipe } from './utils';

const add = (a, b) => a + b;

test('partial applies the first argument ahead of time', () => {
    const inc = partial(add, 1);
    const result = inc(1);
    expect(result).toBe(2);
});

const add3 = (a, b, c) => a + b + c;
test('partial applies two args', () => {
    const inc = partial(add3, 1, 2);
    const result = inc(3);
    expect(result).toBe(6);
});

const inc = (num) => num + 1;
const dbl = (num) => num * 2;

test('pipes the result of inc to double', () => {
    const pipeline = pipe(inc, dbl);
    const result = pipeline(2);
    expect(result).toBe(6);
});

test('pipes the result of inc to double', () => {
    const pipeline = pipe(dbl, inc);
    const result = pipeline(2);
    expect(result).toBe(5);
});
