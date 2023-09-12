function binarySearchPosition(numbers, target) {
// your code here
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length-i-1; j++){
            if(numbers[j] > numbers[j+1]){
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }
    console.log(`New sequence is [${numbers}]`);
    let start = 0;
    let end = numbers.length - 1;
    let mid;
    while(start <= end){
        mid = Math.floor((start + end) / 2)
        if(target < numbers[mid]){
            end = mid - 1;
        } else if(target > numbers[mid]){
            start = mid + 1;
        } else{
            return mid;
        }
        
    }
}

console.log(binarySearchPosition([1, 8, 9, 6, 7], 8)); 
//排序法測試

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); 
// should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); 
// should print 3
    