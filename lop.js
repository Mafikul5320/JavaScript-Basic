const mobile ={
    names : 'Tecno',
    display : 6.7,
    camara : '50 mp',
    battary : '6000 mAh'
}
// console.log(mobile)
const keys = Object.keys(mobile)
console.log(keys)

for(const key of keys){
    console.log(key,':' ,mobile[key])
}