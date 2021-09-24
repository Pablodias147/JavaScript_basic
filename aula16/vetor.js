function par(numero){
    let res
    if(numero % 2 == 0){
        res = true
    } else{res = false}
    return res
}
let n = par(11)
if(n == true){
    console.log('Esse numero é Par')
} else{console.log('Esse numero é impar')}
console.log()