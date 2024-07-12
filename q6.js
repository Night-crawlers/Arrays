
let arr = ["a", "b", "h", "I", "s", "h", "e", "k"]


// for(let t of arr){
//     if( t == "A" || t =="a" || t == "E" || t =="e" || t == "I" || t =="i" || t == "O" || t =="o" || t == "U" || t =="u"){
//                         console.log("Vowel", t)
//                  }
// }

let vowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]


for(let t of arr){
    // t = "a"
    // console.log(t)
    // console.log(t, vowel.indexOf(t))
    // if(vowel.indexOf(t)>=0){
    //     console.log("Vowel", t)
    // }
    if(vowel.includes(t) == true){
        console.log("Vowel", t)
    }
}
    