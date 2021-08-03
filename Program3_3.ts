
class Cricle
{
    Radius:number;
    pi:number;
    ans:number;

    constructor(x:number)
    {
        this.Radius=x;
        this.pi=3.14;
        this.ans=0;
    }
    Area():number
    {
        this.ans=this.pi*this.Radius*this.Radius;
        return this.ans;
    }
}

class CricleX extends Cricle
{
    
    Circumference():number
    {
        this.ans=2*this.pi*this.Radius;
        return this.ans;
    }
}

var iret : number = 0;
var obj1 = new CricleX(7);
var obj2 = new CricleX(3);

iret = obj1.Area();
console.log("Area of onj1 is :",iret);
iret = obj2.Area();
console.log("Area of obj2 is : ",iret);

iret = obj1.Circumference();
console.log("Circumference of onj1 is :",iret);
iret = obj2.Circumference();
console.log("Circumference of obj2 is : ",iret);