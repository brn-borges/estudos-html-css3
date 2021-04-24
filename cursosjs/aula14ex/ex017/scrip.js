function gerarTabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res')
    if (num.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerText = ''
        for(let i = 1; i <= 10; i++){
            let r = n * i
            let item = document.createElement('option')
            item.text = `${n} X ${i} = ${r}`
            item.value = `tab${i}`
            tab.appendChild(item)
       }
    }
}