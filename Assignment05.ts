function Is_Num_Max_Or_Min(Num1:number,Num2:number,Num3:number,Num4:number){
    let max = 0
    let min = 1000
    if (Num1 > max){
        max = Num1
    }
   if (Num2>max){
       max = Num2
     }
   if (Num3>max) {
       max = Num3
     }
    if (Num4>max) {
     max = Num4
                }
    if (Num1 < min){
        min = Num1
     }
    if (Num2 < min){
        min = Num2
    }
    if (Num3 < min) {
       min = Num3
    }
    if (Num4 < min) {
         min = Num4
        }
  console.log(`Among numbers ${Num1}, ${Num2}, ${Num3}, ${Num4}:
 The Max number = ${max}
 The Min number = ${min}`)
}
Is_Num_Max_Or_Min(5,50,0.5,500)
