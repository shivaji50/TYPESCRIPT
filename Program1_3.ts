
function DisplayFactors(iNo:number)
{
    for(var i:number=1;i<iNo;i++)
    {
        if(iNo%i==0)
        {
            console.log(i)
        }
    }
}

DisplayFactors(20)