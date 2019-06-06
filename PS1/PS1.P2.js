
let addExpression = '4+2';
let multExpression = '5*7';
let subExpression = '6-1';
let divExpression = '9/2';


const evaluate = str => {
    const operator = str[1];
    switch (operator) {
        case '+':
            return parseInt(str[0]) + parseInt(str[2]);
            break;

        case '*':
            return parseInt(str[0]) * parseInt(str[2]);
            break;

        case '-':
            return parseInt(str[0]) - parseInt(str[2]);

        case '/':
            return parseInt(str[0]) / parseInt(str[2]);
            break;
    }
}

console.log(`${addExpression} = ${evaluate(addExpression)}`)
console.log(`${multExpression} = ${evaluate(multExpression)}`)
console.log(`${subExpression} = ${evaluate(subExpression)}`)
console.log(`${divExpression} = ${evaluate(divExpression)}`)
