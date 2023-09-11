function sequence(arr,target){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}


function binarySearchPosition(numbers, target) {
// your code here
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

console.log(sequence([1, 8, 9, 6, 7], 8)); 

//console.log(sequence([1, 2, 5, 6, 7], 6)); 

//console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); 
// should print 0
//console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); 
// should print 3
    