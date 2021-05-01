let num = [ 5, 8, 4]
console.log(num[2])
let amigo = {nome: 'jose', 
sexo: 'M', 
peso: 85.4, 
engordar(p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(typeof amigo)
console.log(amigo)
console.log(amigo.nome)
console.log(`${amigo.nome} pesa ${amigo.peso}KG`)