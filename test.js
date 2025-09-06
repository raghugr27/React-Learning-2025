let arr_list =[10,4,5,6,8,9]

const addNumberBasedOnType = (index, type) => {

    if(index<0) return 0;
    let isOdd = arr_list[index] % 2 !==0;
    let isEven = !isOdd;
    let isValueCorrect = (type === "odd" && isOdd) || (type === "even" && isEven);
    return (isValueCorrect ? arr_list[index] : 0) + addNumberBasedOnType(index-1,type);  
}
console.log(`Total Sum of Odd Numbers is : ${addNumberBasedOnType(arr_list.length-1,"odd")}`);

const addArrayNumber =(index)=>{
    if (index<0) return 0;
    return arr_list[index] + addArrayNumber(index-1);
}
console.log(`Total Sum of Array is : ${addArrayNumber(arr_list.length-1)}`);


const factorialOfNumber =(num)=>{
      if (num < 0)  return "Factorial is not defined for negative numbers";
    if (num===1 || num===0) return 1;
    return num * factorialOfNumber(num-1);
}
console.log(`Factorial of -1 is : ${factorialOfNumber(-1)}`);
