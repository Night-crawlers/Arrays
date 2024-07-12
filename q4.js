
let arr = [10,20,10]

// 10,, [10,20], [10,20,30], 20, [20,30], 30

// count number of subArrays 

// count how many subArray sum is less than 50 

// count how many subArray  is  pallindrome

// [10,20,10] => [10,20,10] => 40

// [10], [10,20], [10,20,30] ...
let count = 0
let countLessThanFifty = 0
for( i = 0; i<=arr.length-1; i++){ // 0

    for(let j = i; j<=arr.length-1; j++){ // 0

         let subArray = arr.slice(i,j+1) // arr.slice(0,2) => [10]
         if(subArray.length>0){
            count++
            let sum = 0
            for(let t of subArray){
               sum = sum + t
            }
            if(sum<50){
                // console.log(subArray)
                countLessThanFifty++
            }
            if(checkPallindrome(subArray) == true){
                console.log("Pallindrome", subArray)
            }
         }

    }
     
}

console.log("Toatal Subarray", count) // 6
console.log("Subarray sum less than 50", countLessThanFifty) // 4





function checkPallindrome(arr){
    // [10,20,10] => [10,20,10] 
    // let revArr = 
    let rev = [...arr] 
    rev.reverse()
     // arr = [10,20,10]
     // rev = [10,30,10]
    for(let i = 0; i<=arr.length-1; i++){
       if(arr[i] != rev[i]){
          return false
       }
           
    }

    return true

}


// console.log(checkPallindrome([10,20,40]))

