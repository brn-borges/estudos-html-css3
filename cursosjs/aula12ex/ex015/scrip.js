//alert('Olá!')
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > fano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // add imagem pelo JS
        img.setAttribute('id', 'foto') // idem do anterior linha 13
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-menino.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-menina.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto-mulher.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)  // para adicionar a foto pelo javascript
    }
}