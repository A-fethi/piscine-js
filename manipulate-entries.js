// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }

const filterEntries = (obj, func) => {
    let res = {}
    for (let key in obj) {
        if (func([key, obj[key]])) {
            res[key] = obj[key]
        }
    }
    return res
}

const mapEntries = (obj, func) => {
    let res = []
    for (let key in obj) {
        res.push(func([key, obj[key]]))
    }
    return Object.fromEntries(res)
}

const reduceEntries = (obj, func, acc) => {
    let keys = Object.keys(obj)
    let result = acc !== undefined ? acc : obj[0]
    let currentIndex = acc !== undefined ? 0 : 1
    for (let i = currentIndex; i < keys.length; i++) {
        result = func(result, [keys[i], obj[keys[i]], acc])
    }
    return result
}

const totalCalories = (obj) => {    
    return reduceEntries(obj, (acc, [k, v]) => {
        let res = acc + (nutritionDB[k].calories * v / 100)
        return parseFloat(res.toFixed(1))
    }, 0)
}

const lowCarbs = (obj) => {
    return filterEntries(obj, ([k, v]) => (nutritionDB[k].carbs * v / 100) < 50)
        // let res = acc + (nutritionDB[k].calories * v / 100)
        // return res
}

const cartTotal = (obj) => {
    return mapEntries(obj, ([k, v]) => {
        return [k, mapEntries(nutritionDB[k], ([keyDB, valueDB]) => {
            return [keyDB, Number(((v * valueDB)/100).toFixed(3))]
        })]
    })
}

// const object = { orange: 500, oil: 20, sugar: 480 };

// // // const res = filterEntries(object, ([, v]) => v <= 20 )
// const res = mapEntries(object, ([k, v]) => [
//     v > 250 ? `✔️${k}` : `❌${k}`,
//     v - 250,
// ])
// const res = reduceEntries(object, (acc, [k, v]) => acc + k + v, '');

// console.log(res);

// console.log(totalCalories(object));
// console.log(lowCarbs(object));



