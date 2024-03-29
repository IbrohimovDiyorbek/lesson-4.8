const numbers = [2, 4, 9, 10, 45, 67, 8, 9 + "Boshlanishdagi arrayy!"];
const evenNumbers = ["Juft sonlarga ajratadigan arrayy!"];
for (const number of numbers){
    if (number % 2 === 0){
        evenNumbers.push(number);
    }
}

console.log(numbers);
console.log(evenNumbers);