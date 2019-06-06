
let str = 'supercalifragilisticexpialidocious';

const modify = (str, func) => {
    return func(str);
}

const split = str => {

    const array = [];
    let lastC = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'c') {
            array.push(str.slice(lastC, i));
            lastC = i;

        }
    }
    array.push(str.slice(lastC, str.length));
    return array;
}

const replace = str => {

    let newStr = '';
    let numA = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            newStr += 'A';
            numA += 1;
        }
        else {
            newStr += str[i];
        }
    }
    return {
        originalString: str,
        modifiedString: newStr,
        numberReplaced: numA,
        length: str.length
    }
}

console.log(modify(str, split))
console.log(modify(str, replace))
