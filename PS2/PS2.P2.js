
function* print(str) {
    let Array = str.split(" ");
    for (word in Array) {
        yield Array[word]
    }
}

for (word of print("All I know is something like a bird within her sang")) {
    console.log(word)
}
