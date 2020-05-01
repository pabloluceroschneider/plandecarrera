let materias = [
    { 
        "nombre": "ALGEBRA Y GEOMETRIA ANALITICA",
        "estado":null,
        "correlativas":[10,11]
    },
    { 
        "nombre": "ANALISIS MATEMATICO I",
        "estado":null,
        "correlativas":[10,11,12]
    },
    { 
        "nombre": "FISICA I",
        "estado":null,
        "correlativas":[12]
    },
    { 
        "nombre": "SISTEMAS Y ORGANIZACIONES",
        "estado":null,
        "correlativas":[13]
    },   
    { 
        "nombre": "ALGORITMOS Y ESTRUCTURAS DE DATOS",
        "estado":null,
        "correlativas":[13,14,15,16]
    },  
    { 
        "nombre": "MATEMATICA DISCRETA",
        "estado":null,
        "correlativas":[14,15,16]
    }, 
    { 
        "nombre": "ARQUITECTURA DE COMPUTADORAS",
        "estado":null,
        "correlativas":[16,19]
    },
    { 
        "nombre": "INGENIERIA Y SOCIEDAD",
        "estado":null,
        "correlativas":[33]
    }, 
    { 
        "nombre": "INGLES I",
        "estado":null,
        "correlativas":[24]
    },  
    { 
        "nombre": "QUIMICA",
        "estado":null,
        "correlativas":[27]
    }, 
    { 
        "nombre": "PROBABILIDAD Y ESTADISTICA",
        "estado":null,
        "correlativas":[28,32]
    }, 
    { 
        "nombre": "ANALISIS MATEMATICO II",
        "estado":null,
        "correlativas":[18,19]
    },  
    { 
        "nombre":  "FISICA II",
        "estado":null,
        "correlativas":[19]
    },
    { 
        "nombre": "ANALISIS DE SISTEMAS",
        "estado":null,
        "correlativas":[20,21,22]
    },
    { 
        "nombre": "SINTAXIS Y SEMANTICA DE LOS LENGUAJES",
        "estado":null,
        "correlativas":[22]
    },
    { 
        "nombre": "PARADIGMAS DE PROGRAMACION",
        "estado":null,
        "correlativas":[21,22]
    },
    { 
        "nombre":  "SISTEMAS OPERATIVOS",
        "estado":null,
        "correlativas":[30,31]
    },
    "",
    { 
        "nombre":  "MATEMATICA SUPERIOR",
        "estado":null,
        "correlativas":[27,28,29]
    },
    { 
        "nombre": "COMUNICACIONES",
        "estado":null,
        "correlativas":[30]
    },  
    { 
        "nombre": "ECONOMIA",
        "estado":null,
        "correlativas":[30,31]
    }, 
    {
        "nombre": "DISEÑO DE SISTEMAS",
        "estado":null,
        "correlativas":[31,32]
    },
    {
        "nombre": "GESTION DE DATOS",
        "estado":null,
        "correlativas":[32]
    },
    {
        "nombre": "SISTEMAS DE REPRESENTACION",
        "estado":null,
        "correlativas":[]
    },
    {
        "nombre": "INGLES II",
        "estado":null,
        "correlativas":[]
    },    
    "",
    "",
    {
        "nombre": "TEORIA DE CONTROL",
        "estado":null,
        "correlativas":[39]
    },
    {
        "nombre": "SIMULACION",
        "estado":null,
        "correlativas":[36,37]
    },
    {
        "nombre": "INVESTIGACION OPERATIVA",
        "estado":null,
        "correlativas":[36,37,38]
    },
    {
        "nombre": "REDES DE INFORMACION",
        "estado":null,
        "correlativas":[39]
    },
    {
        "nombre": "ADMINISTRACION DE RECURSOS",
        "estado":null,
        "correlativas":[37,38,39]
    }, 
    {
        "nombre": "INGENIERIA EN SOFTWARE",
        "estado":null,
        "correlativas":[39]
    }, 
    {
        "nombre": "LEGISLACION",
        "estado":null,
        "correlativas":[]
    },  
    "",
    "",
    {
        "nombre": "INTELIGENCIA ARTIFICIAL",
        "estado":null,
        "correlativas":[]
    }, 
    {
        "nombre": "SISTEMAS DE GESTION",
        "estado":null,
        "correlativas":[]
    }, 
    {
        "nombre": "ADMINISTRACION GERENCIAL",
        "estado":null,
        "correlativas":[]
    },  
    {
        "nombre": "PROYECTO FINAL",
        "estado":null,
        "correlativas":[]
    }, 
    {
        "nombre": "PRÁCTICA SUPERVISADA",
        "estado":null,
        "correlativas":[]
    },  
    "",
    "",
    "",
    ""
]

let arrayMaterias = document.getElementsByClassName("materia");
for (index in arrayMaterias){
    arrayMaterias[index].innerHTML = materias[index] ? materias[index].nombre : "";
    arrayMaterias[index].title = materias[index] ? materias[index].nombre : "";
    arrayMaterias[index].id = index;
}

const paintCorrelativas = div => {
    let self = materias.find( m => m.nombre === div.title)
    const { correlativas } = self;
    div.classList.add("self");
    correlativas.map( m => {
        document.getElementById(m).classList.add("painted");
    })
}

