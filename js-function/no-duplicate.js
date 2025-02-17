function noDuble(arrey){
    const onePis =[];
    for(const item of arrey){
        if(onePis.includes(item)=== false){
            onePis.push(item)
        }
    }
    return onePis;
}
const names = ['jodo', 'modo', 'kodo',  'jodo', 'modo', 'ikbo', 'manbo', 'manbo']
const noTwo = noDuble(names)
console.log(noTwo)


