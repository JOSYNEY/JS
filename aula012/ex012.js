var idade = 30
console.log(`vc tem ${idade} anos`)
if (idade<16){
    console.log("não vota");
} else if (idade<18 || idade >= 65) {
        console.log('voto opicional') ;
} else {
    console.log('voto obrigatorio')
} 