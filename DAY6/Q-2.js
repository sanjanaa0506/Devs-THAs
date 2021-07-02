//2.	Write a JavaScript function to clone an array
//Test Data :
//console.log(array_Clone([1, 2, 4, 0]));
//console.log(array_Clone([1, 2, [4, 0]]));
//[1, 2, 4, 0]
//[1, 2, [4, 0]]

function array_Clone(input)
{
    return input.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

