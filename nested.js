const college = 
{
    name: 'mintu',
    class: ['11', '12'],
    event: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: 
    {
        color: 'blue',
        result: 
        {
            gpa: 5,
            merit: 'top'
        }
    }
}
console.log(college.unique.color);

console.log(college);

console.log(college.unique.result.merit);
college.unique.result.merit = 'top top top most';
console.log(college.unique.result.merit);


delete college.event;
console.log(college);
