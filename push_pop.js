const ages = [];
const numbers = [1,123,123,1,2];
console.log(numbers);
numbers.push(44);
numbers.push(435);
ages.push(435);
console.log(numbers);
console.log(ages);
let store2 = numbers.pop();
console.log(numbers);
ages.push(99);
ages.push(100);
let store1 = ages.pop();
console.log(ages);
console.log(store1, store2);
