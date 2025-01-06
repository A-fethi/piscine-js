export const generateLetters = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let res = ''
    let fontWeight;
    let fontSize = 11

    for (let i = 0; i < 120; i++) {
        const randomInd = Math.floor(Math.random() * alphabet.length)
        res = alphabet.charAt(randomInd)
        if (i < 120 / 3) {
            fontWeight = 300;
        } else if (i < (2 * 120) / 3) {
            fontWeight = 400
        } else {
            fontWeight = 600
        }
        let newDiv = document.createElement("div")
        newDiv.textContent = res
        newDiv.style.fontWeight = fontWeight
        newDiv.style.fontSize = `${fontSize}px`;
        fontSize++
        document.body.append(newDiv)
    }
}