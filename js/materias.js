let materias = [
    { 
        "id":1,
        "nombre": "ALGEBRA Y GEOMETRIA ANALITICA",
        "estado":null,
        "correlativas":[11,12]
    },
    { 
        "id":2,
        "nombre": "ANALISIS MATEMATICO I",
        "estado":null,
        "correlativas":[11,12,13]
    },
    { 
        "id":3,
        "nombre": "FISICA I",
        "estado":null,
        "correlativas":[13]
    },
    { 
        "id":4,
        "nombre": "SISTEMAS Y ORGANIZACIONES",
        "estado":null,
        "correlativas":[14]
    },   
    { 
        "id":5,
        "nombre": "ALGORITMOS Y ESTRUCTURAS DE DATOS",
        "estado":null,
        "correlativas":[14,15,16,17]
    },  
    {  
        "id":6,
        "nombre": "MATEMATICA DISCRETA",
        "estado":null,
        "correlativas":[15,16,17]
    }, 
    { 
        "id":7,
        "nombre": "ARQUITECTURA DE COMPUTADORAS",
        "estado":null,
        "correlativas":[17,19]
    },
    {  
        "id":8,
        "nombre": "INGENIERIA Y SOCIEDAD",
        "estado":null,
        "correlativas":[31]
    }, 
    {  
        "id":9,
        "nombre": "INGLES I",
        "estado":null,
        "correlativas":[24]
    },  
    {   
        "id":10,
        "nombre": "QUIMICA",
        "estado":null,
        "correlativas":[25]
    }, 
    {   
        "id":11,
        "nombre": "PROBABILIDAD Y ESTADISTICA",
        "estado":null,
        "correlativas":[26,31]
    }, 
    {   
        "id":12,
        "nombre": "ANALISIS MATEMATICO II",
        "estado":null,
        "correlativas":[18,19]
    },  
    {   
        "id":13,
        "nombre":  "FISICA II",
        "estado":null,
        "correlativas":[19]
    },
    {   
        "id":14,
        "nombre": "ANALISIS DE SISTEMAS",
        "estado":null,
        "correlativas":[20,21,22,31]
    },
    {   
        "id":15,
        "nombre": "SINTAXIS Y SEMANTICA DE LOS LENGUAJES",
        "estado":null,
        "correlativas":[22]
    },
    {   
        "id":16,
        "nombre": "PARADIGMAS DE PROGRAMACION",
        "estado":null,
        "correlativas":[21,22]
    },
    {   
        "id":17,
        "nombre":  "SISTEMAS OPERATIVOS",
        "estado":null,
        "correlativas":[28,29]
    },
    "",
    {   
        "id":18,
        "nombre":  "MATEMATICA SUPERIOR",
        "estado":null,
        "correlativas":[25,26,27]
    },
    {   
        "id":19,
        "nombre": "COMUNICACIONES",
        "estado":null,
        "correlativas":[28 ]
    },  
    {   
        "id":20,
        "nombre": "ECONOMIA",
        "estado":null,
        "correlativas":[30,31]
    }, 
    {  
        "id":21,
        "nombre": "DISEÑO DE SISTEMAS",
        "estado":null,
        "correlativas":[29,30]
    },
    {  
        "id":22,
        "nombre": "GESTION DE DATOS",
        "estado":null,
        "correlativas":[30]
    },
    {  
        "id":23,
        "nombre": "SISTEMAS DE REPRESENTACION",
        "estado":null,
        "correlativas":[]
    },
    {  
        "id":24,
        "nombre": "INGLES II",
        "estado":null,
        "correlativas":[]
    },    
    "",
    "",
    {  
        "id":25,
        "nombre": "TEORIA DE CONTROL",
        "estado":null,
        "correlativas":[35]
    },
    {  
        "id":26,
        "nombre": "SIMULACION",
        "estado":null,
        "correlativas":[32,33]
    },
    {  
        "id":27,
        "nombre": "INVESTIGACION OPERATIVA",
        "estado":null,
        "correlativas":[32,33,34]
    },
    {  
        "id":28,
        "nombre": "REDES DE INFORMACION",
        "estado":null,
        "correlativas":[35]
    },
    {  
        "id":29,
        "nombre": "ADMINISTRACION DE RECURSOS",
        "estado":null,
        "correlativas":[33,34,35]
    }, 
    {  
        "id":30,
        "nombre": "INGENIERIA EN SOFTWARE",
        "estado":null,
        "correlativas":[35  ]
    }, 
    {  
        "id":31,
        "nombre": "LEGISLACION",
        "estado":null,
        "correlativas":[]
    },  
    "",
    "",
    {  
        "id":32,
        "nombre": "INTELIGENCIA ARTIFICIAL",
        "estado":null,
        "correlativas":[]
    }, 
    {  
        "id":33,
        "nombre": "SISTEMAS DE GESTION",
        "estado":null,
        "correlativas":[]
    }, 
    {  
        "id":34,
        "nombre": "ADMINISTRACION GERENCIAL",
        "estado":null,
        "correlativas":[]
    },  
    {  
        "id":35,
        "nombre": "PROYECTO FINAL",
        "estado":null,
        "correlativas":[]
    }, 
    {  
        "id":36,
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
