import { colors } from './fifty-shades-of-cold.data.js'

export const compose = () => {
    document.addEventListener('keydown', (event) => {
        const div = document.createElement("div")
        div.setAttribute("class", "note")
        div.style.backgroundColor = "orange"
        div.textContent = (`${event.key}`)
        document.body.append(div)
    })
}