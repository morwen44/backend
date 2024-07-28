const number = process.argv[2];

const oddOrEven = () => {
  if (typeof number != "number") {
    console.log("El valor ingresado no es un numero");
  } else if (number % 2 === 0) {
    console.log("Es par");
  } else console.log("Es impar");
};

oddOrEven();
