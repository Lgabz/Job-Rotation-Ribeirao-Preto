
function reverterString (string) {
    let arrayPalavraRevertida = [];
    let novaString = ""

    for(let letra of string){
        arrayPalavraRevertida.unshift(letra)
    }
    for (letra of arrayPalavraRevertida){
        novaString += letra
    }
    console.log(novaString);
}

reverterString("arara") // inserir String aqui para inverter