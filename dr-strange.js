const addWeek = (date) => {
    const epoch = new Date('0001-01-01')
    const diff = (date - epoch) / (24 * 60 * 60 * 1000)
    const dayIndex = diff % 14;

    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'];

    return (weekDays[dayIndex]);
}

const timeTravel = (obj) => {
    obj.date.setHours(obj.hour)
    obj.date.setMinutes(obj.minute)
    obj.date.setSeconds(obj.second)

    return new Date(obj.date)
}
