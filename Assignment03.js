// Even or Odd
function IsNumberEven(Num) {
    if (Num % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
var Num2 = 400;
var Check = IsNumberEven(Num2);
console.log("The number", Num2, "is", Check);
