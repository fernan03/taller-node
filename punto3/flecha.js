let temperaturasDias=[
    {maxima:23, minima:14, dia:1},
    {maxima:20, minima:14, dia:2},
    {maxima:18, minima:15, dia:3},
    {maxima:19, minima:17, dia:4},
    {maxima:24, minima:13, dia:5},
]

temperaturasDias.forEach(temperatura=>{console.log(`El promedio del dia ${temperatura.dia} es ${(temperatura.maxima+temperatura.minima)/2}`)})