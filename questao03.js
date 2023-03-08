let array = [];

let i = 0
while (array.length <= 15){
    array.push(i)
    i++ 
}


let arrayA = [];
for(item of array){
    if (item%2 == 1){
        arrayA.push(item)
    }
}
console.log(`
(Questão A)
${arrayA}`)


let arrayB = [2];
while (arrayB.length < 10){
    let result = (arrayB[arrayB.length-1])*2
    arrayB.push(result)
}
console.log(`
(Questão B)
${arrayB}`)


let y = 0
let arrayC = [];
for (item of arrayA){
    arrayC.push(y);
    let soma = y + item;
    y = soma
}
console.log(`
(Questão C)
${arrayC}`)


let arrayD = [];
for (item of array){
    if(item !== 0 && item%2 == 0){
        let multiplicacao = item*item
        arrayD.push(multiplicacao)
    }
}
console.log(`
(Questão D)
${arrayD}`)


let arrayE = [0,1];
for( item of arrayE){
    while(arrayE.length < 10){

            let soma = arrayE[arrayE.length-2] + arrayE[arrayE.length-1];
            arrayE.push(soma)
    }
}
arrayE.shift()
console.log(`
(Questão E)
${arrayE}`)


console.log(`
(Questão F)
o próximo número com a letra inicial D é 200`)
