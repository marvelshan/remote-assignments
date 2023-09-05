/*
You will learn the basic skill of javascript next week, but it’s a good time to try to overcome
some simple problems on your own first. Your job is to complete the following two functions.
*/

function countAandB(input) {
    var number1 = 0 ;
    var number2 = 0 ;
    for(let i = 0; i <= input.length; i++ ){
        if ( input[i] == 'a' ){ 
            number1 = number1 + 1;
        }else if( input[i] == 'b' ){
            number2 = number2 + 1;
        }
    }
    let answer = number1 + number2;
    return answer;
}

function toNumber(input) {
    return input.map(char => {
        const number = char.charCodeAt(0);
        if (number >= 97 && number <= 122){ 
            return number - 96;
        }
    });
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];

console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]



let input2 = ['e', 'd', 'c', 'd', 'e'];

console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
    
