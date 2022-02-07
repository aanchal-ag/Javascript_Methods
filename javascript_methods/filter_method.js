var test = [1,2,3,4,5];
console.log("before "+ test);
// filtering even numbers 

var newArray=[];
(function (array, operation)
{
    for(var i=0;i<array.length;i++)
    {
        if(test[i]%2==0)
            newArray.push(operation(test[i]));
    }
    console.log(newArray);
}) (test, function(index)
{
    if(index%2==0)
        return index;
});

