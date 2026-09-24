//alert('OLÁ')
function carregar(){
 let = document.getElementById('msg')
 let img = document.getElementById('imagem')
let = document.getElementById('foto')   
let data = new Date()
let hora = data.getHours()
msg.innerHTML =  `<strong>Agora são ${hora} horas</strong>`
if(hora >=0 && hora <12 ){
    // bom dia
    img.src = 'manhasemfundo1.png'
    document.body.style.background = '#FFEE8C'
} else if(hora >= 12 && hora <18 ) {
    // boa tarde
    img.src = 'tardesemfundo.png'
      document.body.style.background = 'lightcoral'
} else{
    // boa noite
    img.src = 'noitesemfundo.png'
      document.body.style.background = '#4863A0'
}
}
