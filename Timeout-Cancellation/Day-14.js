var cancellable = function(fn, args, t) {
    const timerId = setTimeout(fn, t, ...args);
    return () => clearTimeout(timerId);
};
