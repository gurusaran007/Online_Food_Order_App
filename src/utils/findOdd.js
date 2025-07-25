 // program to check if a number is prime or not

// take input from the user

function findOdd(number){
  

// check if number is equal to 1
if (number === 0 ) {
    return ("0 is neither odd nor even number");
}

// check if number is greater than 1
else if (number > 0) {

    if(number%2 === 0){
        return "even"
    }

    else{
        return "odd"
    }
}

}

export default findOdd