
function Maximum(...arr:number[]):number
{
    var iMax:number=arr[0]

    for(var i:number=0;i<arr.length;i++)
    {
        if(arr[i]>iMax)
        {
            iMax=arr[i]
        }
    }

    return iMax
}

var iRet:number
iRet=Maximum(23,89,6,29,56,45,77,32)
console.log("Maximum number is :",iRet)