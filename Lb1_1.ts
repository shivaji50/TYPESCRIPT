// Division of 2 numbers

function divide(no1:number,no2:number):number
{
    if(no2==0)
    {
        return -1;
    }

    var ans:number=no1/no2;
    return ans;
}

var ret:number=divide(100,10);
console.log("Division is :",ret);