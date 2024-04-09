// Even or Odd
function IsNumberEven(Num:number){
      if (Num%2 == 0){
        return "Even"
      }
      else{
        return "Odd"
      }
}
let Num2 = 400
let Check = IsNumberEven(Num2)
console.log("The number",Num2,"is",Check)
