const emptyPuzzle = `
2001
0..0
1000
0..0`

const words = ['casa', 'alan', 'ciao', 'anta']

// const array = [
//     [ '2', '0', '0', '1' ],
//     [ '0', '.', '.', '0' ],
//     [ '1', '0', '0', '0' ],
//     [ '0', '.', '.', '0' ]
//   ]

//   const words = [
//     'sun',
//     'sunglasses',
//     'suncream',
//     'swimming',
//     'bikini',
//     'beach',
//     'icecream',
//     'tan',
//     'deckchair',
//     'sand',
//     'seaside',
//     'sandals',
//   ]
  

const crosswordSolver = (arr, str) => {
    str = toTwoDimension(str)
    if (isDuplicated(arr) || numberCheck(str) !== arr.length) {
        return 'Error'
    }
    return str
    
}

const toTwoDimension = (str) => {
    const splitted = str.split("\n")
    let twodimensionArray = [];
    for (let i = 0; i < splitted.length; i++) {
        twodimensionArray.push(splitted[i].split(""))
    }
    return twodimensionArray
}

const numberCheck = (arr) => {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!Number.isNaN(parseInt(arr[i][j]))) {
                res += parseInt(arr[i][j]);
            } else {
                continue;
            }
        }
    }
    return res
}

const isDuplicated = (arr) => {
    let duplicate = []
    for (let i = 0; i < arr.length; i++) {
        if (!duplicate.includes(arr[i])) {
            duplicate.push(arr[i])
        }
    }
    return arr.length !== duplicate.length;
}

const findWordSlots = (arr) => {
    const rows = arr.length;
    const cols = arr[0].length;

    console.log(arr);
    console.log(arr[0]);
    

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            
        }
    }
}

console.log(crosswordSolver(words, emptyPuzzle))
// console.log(numberCheck(array));
// console.log(toTwoDimension(emptyPuzzle));
// console.log(findWordSlots());

