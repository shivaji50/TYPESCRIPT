class Arithmetic
{
    Number1:number;
    Number2:number;

    constructor(No1:number, No2:number)
    {
        this.Number1=No1;
        this.Number2=No2;
    }

    Addition():number
    {
        var ans:number;
        ans=this.Number1+this.Number2;
        return ans;
    }

    Subtraction():number
    {
        var ans:number;
        ans=this.Number1-this.Number2;
        return ans;
    }

    Multiplication():number
    {
        var ans:number;
        ans=this.Number1*this.Number2;
        return ans;
    }

    Division():number
    {
        var ans:number;
        ans=this.Number1/this.Number2;
        return ans;
    }
}

var ret:number=0;
var obj1=new Arithmetic(10,20);
var obj2=new Arithmetic(200,100);

ret=obj1.Addition();
console.log("The Addition of obj1 :",ret);
ret=obj1.Subtraction();
console.log("The Substraction of obj1 :",ret);
ret=obj1.Multiplication();
console.log("The Multiplication of obj1 :",ret);
ret=obj1.Division();
console.log("The Division of obj1 :",ret);

ret=obj2.Addition();
console.log("The Addition of obj2 :",ret);
ret=obj2.Subtraction();
console.log("The Substraction of obj2 :",ret);
ret=obj2.Multiplication();
console.log("The Multiplication of obj2 :",ret);
ret=obj2.Division();
console.log("The Division of obj2 :",ret);