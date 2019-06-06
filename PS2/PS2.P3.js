
//FIND A WAY TO MAP THE FUNC ONTO THE ITERATOR


const cube = num => {
    return num*num*num;
}

function* getArrayElements () {
    yield* [1,2,3,4,5,6,7]
}

for (val of getArrayElements()) {
    console.log(cube(val))
}
