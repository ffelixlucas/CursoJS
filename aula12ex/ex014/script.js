function carregar ()
{
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var area = window.document.getElementById('area')
    var corpo = window.document.getElementById('corpo')
    var data = new Date ()
    var horario = data.getHours ()
   // var horario = 
    msg.innerHTML = `São ${horario} horas` //TEM QUE SER = 

    if (horario <= 12 && horario >=3){ 
        foto.src='fotomanha.png'
        document.body.style.background = '#e2cd9f' 
    }else if (horario > 12 && horario <18) {
        foto.src='fototarde.png'
        document.body.style.background = '#b9846f'
    }else if (horario >= 18 || horario <3){  
        foto.src='fotonoite.png'
      document.body.style.background = '#515154'
    }
}