function contar() {
    let ini = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) { 
            window.alert('Passo inválido. Considerando passo igual a 1.')
            p = 1
        }
        if (i < f) { // contagem cresente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F603} ` // colocando emoji \u{1f603}
            }
        } else { // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}\u{27A1}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}





