const names = ["argho", "saha", "fahed", "hassan", "hasib", "nayem", "tanvir"];
console.log(names);
names.shift();
console.log(names);
names.unshift('ghumailam');
console.log(names);
console.log(names.includes('fahed'))
console.log(names.includes('opppo'))

if(names.includes('ghumailam'))
{
    console.log('ajk eider din');
}
else
{
    console.log('mara');
}


if(names.includes('EID'))
    {
        console.log('ajk eider din');
    }
    else
    {
        console.log('mara');
    }
