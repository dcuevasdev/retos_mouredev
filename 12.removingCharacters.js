function removingCharacter(str1, str2) {
  const out1 = [];
  const out2 = [];

  for (const letter of str1.toLowerCase()) {
    const validator = str2.includes(letter);
    if (!validator) {
      out1.push(letter);
    }
  }

  for (const letter of str2.toLowerCase()) {
    const validator = str1.includes(letter);
    if (!validator) {
      out2.push(letter);
    }
  }

  return console.log(`Out1: ${out1.join(" ")} -- Out2: ${out2.join(" ")}`);
}

removingCharacter("Hola gente", "como Estan Todos");
