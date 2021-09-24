let valores = [5,4,8,3,9]
valores.push(1)
valores.sort
/*
for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)}
let pos = valores.indexOf(6)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}
