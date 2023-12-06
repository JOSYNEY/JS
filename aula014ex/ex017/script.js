function calcular() {
    var numero = parseInt(document.querySelector('#tbad').value);
    var res = document.querySelector('#res');
    var tabuado = '';
  
    if (isNaN(numero)) {
      res.textContent = 'Digite um número válido.';
      return;
    }
  
    for (var i = 0; i <= 10; i++) {
      var resultado = numero * i;
      tabuado += numero + ' x ' + i + ' = ' + resultado + '\n';
    }
  
    res.textContent = tabuado;
  }