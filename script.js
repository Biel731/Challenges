// Verificar se dois números ao somá-los resultam em 10 / Do contrário - false
// Se sim, verificar se existe 3 "?" entre else / Do contrário - false

function QuestionsMarks(str) {
  var param = str;
  let arr = [],
    numbers = [];

  for (char of param) {
    arr.push(char);
  }

  for (let i = 0; i < param.length; i++) {
    if (!isNaN(param[i])) numbers.push(Number(param[i]));
    let soma = numbers.reduce((total, num) => total + num, 0);
    if (soma > 10) {
      var corte = [];
      for (char of numbers) {
        corte.push(param.substring(numbers[0], numbers[numbers + 1]));
      }
      console.log(corte);
    }
  }

  // numbers = numbers.map(Number);
  return corte;
}

// keep this function call here
console.log(QuestionsMarks("aa6?9"));
