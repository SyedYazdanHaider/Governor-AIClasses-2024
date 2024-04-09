// // Functions
// // void Function
// function MyFun(){
//     let total = 2+2
//     console.log(total)
// }
// MyFun()
// // void function woh hota hai o sirf functionality ko perform karta hai liken kuch returrn nhi karta
// // hume 'return()' likhna hota hai agr kuch return karwana hai toh

// // Return Function

// function MyFun2(){
//     let total = 2 +2
//     return(total)
// }
// let totalNum = MyFun2()
// console.log("totalNum",totalNum)

// function MyFun3(){
//     console.log("Hello Function")
//     return(2+2)
// }
// let total = MyFun3()
// console.log(total)

// let user = "rattan lal"
// let otp = "123"
// if (user == "rattan lal") {
//     console.log("sending code...")
// }
// else{console.log("invalid code")}

// if(otp == "123"){
//     console.log("welcome rattan lal")
// }

// if(user == "Chaman lal"){
//     console.log("Hello Chaman lal")
// }
// else{console.log("only for chaman lal, Invalid user")}

// if (otp == "222") {
//     console.log('Welcome..')
// }
// else{console.log("Bye Bye invalid user")}

// // Nested if mai if ki body mai dusra if hota hai.

function Login(){
    let user = "rattan lal"
    let otp = "13"
    if (user == "rattan lal") {
        console.log("sending otp...")
        if (otp == "123") {
            console.log("Welcome rattan lal")
        }
        else{console.log("invalid otp")}
    }
    else{console.log("invalid username")}
}

Login()


function Total(num3 : number, num4:number){
    let add = num3 + num4
    return add
}
console.log(Total(10,9))
