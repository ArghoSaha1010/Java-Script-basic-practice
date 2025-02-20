// const numbers = [334,34,3534,73546,2345,23];
// for(let i = 0; i<numbers.length; i++)
// {
//     console.log(numbers[i]);
// }

// for(const number of numbers)
// {
//     console.log(number);
// }

// for(const product of products)
// {
//     console.log(product);
// }


const products = 
[
    {id:1, name:'xaomi phone one night', price: 20000},
    {id:2, name:'I-phone', price: 20000},
    {id:3, name:'one plus', price: 20000},
    {id:4, name:'nokia phone', price: 20000},
    {id:5, name:'XTC', price: 20000},
    {id:6, name:'samsung phone', price: 20000},
    {id:7, name:'mac book air', price: 20000},
    {id:8, name:'intel phone', price: 20000}
];

function matchedProducts(products, search)
{
    const array = [];
    for(const product of products)
    {
        if(product.name.toLowerCase().includes(search.toLowerCase()))
        {
            array.push(product);
        }
    } 
    return array;
}
const result = matchedProducts(products, 'Phone');
console.log(result);