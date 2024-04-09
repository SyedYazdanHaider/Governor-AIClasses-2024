// Area of circle = pi* radius^2
function AreaOfCircle(radius:number){
  if(radius > 0){
    const pi = 3.14
    let Area : number = pi * radius*radius
    console.log(`For radius ${radius}, Area of Circle = ${Area}`)  
  }
  else{
    console.log(radius,"is invalid radius")
  }
}

AreaOfCircle(4)
AreaOfCircle(-5)
AreaOfCircle(7.577)
AreaOfCircle(98)