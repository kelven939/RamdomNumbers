console.log("Welcome to console!");

let inputValuesInArray = [];
let maxValue = 12;
let values, randoms;

const randomNumbers = () => {
  for (let i = 0; i < maxValue; i++) {
    randoms = Math.floor(1 + Math.random() * 10);

    if (inputValuesInArray.indexOf(randoms) === -1) {
      inputValuesInArray.push(randoms);

      //values = inputValuesInArray;
      console.log(randoms);
    }
  }
}
randomNumbers();