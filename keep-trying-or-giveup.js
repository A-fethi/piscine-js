const retry = (count, callback) => {
    let errorCount = 0
    return (...args) => {
        return callback(...args)
            .then((data) => {
                return data
            })
            .catch((error) => {
                while (errorCount > count) {
                    throw new Error("error")
                }
            })
    }
}

// const timeout = (delay, callback) => {
//     return (...args) => {
//         return callback(...args)
//     }


