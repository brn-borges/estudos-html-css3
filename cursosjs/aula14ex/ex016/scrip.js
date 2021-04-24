function contar(){
    var txtini = document.getElementById('txtinicio')
    var txtf = document.getElementById('txtfim')
    var txtp = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    if (txtini.value.length == 0 || txtf.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        //alert('[ERRO] : Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var ini = Number(txtini.value)
        var fim = Number(txtf.value)
        var passo = Number(txtp.value)
        if (passo <= 0){
            window.alert('Passo invalído! Considerando PASSO 1')
            passo = 1
        }
        if (ini < fim){
            // Contagem crescente
            for(var i = ini; i <= fim; i+=passo){
                res.innerHTML += ` ${i} \u{1f449}`
            }
        } else {
            // Contangem regressiva
            for(var i = ini; i >= fim; i-=passo){
                res.innerHTML += ` ${i} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}