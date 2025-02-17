function oddnumber(numbers){
    const storeOdd = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(number)
            storeOdd.push(number)
        }
    }
    // console.log(storeOdd)
    let sum = 0;
    for(const number of storeOdd){
        sum = sum + number;
    }
    const lengt = storeOdd.length;
    // console.log(sum ,lengt)
    const avg = sum / lengt;
    return avg;
}


const odd =[1, 36, 22, 15, 6, 9, 45, 65, 7]
const total = oddnumber(odd)
console.log('Average number:', total)
