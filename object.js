const country = ['Bangladesh', 'Pakistan', 'USA', 'UK']
const subject = 'Bangla'
const product = {
    price : '50',
    weight : '10kg',
    names : 'car',
    colour : "white"
}

const karim = {
    age : 22,
    marid : true,
    'fav place' :[ 'cox-bazer', 'bnador-ban', 'kasmir'],
    salary : 60000,
    offDay : 'friday'

}
karim.salary = 70000,
karim['fav place'] = [ 'ice-land','Dubai','cox-bazer', 'bnador-ban', 'kasmir'],


console.log(karim.age)
console.log(karim['age'])
console.log(karim['fav place'])