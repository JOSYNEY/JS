function carregar () {
var msg = document.querySelector('#msg')
var img = document.querySelector('#imagem')
var data = new Date()
var hora = data.getHours() //obtem a hora atual do sistema

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // Bom dia
    img.scr = 'My project-1.png'
    document.body.style.background = '#e0dddd'
} else if (hora >= 12 && hora < 18) {
    // Boa tarde
    img.src ='  My project-1 (1).png'
    document.body.style.background = '#b3aca3'
} else {
    // Boa noite
    img.src ='My project-1 (2).png'
    document.body.style.background = '#141721'
}
}