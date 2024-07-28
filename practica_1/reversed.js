const string = process.argv[2];

const reversedString = () => {
  const textArray = string.split("").reverse().join("");
  console.log(textArray);
  const textArray2 = string.split(" ").reverse().join(" ");
  console.log(textArray2);
};

reversedString();
