
function* fibs() {
    let [current, next, result] = [0,1,0]
    if (current === 0) {
        yield current
        yield next
    }
    while (result < 100) {
        result = current + next
        current = next
        next = result
        yield result
    }
}

function* evenFibs() {
    for (fib of fibs()) {
        if (fib%2 === 0) {
            yield fib
        }
    }
}

for (fib of evenFibs()) {
    console.log(fib)
}
