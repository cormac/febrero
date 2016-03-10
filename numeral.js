var characterMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

var characterToNumber = (currentCharacter, nextCharacter) => {

  var numberFromCharacter = characterMap[currentCharacter];
  var nextNumberFromCharacter = characterMap[nextCharacter];
  if (!isNaN(nextNumberFromCharacter) && numberFromCharacter < nextNumberFromCharacter) {
    return -numberFromCharacter;
  }
  return numberFromCharacter;
}



module.exports = (romanNumber) => {
  return romanNumber.split('').reduce((total, currentCharacter, index, allCharacters) => {
    var nextCharacter = allCharacters[index+1];
    return total + characterToNumber(currentCharacter, nextCharacter);
  }, 0);
};
