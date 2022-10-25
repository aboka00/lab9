let a = 5
let b = 4

console.log("a = 5")
console.log("b = 4")

// First problem
function ratio(x, y){
    result = x / y
    return result
}
console.log(ratio(a, b))

// Second problem
function equality(x, y){
    if(x == y){
        return "a and b are equal"
    } else {
        return "a and b are not equal"
    }
}
console.log(equality(a, b))


// Third problem
function greatest(x, y){
    if(x > y){
        return "a is greatest among the given two numbers"
    } else {
        return "b is greatest among the given two numbers"
    }
}
console.log(greatest(a, b))
