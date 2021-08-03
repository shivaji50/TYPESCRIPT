class Circle
{
    Radius:number;
    PI:number;

    constructor(R:number)
    {
        this.Radius=R;
        this.PI=3.14;
    }

    Area():number
    {
        var ans:number;
        ans=this.PI*this.Radius*this.Radius;
        return ans;
    }
}

var ret:number=0;
var obj1=new Circle(10);
var obj2=new Circle(20);

ret=obj1.Area();
console.log("Area of obj1 Circle :",ret);
ret=obj2.Area();
console.log("Arae of obj2 Circle :",ret);