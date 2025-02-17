// for of: use kora hoy array er jonne ba normal kaje 
// for in: use kora hoy object er loop er khetre

const mobile =
{
    brand: 'samsung',
    color: 'black',
    camara: '12mp',
    price: 30000,
    isNEw: true
}
// for(const prop in mobile)
// {
//     console.log(prop);
//     console.log(mobile[prop]);
// }

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys)
{
    console.log(key, ':', mobile[key]);
}

console.log(mobile['item']);