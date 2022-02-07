var test =[1,2,3,4,5];
console.log('Before ' +test);
var newArray=[];
(function (array, operation)
{
    
    for( var i=0 ;i<array.length;i++)
    {
        newArray.push((operation(array[i])));
    }
    console.log('After '+newArray);
}) (test, function(index)
{
    return index*2;
});


