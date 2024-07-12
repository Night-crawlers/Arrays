function checkPallindrome(arr){ 
    let rev = [...arr] 
    rev.reverse()
    let str1 = arr.join("")
    let str2 = rev.join("")

    console.log(str1, typeof str1)
    console.log(str2, typeof str2)

    if(str1 == str2){
        return true
    }
    return  false

}


console.log(checkPallindrome([10,20,10]))// true




// for(let i = 0; i<=arr.length-1; i++){
//     if(arr[i] != rev[i]){
//        return false
//     }
        
//  }


// let str = "abhishek"  // ["a","b","h","i","s","h","e","k"]


// // console.log(str.split(""))
// let arr = str.split("") // ["a","b","h","i","s","h","e","k"]

// let combineStr = arr.join("")

// console.log(combineStr) // a,b,h,i,s,h,e,k



// a = "10"