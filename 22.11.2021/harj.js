//1. Print next array with foreach using either anonymous method or lambda
let numbers = ["one", "two", "three", "four", "five"];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[0])
}
let lambda = (x) => {
    console.log("numbers" + x);
}
lambda(numbers);

//2. Use Map to get 80% off all the prices in the array. (Make a test array with e.g. 5 different prices.)
let prices =[40, 50, 20, 60, 10];
let multiple = prices.map( item => item * 0.8);
console.log(multiple);

//3. Use Map-function to replace all the John names with Matti in an array of names
let names = ["John", "Pekka", "Kasperi", "John", "Esko"];
names = names.map(name => {
    if(name==="John") {;
        return "Matti"; 
    }   
    return name;
});
console.log(names);
//4. Use filter to get only positive values from number array
let numbers2 = [-2, 1, 5, 8];
let positive = numbers2.filter(function(x) {
    return x > 0;
})
console.log(positive);
// 5. Use filter to get names that are longer than 8 and start with T
let name2 = ["Jukka", "Lemmikki", "Mansikki", "Tuulikkki", "Tarmo"];
let tNames = name2.filter(name2 => name2.length>8 && name2[0]==="T");
console.log(tNames);

//6. Check if all of the names in an array are longer than 0 letters. It this is true, calculate the cumulative sum of all the letters in the names.
if(names.every( sana => sana.length>0)) {
    let length = names.map(sana => sana.length);

    let summa = length.reduce( (previous, current) =>previous+current );
    console.log(summa);
}