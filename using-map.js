const citiesOnly = (arr) => {
    const res = arr.map(cities => {
        let cityArray = [];
        let cityFixed = '';
        const upperCity = cities.city.split(' ');
        for (let i = 0; i < upperCity.length; i++) {
            cityArray.push(capitalize(upperCity[i]));
        }
        cityFixed = cityArray.join(' ');
        return cityFixed;
    });
    return res;
};

function yell(str) {
    return str.toUpperCase();
}

function capitalize(str) {
    return String(yell(str[0])) + String(str.slice(1)).toLowerCase()
}

const upperCasingStates = (arr) => {
    const res = arr.map(item => {
        let stateArray = [];
        let stateFixed = '';
        const upperState = item.split(' ');
        for (let i = 0; i < upperState.length; i++) {
            stateArray.push(capitalize(upperState[i]));
        }
        stateFixed = stateArray.join(' ');
        return stateFixed;
    });
    return res;
};

const fahrenheitToCelsius = (arr) => {
    const res = arr.map(item => {
        const decimal = parseInt(item, 10)
        return Math.floor((decimal - 32) * 5 / 9).toString() + '°C'
    })
    return res
}

const trimTemp = (arr) => {
    return arr.map(item => ({
        ...item,
        temperature: item.temperature.replaceAll(" ", "")
    }))
}

const tempForecasts = (arr) => {
    const trimed = trimTemp(arr)
    return trimed.map(({ city, temperature, state }) => {
        const celsius = fahrenheitToCelsius([temperature]);
        const upperState = (state.split(" "));
        let stateArray = []
        let stateFixed = ''

        for (let i = 0; i < upperState.length; i++) {
            stateArray.push(capitalize(upperState[i]))
        }
        stateFixed = stateArray.join(' ');
        return `${celsius}elsius in ${city}, ${stateFixed}`
    })
}

