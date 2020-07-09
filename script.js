function autoCorrect(string) {
  let stringToArray = string.split('');
  let newArray = [];
  let correctedDuplicatesString;
  const regEx = /Pi | pi[ .,?!]{1}/gi;

  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i] !== string[i + 1]) {
      newArray.push(stringToArray[i]);
    }
  }
  correctedDuplicatesString = newArray.join('');

  return correctedDuplicatesString.match(regEx)
    ? (correctedDuplicatesString = correctedDuplicatesString.replace(regEx, ' 3.14 '))
    : correctedDuplicatesString;
}

autoCorrect('I donn’t knoow pii value,  so I will go eat my ppiie…');
