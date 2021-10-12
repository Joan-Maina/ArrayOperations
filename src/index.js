function arrayOperations(Array){
let newArray = [];
for(var i = 0; i < Array.length; i++){
    if(Array[i] === '+' && i > 1){
        newArray.push(newArray[newArray.length-2] + newArray[newArray.length-1]);
    }else if(Array[i] === 'D'){
        newArray.push(newArray[newArray.length-2] * newArray[newArray.length-1])
    }else if(Array[i] === 'C'){
      newArray.pop();
    }else if(typeof Array[i] === 'number'){
        newArray.push(Array[i]);

    }else{
        console.log('input correctly');
    }
}
console.log(newArray);
var sumArray = newArray.reduce(mySum);
function mySum(sum, num){
    return sum + num;
}

console.log(sumArray);
}

arrayOperations([10, 9, '+' , 'D' , 'C' , '+',6,7,'D']);