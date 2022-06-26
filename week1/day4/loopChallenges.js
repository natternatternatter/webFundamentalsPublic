//Print odds 1-20, using a loop write code that will console.log all of the odd values from 1 up to 20 //

function oddOrEven(int) { //find if any number is odd or even
    if (int % 2 == 0) {
        console.log (int + " is even");
    }
    else {
        console.log ( int + " is odd");
    }
}

for (var number = 1; number <= 20; number++) {
    oddOrEven(number);
}

function onlyOdds(finalNumber) { // given a final number to count to, find the numbers that are odd within that range
    for (var number = 1; number <= finalNumber; number++) {
        if (number % 2 != 0) {
            console.log (number + " is odd");
        }
    }
}

onlyOdds(20);


//Decreasing Multiples of 3, using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0 //

function divisibleByThree(int) { // find if any number is divisible by 3
    if (int % 3 == 0) {
        console.log (int + " is divisible by three");
    }
}

for (var number = 100; number >= 0; number--) {
    divisibleByThree(number);
}


//Print the sequence, using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5 //

for (var i = 4; i >= -3.5; i-=1.5) {
    console.log (i);
}


//Sigma, write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end //

function addAllNumUpTo(finalNumber) {
    var total = 0;
    for (var num = 0; num <= finalNumber; num++) {
        total += num;
    }
    return total;
}

console.log (addAllNumUpTo(100));


//Factorial, write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end //

function factorial(finalNumber) {
    var product = 0;
    for (var num = 1; num <= finalNumber; num++) {
        product *= num;
    }
    return product;
}

console.log (factorial(12));