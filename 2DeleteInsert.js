
// let arr = [10,20,30,40,50]


// push and pop


// let x = arr.pop() // remove the last element => 50, [10,20,30,40]
// let y = arr.pop() // remove the last element => 40


// console.log(arr,x,y)

// push: add an element at the end of the array

// arr.push(60) // [10,20,30,40,50,60]
// let z = arr.push(60,70,80) // [10,20,30,40,50,60,70,80]

// console.log(arr, z)

// let arr = [10,20,30,40,50]
// for(let t of arr){
//     arr.pop()
// }
// arr.pop() 
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()

// for(let i = 0; i<=arr.length-1; i++){ //  5 times
//     //  console.log(i, arr.length-1, arr)
//     arr.pop() 
//     // console.log(arr, arr.length)
// }
// // console.log(arr) // []

// let a = 5
// for(let i = 1; i<=a; i++){
//     console.log(i)

//     a = a-1
// }

 // i = 1, a = 5  =>  a = 4
 // i = 2, a = 4 => a = 3
 // i = 3, a = 3 => a = 2
 //i = 4, a = 2  false



 // shift and unshift => this works at the start of the array


//  let arr = [10,20,30,40,50]

//  let x = arr.shift() // remove the first element => 10, [20,30,40,50]

// let y = arr.unshift(100,200,300,400)

//  console.log(arr, y)    




let arr = ["apple", "banana", "mango", "orange", "grapes", "kiwi", "papaya", "watermelon"]

// splice


// arr.splice(2,2) => deletion


// arr.splice(2,0, "gauva", "cherry", "strawberry") // insertion


arr.splice(3,1,"cherry")

console.log(arr) 