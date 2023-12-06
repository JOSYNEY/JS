function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('#txtano');
    var res = document.querySelector('#res');
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ''; // Corrigindo acentuação da variável "gênero"
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'caminho/little boy.png');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'caminho/jovem garoto.png');
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'caminho/adulto.png');
            } else {
                //idoso
                img.setAttribute('src', 'caminho/velhinho.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'caminho/little girl.png');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'caminho/jovem garota.png');
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'caminho/adulta.png');
            } else {
                //idoso
                img.setAttribute('src', 'caminho/velhinha.png');
            }
        } 
        res.innerHTML = `Detectamos ${genero}, com ${idade} anos.`; // Fechando a crase corretamente
        res.appendChild(img);
    }
}
