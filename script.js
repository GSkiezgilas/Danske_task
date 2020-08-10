function removeDuplicatedLetters(string) {
  let stringToArray = string.split('');
  let newArray = [];
  let correctedString;

  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i] !== string[i + 1]) {
      newArray.push(stringToArray[i]);
    }
  }
  return (correctedString = newArray.join(''));
}

function piToNumber(string) {
  const regEx = /Pi | pi[ .,?!]{1}/gi;
  let piToNumber = removeDuplicatedLetters(string);

  piToNumber = piToNumber.match(regEx) ? (piToNumber = piToNumber.replace(regEx, ' 3.14 ')) : piToNumber;

  return piToNumber;
}

console.log(piToNumber('I donn’t knoow pii value,  so I will go eat my ppiie…'));
