function contar() {
    var inicio = parseInt(document.querySelector('#inicio').value);
    var fim = parseInt(document.querySelector('#fim').value);
    var passo = parseInt(document.querySelector('#passo').value);
    var resultado = document.querySelector('#res');
    var contador = "";

    if (passo <= 0) {
        resultado.innerText = "Passo inválido! Deve ser maior que zero.";
        return;
    }

    while (inicio <= fim) {
        contador += `passo ${inicio}\n`;
        inicio += passo;
    }

    resultado.innerText = contador;
}
