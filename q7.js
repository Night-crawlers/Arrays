
let arr = [10,20,10,20,10,30,10,10,20]

// you to remove all duplicates values:
// [10,20,30]

let newArr = []  // [10,20,30]
for(let t of arr){
//    newArr.push(t)
  if(newArr.includes(t) == false){
      newArr.push(t)
  }
}

console.log(newArr)




// let arr1 = ["a", "b", "h", "I", "s", "h", "e", "k"]

// console.log(arr1.includes("z"))