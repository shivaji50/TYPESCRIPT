
function CheckPrime(iNo:number):Boolean
{
    for(var i:number=2;i<iNo;i++)
    {
        if(iNo%i==0)
        {
            break

        }
    }

    if(i==iNo)
    {
        return true
    }
    else
    {
        return false
    }
}

var iRet:Boolean
iRet=CheckPrime(11)
if(iRet==true)
{
    console.log(iRet)
}
else
{
    console.log(iRet)
}