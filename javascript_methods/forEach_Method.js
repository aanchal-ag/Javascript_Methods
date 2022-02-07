var test=['orange','apple','watermelon'];
console.log('before '+test);

(function(array,operation)
{
    for(var i=0;i<array.length;i++)
    {
        console.log(i +":" +array[i]);
    }

})(test,function(index)
{
    return index;
});