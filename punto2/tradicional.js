function obtenerNombre(codigo){
    let nombre = codigo.split(":")[1]
    return nombre
}

let resultado1=obtenerNombre("ARQ2555:Sara Bel-Sun")
let resultado2=obtenerNombre("ARQ2556:Nodin Chavdri")
let resultado3=obtenerNombre("ARQ2557:Finn")

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)