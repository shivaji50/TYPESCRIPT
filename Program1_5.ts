
function Fibonacci(iNo:number)
{
    var t1:number=0
    var t2:number=1
    console.log(t1,t2)
    for(var t:number=1;t<iNo;)
    {
        console.log(t=t1+t2)
        t1=t2
        t2=t
    }
}

Fibonacci(21)