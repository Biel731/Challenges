function codeUsernameValidation(nameUser) {
  this.obj = { correct: {}, wrong: {} };

  for (var i = 0; i < nameUser.length; i++) {
    let letter = Number(nameUser[0]);

    // 1° Regra: O tamanho do userName deve ser entre 4 e 25 caracteres
    nameUser.length >= 4 && nameUser.length <= 25
      ? (this.obj.correct.prop1 = "true")
      : (this.obj.wrong = "false");

    // 2° Regra: O userName deve começar com uma letra
    isNaN(letter)
      ? (this.obj.correct.prop2 = "true")
      : (this.obj.wrong.prop2 = "false");

    // 3° Regra: O userName não pode terminar com um "_"
    let name = nameUser;
    name[name.length - 1] !== "_"
      ? (this.obj.correct.prop3 = "true")
      : (this.obj.wrong.prop3 = "false");
  }

  const verifyStatus = function (propCorrect) {
    let counter = 0;

    for (index in propCorrect) {
      if (propCorrect[index] == "true") counter++;
    }

    if (counter == 3) return true;
    else if (counter < 3) return false;
  };

  // code goes here
  return verifyStatus(this.obj.correct);
}

console.log(codeUsernameValidation("gffgv_"));
