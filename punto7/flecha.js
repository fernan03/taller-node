let filtrarPlanos=(planos,arrancarNave)=>{
    let filtro=planos.filter(function(plano){
        return plano>=1 && plano<=10
    })
    arrancarNave(filtro)
}

let planos = [1,100,200,300,400,500]
filtrarPlanos(planos,function(filtro){
    let cuenta = filtro.length
    if(cuenta>0){
        console.log("Arrancando la nace")
    }else{
        console.log("Nos quedamos")
    }
})