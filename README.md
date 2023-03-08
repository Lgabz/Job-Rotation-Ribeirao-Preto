# Job-Rotation-Ribeirao-Preto

As respostas das questões também podem ser vistas ao rodar os códigos presentes neste repositório. Cada arquivo corresponde à questão referente ao seu nome.

#### RESPOSTAS:

- Questão 1)<br>
91

- Questão 2)<br>

```
let array = [0,1];

for( item of array){
    while(array.length < 50){

            let soma = array[array.length-2] + array[array.length-1];
            array.push(soma)
    }
}

function search (num) {
    let busca = array.indexOf(num)
    if(busca == -1){
        console.log("O número informado não pertence a sequência.")
    }else{
        console.log(`O número informado pertence a sequência!`)
    }
}

search(número)
```

- Questão 3)<br>
a) 1,3,5,7,9,11,13,15<br>
b) 2,4,8,16,32,64,128,256,512,1024<br>
c) 0,1,4,9,16,25,36,49<br>
d) 4,16,36,64,100,144,196<br>
e) 1,1,2,3,5,8,13,21,34<br>
f) o próximo número com a letra inicial D é 200

- Questão 4)<br>

- Questão 5)<br>
```
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

reverterString(string)
```
