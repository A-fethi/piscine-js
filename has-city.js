const hasCity = (country, arr) => {
    for (let i = 0; i < arr.length; i++) {
        return function (city) {
            if (arr.includes(city)) {
                return `${city} is a city from ${country}`
            } else {
                return `${city} is not a city from ${country}`
            }
        }
    }
}