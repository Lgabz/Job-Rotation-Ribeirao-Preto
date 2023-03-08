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

search(número) // informar o valor para pesquisa aqui.


