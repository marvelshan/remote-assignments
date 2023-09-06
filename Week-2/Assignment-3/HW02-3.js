function count(input) {
// your code here
    let answer = {};
    let count = 0;
    for(let i = 0; i < input.length; i++){
        if(answer[input[i]] = answer[input[i]]){
            count +=1;
            answer[input[i]] = count; 
        } else {
            answer[input[i]] = 1
        }
    }
    return answer;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}
function groupByKey(input) {
    // your code here

}
let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
