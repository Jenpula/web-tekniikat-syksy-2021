//1. Print next array with foreach using either anonymous method or lambda
let numbers = ["one", "two", "three", "four", "five"];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[0])
}
let lambda = (x) => {
    console.log("numbers" + x);
}
lambda(numbers);