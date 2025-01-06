const defaultCurry = (obj) => {
    return function (obj1) {
        const result = { ...obj }
        for (let key in obj1) {
            result[key] = obj1[key]
        }
        return result
    }
}

const mapCurry = (func) => {
    return function (obj) {
        let arr = Object.entries(obj)
        let result = []
        arr.forEach(([key, value]) => {
            result.push(func([key, value]))
        });
        return Object.fromEntries(result)
    }
}

const reduceCurry = (func) => {
    return function (obj, acc) {
        let keys = Object.keys(obj)
        let res = acc !== undefined ? acc : obj[keys[0]];
        let currentIndex = acc !== undefined ? 0 : 1
        for (let i = currentIndex; i < keys.length; i++) {
            res = func(res, [keys[i], obj[keys[i]]])
        }
        return res
    }
}

const filterCurry = (func) => {
    return function (obj) {
        let result = {}
        for (let key in obj) {
            if (func([key, obj[key]])) {
                result[key] = obj[key]
            }
        }
        return result
    }
}

const reduceScore = (obj, optional) => {
    return reduceCurry((acc, [, v]) => {
        if (v.isForceUser) {
            acc += v.pilotingScore + v.shootingScore
        }
        return acc
    })(obj, optional)
}

const filterForce = (obj) => {
    return filterCurry(([, value]) => value.shootingScore >= 80 && value.isForceUser)(obj);
}

const mapAverage = (obj) => {
    return mapCurry(([k, value]) => {
        {
            value['averageScore'] = (value.shootingScore + value.pilotingScore) / 2
            return [k, value]
        }
    })(obj)
}
