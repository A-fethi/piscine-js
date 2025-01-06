const interpolation = ({ step, start, end, callback, duration }) => {
    const stepSize = (end - start) / step
    const stepDelay = duration / step

    let countStep = 1;
    let arr = []

    for (let i = start; start < end ? i < end : i > end; i += stepSize) {
        let x = i
        let y = countStep * stepDelay
        arr.push([x, y])
        countStep++
    }

    let index = 0

    let wait = setInterval(() => {
        callback(arr[index])
        index++
        if (index === step) {
            clearInterval(wait)
        }
    }, stepDelay)
}
