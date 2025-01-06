const throttle = (func, num) => {
    let wait = false;
    return (...args) => {
        if (!wait) {
            func(...args)
            wait = true
        }
        setTimeout(() => {
            wait = false
        }, num)
    }
}

const opThrottle = (func, num, option = {}) => {
    let wait = null;

    return (...args) => {
        if (wait === null) {
            if (option.leading) {
                func(...args);
            }

            wait = setTimeout(() => {
                if (option.trailing && !option.leading) {
                    func(...args);
                }
                wait = null;
            }, num);
        }
    }
}
