/* eslint-disable indent */

//Drill 1
// function sheep(num) {
//     for (let i=num; i > 0; i--) {
//         console.log(`${i}: Another sheep jumps over the fence`);
//     }
//     console.log('All Sheep jumped over the fence')
// }

// sheep(3);
    // o(n) because it increases linearly.

// //Drill 2
// function powerCalculator(base, exp) {
//     if (exp < 0) {
//         return "exponent should be >= 0"
//     }

//     return Math.pow(base, exp);
// }
    // o(1) because the values you pass in dont effect the amount of work the function has to do.


// //Drill 3
// function reverseString(str) {
//     let reverse = '';

//     for (let i = str.length-1; i >=0; i--) {
//         reverse += str[i];
//     }

//     return reverse;
// }
    //O(n) is linear because if you increase the size of the string it will effect how quickly you recieve the output.

//  //Drill 4
// function triangle(nth) {
//     let result=0;
//     for(let i=1; i <= nth; i++){
//         result += i 
//     }
//     return result
// }
// triangle(6)
// console.log(triangle(6))
    //o(n) is linear 

//  //Drill 5
// function stringSplitter(str){
//     let newArr = str.split('/')
//     return newArr
// }

// stringSplitter('01/21/2020')
// console.log(stringSplitter('01/21/2020'))
    //O(n) because the split method goes through each index looking for the /, if there are multiple /s then it will take longer to find all of them.

//  //Drill 6
// function fibonacci(num) {
//     let result=[];
//     for(let i = 0; i <= num; i++){
//         if(i <= 1) {
//             result.push(1)
//         } else {
//             result.push(result[i - 1] + result[i - 2]);
//         }
//     }
//     return result;
// }
// fibonacci(7);
// console.log(fibonacci(7))

    //O(n) because the alogrithm does a proportionate amount of work, which is  determined by the input


//  //Drill 7
function factoralize(num) {
   let result = 1;
   for(let i=1; i <= num; i++){
    result = result * i;
   }
   return result 
}

factoralize(5)
console.log(factoralize(5))

//O(n) because the algorithm  does a proportionate amount of work determied by the input