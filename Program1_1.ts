
function Maximum(a:number,b:number,c:number):number
{
    if((a>b)&&(a>c))
    {
        return a
    }
    else if((b>a)&&(b>c))
    {
        return b
    }
    else
    {
        return c
    }
}


var iRet:number
iRet=Maximum(23,89,6)
console.log("The Maximum of 3 is :",iRet)