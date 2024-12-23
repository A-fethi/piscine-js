const get = (src, path) => {
    if (src === null || typeof(src) !== "object" || typeof(path) !== "string") {
        return undefined;
    }

    const splited = path.split(".");
    let current = src;

    for (const key of splited) {
        if (current[key] === undefined) {
            return undefined;
        } 
        current = current[key];
    }
    
    return current
}
