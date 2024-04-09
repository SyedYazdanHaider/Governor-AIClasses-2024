// Area of circle = pi* radius^2
function AreaOfCircle(radius) {
    if (radius > 0) {
        var pi = 3.14;
        var Area = pi * radius * radius;
        console.log("For radius ".concat(radius, ", Area of Circle = ").concat(Area));
    }
    else {
        console.log(radius, "is invalid radius");
    }
}
AreaOfCircle(4);
AreaOfCircle(-5);
AreaOfCircle(7.577);
AreaOfCircle(98);
