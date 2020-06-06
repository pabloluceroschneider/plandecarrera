let materias = [
    { 
        "id":1,
        "nivel":1,
        "nombre": "ALGEBRA Y GEOMETRIA ANALITICA",
        "estado":null,
        "correlativas":[11,12]
    },
    { 
        "id":2,
        "nivel":1,
        "nombre": "ANALISIS MATEMATICO I",
        "estado":null,
        "correlativas":[11,12,13]
    },
    { 
        "id":3,
        "nivel":1,
        "nombre": "FISICA I",
        "estado":null,
        "correlativas":[13]
    },
    { 
        "id":4,
        "nivel":1,
        "nombre": "SISTEMAS Y ORGANIZACIONES",
        "estado":null,
        "correlativas":[14]
    },   
    { 
        "id":5,
        "nivel":1,
        "nombre": "ALGORITMOS Y ESTRUCTURAS DE DATOS",
        "estado":null,
        "correlativas":[14,15,16,17]
    },  
    {  
        "id":6,
        "nivel":1,
        "nombre": "MATEMATICA DISCRETA",
        "estado":null,
        "correlativas":[15,16,17]
    }, 
    { 
        "id":7,
        "nivel":1,
        "nombre": "ARQUITECTURA DE COMPUTADORAS",
        "estado":null,
        "correlativas":[17,19]
    },
    {  
        "id":8,
        "nivel":1,
        "nombre": "INGENIERIA Y SOCIEDAD",
        "estado":null,
        "correlativas":[31]
    }, 
    {  
        "id":9,
        "nivel":1,
        "nombre": "INGLES I",
        "estado":null,
        "correlativas":[24]
    },  
    {   
        "id":10,
        "nivel":2,
        "nombre": "QUIMICA",
        "estado":null,
        "correlativas":[25]
    }, 
    {   
        "id":11,
        "nivel":2,
        "nombre": "PROBABILIDAD Y ESTADISTICA",
        "estado":null,
        "correlativas":[26,31]
    }, 
    {   
        "id":12,
        "nivel":2,
        "nombre": "ANALISIS MATEMATICO II",
        "estado":null,
        "correlativas":[18,19]
    },  
    {   
        "id":13,
        "nivel":2,
        "nombre":  "FISICA II",
        "estado":null,
        "correlativas":[19]
    },
    {   
        "id":14,
        "nivel":2,
        "nombre": "ANALISIS DE SISTEMAS",
        "estado":null,
        "correlativas":[20,21,22,31]
    },
    {   
        "id":15,
        "nivel":2,
        "nombre": "SINTAXIS Y SEMANTICA DE LOS LENGUAJES",
        "estado":null,
        "correlativas":[22]
    },
    {   
        "id":16,
        "nivel":2,
        "nombre": "PARADIGMAS DE PROGRAMACION",
        "estado":null,
        "correlativas":[21,22]
    },
    {   
        "id":17,
        "nivel":2,
        "nombre":  "SISTEMAS OPERATIVOS",
        "estado":null,
        "correlativas":[28,29]
    },
    "",
    {   
        "id":18,
        "nivel":3,
        "nombre":  "MATEMATICA SUPERIOR",
        "estado":null,
        "correlativas":[25,26,27]
    },
    {   
        "id":19,
        "nivel":3,
        "nombre": "COMUNICACIONES",
        "estado":null,
        "correlativas":[28 ]
    },  
    {   
        "id":20,
        "nivel":3,
        "nombre": "ECONOMIA",
        "estado":null,
        "correlativas":[30,31]
    }, 
    {  
        "id":21,
        "nivel":3,
        "nombre": "DISEÑO DE SISTEMAS",
        "estado":null,
        "correlativas":[29,30]
    },
    {  
        "id":22,
        "nivel":3,
        "nombre": "GESTION DE DATOS",
        "estado":null,
        "correlativas":[30]
    },
    {  
        "id":23,
        "nivel":3,
        "nombre": "SISTEMAS DE REPRESENTACION",
        "estado":null,
        "correlativas":[]
    },
    {  
        "id":24,
        "nivel":3,
        "nombre": "INGLES II",
        "estado":null,
        "correlativas":[]
    },    
    "",
    "",
    {  
        "id":25,
        "nivel":4,
        "nombre": "TEORIA DE CONTROL",
        "estado":null,
        "correlativas":[35]
    },
    {  
        "id":26,
        "nivel":4,
        "nombre": "SIMULACION",
        "estado":null,
        "correlativas":[32,33]
    },
    {  
        "id":27,
        "nivel":4,
        "nombre": "INVESTIGACION OPERATIVA",
        "estado":null,
        "correlativas":[32,33,34]
    },
    {  
        "id":28,
        "nivel":4,
        "nombre": "REDES DE INFORMACION",
        "estado":null,
        "correlativas":[35]
    },
    {  
        "id":29,
        "nivel":4,
        "nombre": "ADMINISTRACION DE RECURSOS",
        "estado":null,
        "correlativas":[33,34,35]
    }, 
    {  
        "id":30,
        "nivel":4,
        "nombre": "INGENIERIA EN SOFTWARE",
        "estado":null,
        "correlativas":[35  ]
    }, 
    {  
        "id":31,
        "nivel":4,
        "nombre": "LEGISLACION",
        "estado":null,
        "correlativas":[]
    },  
    "",
    "",
    {  
        "id":32,
        "nivel":5,
        "nombre": "INTELIGENCIA ARTIFICIAL",
        "estado":null,
        "correlativas":[]
    }, 
    {  
        "id":33,
        "nivel":5,
        "nombre": "SISTEMAS DE GESTION",
        "estado":null,
        "correlativas":[]
    }, 
    {  
        "id":34,
        "nivel":5,
        "nombre": "ADMINISTRACION GERENCIAL",
        "estado":null,
        "correlativas":[]
    },  
    {  
        "id":35,
        "nivel":5,
        "nombre": "PROYECTO FINAL",
        "estado":null,
        "correlativas":[]
    }, 
    {  
        "id":36,
        "nivel":5,
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
    arrayMaterias[index].id =  materias[index] ? materias[index].id : "";
}

const paintCorrelativas = div => {
    div.classList.toggle("self");
    let self = materias.find( m => m.nombre === div.title)
    const { correlativas } = self;
    correlativas.map( m => {
        document.getElementById(m).classList.toggle("painted");
    })
}
