function decimalToBinary(num) {
  let container = [];
  while (num !== 0) {
    let residue = parseInt(num % 2);
    num = Math.floor(num / 2);
    container.push(residue);
  }
  return console.log(container.join(" "));
}

decimalToBinary(387);
