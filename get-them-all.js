export const getArchitects = () => {
    const architects = Array.from(document.getElementsByTagName('a'))
    const nonArchitects = Array.from(document.getElementsByTagName('span'))
    return [architects, nonArchitects]
}
export const getClassical = () => {
    const classical = Array.from(document.getElementsByClassName('classical'))
    console.log(classical);
    
    const nonClassical = Array.from(document.querySelectorAll('a:not(.classical)'))
    return [classical, nonClassical]
}
export const getActive = () => {
    const active = Array.from(document.getElementsByClassName('active'))
    const nonActive = Array.from(document.querySelectorAll('a:not(.classical.active)'))
    return [active, nonActive]
}
export const getBonannoPisano = () => {
    const valid = document.getElementById('BonannoPisano')
    const nonValid = document.querySelectorAll('a:not(#BonannoPisano)')
    return [valid, nonValid]
}
