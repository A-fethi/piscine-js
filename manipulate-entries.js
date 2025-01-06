const filterEntries = (obj, func) => {
    let result = {}
    for (let key in obj) {
        if (func([key, obj[key]])) {
            result[key] = obj[key]
        }
    }
    return result
}

const mapEntries = (obj, func) => {
    let result = []
    for (let key in obj) {
        result.push(func([key, obj[key]]))
    }
    return Object.fromEntries(result)
}

const reduceEntries = (obj, func, acc) => {
    let keys = Object.keys(obj)
    let res = acc !== undefined ? acc : obj[keys[0]];
    let currentIndex = acc !== undefined ? 0 : 1
    for (let i = currentIndex; i < keys.length; i++) {
        res = func(res, [keys[i], obj[keys[i]]])
    }
    return res
}

const totalCalories = (obj) => {
    return reduceEntries(obj, (acc, [key, value]) => {
        let res = acc + (nutritionDB[key].calories * value / 100)
        return Number.parseFloat(res.toFixed(1))
    }, 0)
}

const lowCarbs = (obj) => {
    return filterEntries(obj, ([key, value]) => {
        return (nutritionDB[key].carbs * value / 100) < 50
    });
}

const cartTotal = (obj) => {
    return mapEntries(obj, ([key, value]) => {
        return [key, mapEntries(nutritionDB[key], ([keyDB, valueDB]) => {
            return [keyDB, Number(((value * valueDB) / 100).toFixed(3))]
        })]
    })
}
