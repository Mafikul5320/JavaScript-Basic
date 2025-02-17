function powerOfEven(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 ===0){
            console.log(number)
            sum = sum + number;
        }
    }
    return sum;
}

const even = [12, 3, 8, 13, 14, 19, 17]
const overEven = powerOfEven(even)
console.log('mot jor number:', overEven)