// A program to check wheather the given number is divisible by 5 or not


function check(no:number):boolean
{
    if(no%5==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var ret:boolean=check(20);
if(ret==true)
{
    console.log("The number is divisible by 5 ");
}
else
{
    console.log("The number is not divisible by 5");
}