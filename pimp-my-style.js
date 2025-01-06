import { styles } from './pimp-my-style.data.js'

let count = 0
export const pimp = () => {
    const click = document.querySelector("button")

    if (!click.classList.contains("unpimp")) {
        if (count < styles.length - 1) {
            click.classList.add(styles[count])
            count++
        } else {
            click.classList.add(styles[count])
            click.classList.add("unpimp")
        }
    } else {
        if (count > 0) {
            click.classList.remove(styles[count])
            count--
        } else {
            click.classList.remove(styles[count])
            click.classList.toggle("unpimp")
        }
    }
}

