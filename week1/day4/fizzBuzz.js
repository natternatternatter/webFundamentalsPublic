function fizzBuzz(int) {
    if ((int % 3) == 0 && (int % 5) == 0) {
        console.log ("FizzBuzz");
    }
    else if (int % 3 == 0) {
        console.log ("Fizz");
    }
    else if (int % 5 == 0) {
        console.log ("Buzz");
    }
    else {
        console.log (int);
    }
}

for (var int = 1; int <= 100; int ++) {
    fizzBuzz(int);
}