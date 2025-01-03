export const compose = () => {
    document.addEventListener('keydown', (event) => {
        const div = document.createElement("div")
        const randomColor = getRandomColor();
        div.setAttribute("class", "note")
        div.style.backgroundColor = randomColor;
        
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

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}