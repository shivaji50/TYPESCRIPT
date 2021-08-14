function sequence()
{
    console.log("Demostration of sequence");
    var arr:number[]=[10,20,30,40];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
}

function iteration1():number
{
    console.log("Demostration of iteration");
    var arr:number[]=[10,20,30,40];
    var iCnt:number=0;
    var iSum:number=0;

    iSum=iSum+arr[0];
    iSum=iSum+arr[1];
    iSum=iSum+arr[2];
    iSum=iSum+arr[3];

    return iSum;
}

function iteration2():number
{
    console.log("Demostration of iteration");
    var arr:number[]=[10,20,30,40];
    var iCnt:number=0;
    var iSum:number=0;

    for(iCnt=0;iCnt<arr.length;iCnt++)
    {
        iSum=iSum+arr[iCnt];
    }
    return iSum;
}

function iteration3():number
{
    console.log("Demostration of iteration");
    var arr:number[]=[10,20,30,40];
    var iValue:number=0;
    var iSum:number=0;

    for(iValue of arr)  //for each loop sarka
    {
        iSum=iSum+iValue;
    }
    return iSum;
}

function iteration4():number
{
    console.log("Demostration of iteration");
    var arr:number[]=[10,20,30,40];
    var iSum:number=0;

    for(var iIndex in arr)
    {
        iSum=iSum+arr[iIndex];
    }

    
    return iSum;
}


function iteration5():number
{
    console.log("Demostration of iteration");
    var arr:number[]=[10,20,30,40];
    var iCnt:number=0;
    var iSum:number=0;

    /*for(iCnt=0;iCnt<arr.length;iCnt++)
    {
        iSum=iSum+arr[iCnt];
    }*/

    while(iCnt<arr.length)
    {
        iSum=iSum+arr[iCnt];
        iCnt++;
    }


    return iSum;
}


function iteration6():number
{
    console.log("Demostration of iteration");
    var arr:number[]=[10,20,30,40];
    var iCnt:number=0;
    var iSum:number=0;

   /* while(iCnt<arr.length)
    {
        iSum=iSum+arr[iCnt];
        iCnt++;
    }*/
    
    do
    {
        iSum=iSum+arr[iCnt];
        iCnt++;
    }while(iCnt<arr.length)



    return iSum;
}

function Compare(iNo1:number,iNo2:number)
{
    if(iNo1>iNo2)
    {
        console.log("first is greater than second");
    }
    else if(iNo1<iNo2)
    {
        console.log("First is less then second");
    }
    else if(iNo1==iNo2)
    {
        console.log("Both are equal");
    }
}

function MyDate(iNo:number)
{
    if(iNo==1)
    {
        console.log("Monday");
    }
    else if(iNo==2)
    {
        console.log("Tuesday");
    }
    else if(iNo==3)
    {
        console.log("Wednesday");
    }
    else if(iNo==4)
    {
        console.log("Thursday");
    }
    else if(iNo==5)
    {
        console.log("Friday");
    }
    else if(iNo==6)
    {
        console.log("Saturday");
    }
    else if(iNo==7)
    {
        console.log("Sunday");
    }
    else
    {
        console.log("Wrong Input");
    }
}

function MyDate2(iNo:number)
{
    switch(iNo)
    {
        case 1:
            console.log("Monday");
            break;
         
        case 2:
             console.log("Tuesday");
             break; 
        
        case 3:
            console.log("Wednesday");
            break;
            
        case 4:
             console.log("Thursday");
             break;
             
        case 5:
            console.log("Friday");
            break;
            
        case 6:
            console.log("Saturday");
            break;
            
        case 7:
            console.log("Sunday");
            break;
            
        default:
            console.log("Wrong input");
            break;    
    }
}


MyDate(6);
MyDate2(6);
Compare(100,70);

var iRet:number=0;
iRet=iteration6()
console.log("Addition is :",iRet);


//sequence();