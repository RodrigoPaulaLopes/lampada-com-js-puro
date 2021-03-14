const btnLigar = document.getElementById('ligar')
const btnDesligar = document.getElementById('desligar')
const lampada = document.getElementById('lampada')

function ligar(){
    lampada.src = './img/ligada.jpg'
}
btnLigar.addEventListener('click', ligar)

function desligar(){
    lampada.src = './img/desligada.jpg'

    
}
btnDesligar.addEventListener('click', desligar)

function quebrar(){
    lampada.src = './img/quebrada.jpg'
}
lampada.addEventListener('dblclick', quebrar)
lampada.addEventListener('mouseenter', ligar)
lampada.addEventListener('mouseleave', desligar)

