function hed (num1){
    const size = num1.length
    console.log('size:', size , num1)
    if(size % 2 ===0){
        console.log('jor number')
        return true;
    }
    else{
        console.log('bajor number')
        return false
    }
}
console.log(hed)
hed('Dhaka')
hed('Tangails')