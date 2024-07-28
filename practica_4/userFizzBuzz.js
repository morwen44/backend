const limit = process.argv[2];

const fizzBuzz = (limit) => {
  if (isNaN(limit)) {
    console.error("El valor ingresado no es un numero");
    process.exit(1);
  } else
    for (let number = 1; number <= limit; number++) {
      if (number % 3 === 0 && number % 5 === 0) {
        console.log(number + " FizzBuzz");
      } else if (number % 3 === 0) {
        console.log(number + " Fizz");
      } else if (number % 5 === 0) {
        console.log(number + " Buzz");
      } else console.log(number);
    }
};
fizzBuzz(limit);
