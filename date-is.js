const isValid = (date) => {
    if (date == '' || isNaN(date) || new Date(date) == '' || isNaN(new Date(date))) {
        return false
    }
    return true
}

const isAfter = (date, date1) => {
    return date > date1
}

const isBefore = (date, date1) => {
    return date < date1
}

const isFuture = (date) => {
    if (isValid(date) && isAfter(date, Date.now())) {
        return true
    }
    return false
}

const isPast = (date) => {
    if (isValid(date) && isBefore(date, Date.now())) {
        return true
    }
    return false
}
