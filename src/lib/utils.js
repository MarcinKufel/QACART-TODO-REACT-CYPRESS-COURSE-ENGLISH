/// ...arg bundles the rest fo the arguments in a array
export const partial = (fn, ...args) => fn.bind(null, ...args);

export const addOne = (fn, arg) => fn.bind(fn, arg);

export const pipe1 = (fn1, fn2) => {
    const newFn = (...x) => {
        return fn2(fn1(...x));
    };
    return newFn;
};

const _pipe = (f, g) => (...args) => g(f(...args));

export const pipe = (...fns) => fns.reduce(_pipe);
