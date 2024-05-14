function reverseString(string) {
  const newString = [];

  for (const letter of string) {
    newString.unshift(letter);
  }

  return console.log(newString.join(""));
}

reverseString("Hello world");
