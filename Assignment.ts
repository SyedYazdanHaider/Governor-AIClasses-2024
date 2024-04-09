// tell ticket price according to the age.
function ticket(Age:number){
    let ticketPrice : number = 0
    if (Age>0 ){
        if (Age<=4){
            console.log("For Age",Age,",No ticket required")
        }
        if (Age>4 && Age<=10){
            ticketPrice = 100
            console.log("For Age",Age,",The ticket price = Rs.",ticketPrice)
        }

        if (Age>10 && Age<=18){
           ticketPrice = 150
           console.log(`For Age ${Age},The ticket price = Rs.${ticketPrice}`)
        }
        if(Age > 18){
            ticketPrice = 200
            console.log("For Age",Age,",The ticket price = Rs.",ticketPrice)
        }
    }
    else{
            console.log(Age,"is invalid age")
    }

}

ticket(3)
ticket(7)
ticket(13)
ticket(36)
ticket(-29)