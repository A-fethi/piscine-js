const fusion = (obj, obj1) => {
    const result = {...obj}

    for (let key in obj1) {
        if (obj.hasOwnProperty(key)) {
            if (Array.isArray(obj[key]) && Array.isArray(obj1[key])) {
                result[key] = [...obj[key], ...obj1[key]]
            } else if (typeof(obj[key]) === "string" && typeof(obj1[key]) === "string") {
                result[key] = obj[key] + " " + obj1[key]
            } else if (!isNaN(obj[key]) && !isNaN(obj1[key])) {
                result[key] = obj[key] + obj1[key]
            } else {
                if (!isNaN(obj1[key])) {
                    result[key] = obj1[key]
                } else {
                    result[key] = fusion(obj[key], obj1[key])
                }
            }
        } else {
            result[key] = obj1[key]
        }
    }
    return result
}
