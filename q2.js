

let arr = [10,20,30,40,50,60,70]
// console.log(arr[10])

let elementToBeDeletedIndex = 2


for(let i = elementToBeDeletedIndex; i<=arr.length-2; i++){
    // arr[i] = arr[i+1]
    // arr[2] = arr[3]
    // arr[3] = arr[4]
    // arr[4] = arr[5]
    // arr[5] = arr[6]
    arr[i] = arr[i+1]
}
arr.pop()
console.log(arr)

// delete arr[2] 

// console.log(arr[2]) 


// arr = [10,20,40,50,60,70,70]



let arr1 = [10,20,30,40,50,60,70]

// add 35 at index 3


