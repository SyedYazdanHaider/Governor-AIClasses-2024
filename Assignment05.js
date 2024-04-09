function Is_Num_Max_Or_Min(Num1, Num2, Num3, Num4) {
    var max = 0;
    var min = 1000;
    if (Num1 > max) {
        max = Num1;
    }
    if (Num2 > max) {
        max = Num2;
    }
    if (Num3 > max) {
        max = Num3;
    }
    if (Num4 > max) {
        max = Num4;
    }
    if (Num1 < min) {
        min = Num1;
    }
    if (Num2 < min) {
        min = Num2;
    }
    if (Num3 < min) {
        min = Num3;
    }
    if (Num4 < min) {
        min = Num4;
    }
    console.log("Among numbers ".concat(Num1, ", ").concat(Num2, ", ").concat(Num3, ", ").concat(Num4, ":\n The Max number = ").concat(max, "\n The Min number = ").concat(min));
}
Is_Num_Max_Or_Min(5, 50, 0.5, 500);
// if(Num1>Num2){
//     if(Num1>Num3){
//         if(Num1>Num4){ 
//            }
//     }
//   }
