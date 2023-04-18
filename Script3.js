// Compra de celulares y modelos

//creo la clase celulares y sus ids

let id= 0

class celular {
    constructor (marca, modelo, anio, color){
        this.id = id++;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
}

const CelularesNuevos = [] //array vacio
    let iphone= new celular(
        "Apple",
        "Iphone 13",
        "2022",
        "negro"
    )
    
    let samsung= new celular (
        "Samsung",
        "Galaxy A30s",
        "2019",
        "gris",
    )

   let xiaomi=  new celular(
        "Xiaomi",
        "Mi 10i",
        "2021",
        "azul"
    )
    let redmi= new celular (
        "Redmi",
        "Note 11",
        "2021",
        "blanco"     
    )
    
// contructores al array
CelularesNuevos.push(iphone , samsung , xiaomi , redmi)


//destructuring

const { marca , modelo , anio, color } = iphone


//mostrar los acelulares que ya estan

let CelularesLista = document.getElementById("CelularesLista")

//mostrar el array inicial por pantalla
for (const dato of CelularesNuevos) {
    // creao el elemento
    let li = document.createElement("li")
    //paso 2 imprimir a partir del innerHTML
    li.innerHTML = `la marca del celular es: <b> ${dato.marca}</b> su modelo <b>${dato.modelo}</b> <br>
                   su fecha de lanzamiento fue en <b> ${dato.anio}</b> y su color es <b>${dato.color}</b>`
                
    //decirle al document body que creamos un elemento nuevo

    CelularesLista.appendChild(li)    
}



//funciones

//traer el form padre al DOM
let agregarmodelosform = document.getElementById("agregarmodelosform")
console.log(agregarmodelosform)

//crear un nuevo celu a partir del form y mostrarlo 
const agregarCeluNew = (e) =>{
    e.preventDefault()
   
    id++;
    let marca = e.target
    let modelo = e.target
    let anio= e.target
    let color = e.target

    let celunuevo = new celular(
        marca.children[1].value,
        modelo.children[4].value,
        anio.children[7].value,
        color.children[10].value,
    );

    //pushearla al array
    CelularesNuevos.push(celunuevo)


    //mostrar el nuevo resultado
    let mostrarmodelosform = document.getElementById("CelularesLista")
    mostrarmodelosform.innerHTML = "";
    CelularesNuevos.forEach(celular =>{
        let li = document.createElement("li")
        li.innerHTML = `la marca del celular es: <b> ${celular.marca}</b> su modelo <b>${celular.modelo}</b> <br>
        su fecha de lanzamiento fue en <b> ${celular.anio}</b> y su color es <b>${celular.color}</b>`
                    mostrarmodelosform.appendChild(li) 

    })
}



// evento submit

agregarmodelosform.addEventListener("submit", agregarCeluNew)


let filtrarPorMarcaChange = document.getElementById("filtrarPorMarcaChange")

//evento change

filtrarPorMarcaChange.addEventListener("change", filtrarPorMarcaCelu)

// funcion para filtrar 

function filtrarPorMarcaCelu(e){
    //obtenemos el valor seleccionado del select
    let filtro = e.target.value;
    //elemento de HTML > resultado
    let mostrarPorMarca = document.getElementById("mostrarPorMarca")
    mostrarPorMarca.innerHTML = "" //limpia el contenido antes de mostrar
    //criterio de filtrado 
    let celuFiltrado;
    if (filtro === "Apple") {
        celuFiltrado= CelularesNuevos.filter((celular) => celular.marca === "Apple")
    } else if (filtro === "Samsung") {
        celuFiltrado= CelularesNuevos.filter((celular) => celular.marca === "Samsung")
    } else if (filtro === "Redmi") {
        celuFiltrado = CelularesNuevos.filter((celular) => celular.marca === "Redmi")
    } else if (filtro === "Xiaomi") {
        celuFiltrado = CelularesNuevos.filter((celular) => celular.marca === "Xiaomi")
    }

    //crear un nuevo elemento de HTML para celu filtrado y agregado por el DOM

    celuFiltrado.forEach(info =>{
        let p = document.createElement("p")
        mostrarPorMarca.innerHTML = `El celular filtrado es el modelo ${info.modelo} de la marca ${info.marca}`
        mostrarPorMarca.appendChild(p)
    })
}


//enviar datos al storage -> clave = valor
//guardo el array completo en el storage

const guardarDatos =(clave , valor) => {localStorage.setItem(clave , valor)}

guardarDatos("listaCelulares", JSON.stringify(CelularesNuevos))

//traerlos
const Celularesguardados = JSON.parse(localStorage.getItem("listaCelulares"))
 
