export const compose = () => {
    document.addEventListener('keydown', (event) => {
        const div = document.createElement("div")
        div.setAttribute("class", "note")
        div.style.backgroundColor = getColor()
        if (event.code === "Backspace") {
            const lastNode = document.querySelector('div.note:last-child')
            lastNode.remove()
        } else if (event.code === "Escape") {
            document.body.innerHTML = ""
        } else {
            div.textContent = (`${event.key}`)
            document.body.append(div)
        }
    })
}

const getColor = () => {
    let value = "#"
    const hex = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
        value += hex[Math.floor(Math.random(i) * hex.length)]
    }
    return value
}