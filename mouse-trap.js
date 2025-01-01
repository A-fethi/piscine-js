let lastCircle;
export const createCircle = () => {
    document.addEventListener("click", e => {
        let div = document.createElement("div")
        div.setAttribute("class", "circle")
        div.style.background = "white"
        div.style.left = `${e.clientX}px`
        div.style.top = `${e.clientY}px`
        document.body.append(div)
        if (lastCircle){
            lastCircle.removeEventListener()
        }
        lastCircle = div
        moveCircle(div)
    })
}

export const moveCircle = (circle) => {
    document.addEventListener("mousemove", event => {
        circle.style.left = `${event.clientX}px`;
        circle.style.top = `${event.clientY}px`;
    })
}

export const setBox = () => {
    const box = document.createElement("div")
    box.setAttribute("class", "box")
    document.body.append(box)
    console.log(box.getBoundingClientRect())
}