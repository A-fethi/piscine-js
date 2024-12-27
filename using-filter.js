const filterShortStateName = (arr) => {
    return arr.filter((word) => word.length < 7)
}

const filterStartVowel = (arr) => {
    const vowels = 'aeiouAEIOU'
    return arr.filter((word) => vowels.includes(word[0]))
}

const filter5Vowels = (arr) => {
    const vowels = 'aeiouAEIOU'
    return arr.filter((word) => {
        const count = [...word].filter(char => vowels.includes(char)).length;
        return count >= 5;
    });
}

const filter1DistinctVowel = (arr) => {
    const vowels = 'aeiouAEIOU'
    return arr.filter((word) => {
        const include = [...word].filter(char => vowels.includes(char))
        let lower = [];
        for (let i = 0; i < include.length; i++) {
            lower.push(include[i].toLowerCase())
        }
        const isDistinct = new Set(lower)
        
        return isDistinct.size === 1
    });
}


const multiFilter = (arr) => {
    const vowels = 'aeiouAEIOU'
    return arr.filter((item) => {
        const capitalCheck = item.capital.length >= 8;
        const nameCheck = !vowels.includes(item.name[0]);
        const tagCheck = [...item.tag].filter(char => vowels.includes(char)).length >= 1;
        const regionCheck = item.region !== 'South';
        return capitalCheck && nameCheck && tagCheck && regionCheck;
    })
}
