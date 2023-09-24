// Part1 callback

function delayedResult(n1, n2, delayTime, callback) {
    // your code here
    setTimeout(() => {
        let result = n1 + n2;
        callback(result);
    },delayTime);
}
delayedResult(4, 5, 3000, function (result) {
console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds


// Part2 Promise

function delayedResultPromise(n1, n2, delayTime) {
    // your code here
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let answer = n1 + n2;
            resolve(answer);
        }, delayTime);
    })
}
delayedResultPromise(4, 5, 3000).then((answer) => {
    console.log(answer);
});
// 9 (4+5) will be shown in the console after 3 seconds

// Part3 async,await

async function main() {
    // your code here, you should call delayedResultPromise here andget the result using async/await.
    let result = await delayedResultPromise(6, 5, 3000);
    console.log(result);
}
main(); // result will be shown in the console after <delayTime>seconds
    