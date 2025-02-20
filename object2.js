const nayok = 
{
    name: 'sakib khan',
    address: 'movie cinema',
    id: 121,
    isSingle: true,
    friends: ['Apu', 'Raaz', 'salman', 'amir'],
    movies: [{name:'no 1', year: 2015}, {name: 'King khan', year: 2018}],
    act: function()
    {
        console.log("function kaj kortese");
    },
    car:
    {
        brand: 'tesla',
        price: 50000000000,
        made:2025,
        manufacturer:
        {
            name: 'Tesla',
            ceo: 'Elon mask',
            country: 'USA'
        }
    }
}
// console.log(student.car['manufacturer']);
console.log(nayok.act);
nayok.act();