var test =[175 , 50 , 25];
console.log("before "+test);

var reducedArray=test[0];

(function(array,operation)
{
    for(var i=1;i<array.length;i++)
    {
        reducedArray=reducedArray-array[i];
    }
    console.log("After ="+reducedArray);
    
})(test, function(index)
{
    return reducedArray;
});