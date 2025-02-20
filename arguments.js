function add(num1, num2)
{
    console.log(arguments);
    console.log(num1, num2);
    console.log(arguments[2]);
}

add(12, 13, 34,35,353);