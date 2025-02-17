function leapyear (year){
    if(year % 100 !== 0 && year % 4 === 0 ){
        return true;
    }
    else if (year % 100 ===0 && year % 400 ===0 ){
        return true;
    }
    else{
        return false
    }
}

const call = leapyear(2028)
const call2 = leapyear(2025)
console.log(call, call2)