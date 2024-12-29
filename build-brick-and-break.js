export const build = (arg) => {
    let j = 2
    for (let i = 1; i <= arg; i++) {
        setTimeout(() => {
            let newDiv = document.createElement("div")
            newDiv.setAttribute("id", `brick-${i}`)
            if (i === j) {
                newDiv.dataset.foundation = true
                j += 3
            }
            document.body.append(newDiv)
        }, i * 100)
    }
}

export const repair = (...ids) => {
    ids.forEach(id => {
        const element = document.getElementById(id)
        if (element.getAttribute("data-foundation")) {
            element.dataset.repaired = "in progress"
        } else {
            element.dataset.repaired = true
        }
    })
}

export const destroy = () => {
    const bricks = document.querySelectorAll('[id^=brick-')
    if (bricks.length > 0) {
        let brick = bricks[bricks.length-1]
        brick.remove()
    }
}