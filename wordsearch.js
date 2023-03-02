const wordSearch = (letters, word) => {
  const regex = /[^a-zA-Z]/;
  if (word === "") {
    return undefined;
  }
  if (regex.test(word)) {
    return false;
  }
  if (letters.length === 0) {
    return undefined;
  }
  //check rows for word
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  // Check columns for the word
  for (let i = 0; i < letters[0].length; i++) {
    let verticalWord = "";
    for (let j = 0; j < letters.length; j++) {
      verticalWord += letters[j][i];
    }
    if (verticalWord.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;

//Finished written by @MSimnes and @khoslaGA;