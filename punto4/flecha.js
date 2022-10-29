let sables=[3,5,-6,1,7,-14,-9,,2]
let constante=0

sables.forEach(sable=>{
    if(sable<0){
        constante ++
        console.log(`El sable de luz con carga negativa es: ${sable}`)
    }
})
console.log(`Los sables con carga negativa son: ${constante}`)