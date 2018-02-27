function numbersOnly(arr)
{
    var newarr = [];
    for(var iii = 0; iii < arr.length; iii++)
    {
        if(typeof arr[iii] === "number")
        {
            newarr.push(arr[iii]);
        }
    }
    return newarr;
}

var arr = ["crap", 66, "boop", 75, "doot", 22, 21];
var newarr = numbersOnly(arr);
console.log(newarr);