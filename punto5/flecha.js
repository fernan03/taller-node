// 5% de salario 175000

let calcular=(salario,comision,numeroVentas)=>salario + (comision * numeroVentas) - (175000)

let salario=calcular(3500000,1500000,3)
console.log(`El salario total del empleado es: ${salario}`)