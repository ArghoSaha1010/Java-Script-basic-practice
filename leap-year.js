function isLeapYear(year)
{
    if((year % 4 === 0) && (year % 100 !== 0))
    {
        return true;
    }
    if((year % 100 === 0)&&(year % 400 === 0))
    {
        return true;
    }
    else
    {
        return false;
        
    }
}

if(isLeapYear(2032))
{
    console.log("it's a Leap year.");
}
else
{
    console.log("it's not a Leap year.");
}
const today = new Date();
console.log(today)




// for (var i = 0; i < 5; i++) 
    
//     {
//     setTimeout( function () {    console.log(i);     }, 100 );
//     }

    

