import { colors } from "./fifty-shades-of-cold.data.js";

export const generateClasses = () => {
    const style = document.createElement('style');
    let css = ''
    for (let i = 0; i < colors.length; i++) {
        css += `.${colors[i]} {
            background: ${colors[i]}
        }`;
    }
    style.textContent = css;
    document.head.appendChild(style)
}

export const generateColdShades = () => {
    const coldShades = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"];
    const filterColors = colors.filter(color => coldShades.some(shade => color.toLowerCase().includes(shade)))
    for (let i = 0; i < filterColors.length; i++) {
        const div = document.createElement("div")
        div.setAttribute("class", filterColors[i])
        div.style.backgroundColor = filterColors[i]
        div.textContent = filterColors[i]
        document.body.append(div)
    }
}

export const choseShade = (shade) => {
    const elements = Array.from(document.getElementsByTagName('div'));

    for (let i = 0; i < elements.length; i++) {
        if (!elements[i].classList.contains(shade)) {
            elements[i].className = `${shade}`;
            elements[i].style.backgroundColor = `${shade}`
        }
    }
};
