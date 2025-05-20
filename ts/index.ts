let nombre: string = "Juan"
let edad: number = 22
let casado: boolean = false
let nulo: null = null
let indefinido: undefined = undefined
let vacio: string = ""
let nulleable: string | null = null

//MALA PRACTICA
let multiple: string | number | boolean = "Hola"
multiple = 22
multiple = true

//LA PEOR PRACTICA
let cualquiera: any = "Hola"
cualquiera = 22
cualquiera = true

const suma = (a: number, b: number): any => a + b


// MALA PRACTICA
let persona: {
    nombre: string
    edad: number
    casado: boolean
    nulo: null
    indefinido: undefined
} = {
    nombre: "Juan",
    edad: 22,
    casado: false,
    nulo: null,
    indefinido: undefined
}

//BUENA PRACTICA
type Persona = {
    nombre: string
    edad: number
    casado: boolean
    nulo: null
    indefinido: undefined
}

let persona2: Persona = {
    nombre: "Juan",
    edad: 22,
    casado: false,
    nulo: null,
    indefinido: undefined
}

type objeto ={
    nombre: string
    edad: number
}

const devolverPersona = (): objeto => {
    let objeto: objeto = {
        nombre: "Juan",
        edad: 22
    }
    return objeto
}

const objetoAny = devolverPersona()

objetoAny.nombre = "Pedro"

//Tipado literal
type Estado = "pendiente" | "completado" | "cancelado"

let estadoTarea: Estado = "pendiente"

if(estadoTarea === "pendiente") {
    console.log("La tarea está pendiente")
} else if(estadoTarea === "completado") {
    console.log("La tarea está completada")
} else {
    console.log("La tarea está cancelada")
}

//Tipo Enums
enum EstadoTarea {
    Pendiente = "pendiente",
    Completado = "completado",
    Cancelado = "cancelado"
}

let estadoTarea2: EstadoTarea = EstadoTarea.Pendiente

if(estadoTarea2 === EstadoTarea.Pendiente) {
    console.log("La tarea está pendiente")
} else if(estadoTarea2 === EstadoTarea.Completado) {
    console.log("La tarea está completada")
} else {
    console.log("La tarea está cancelada")
}

//Interfaces
interface IAnimal {
    raza: string | null
    tipo: string
}

//Extends (Herencia de interfaces)
interface IMascota extends IAnimal {
    nombre: string
    edad: number
}

let perro: IMascota = {
    raza: "Labrador",
    tipo: "Perro",
    nombre: "Firulais",
    edad: 3
}

let perro2: IMascota = {
    nombre: "Firulais",
    edad: 3,
    tipo: "Perro",
    raza: "Labrador"
}

//Clases pueden implementar varias interfaces
class Animal implements IAnimal, IMascota {
    nombre: string
    edad: number
    tipo: string
    raza: string | null

    constructor(nombre: string, edad: number, tipo: string, raza: string | null) {
        this.nombre = nombre
        this.edad = edad
        this.tipo = tipo
        this.raza = raza
    }
}

class Animal2 {
    nombre: string
    edad: number
    tipo: string
    raza: string | null

    constructor(nombre: string, edad: number, tipo: string, raza: string | null) {
        this.nombre = nombre
        this.edad = edad
        this.tipo = tipo
        this.raza = raza
    }
}

class Animal3 {
    nombre: string
    edad: number
    raza: string | null

    constructor(nombre: string, edad: number, tipo: string, raza: string | null) {
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
    }
}


// Herencia de clases solo se puede hacer una vez
class Perro extends Animal {
    constructor(nombre: string, edad: number, raza: string | null) {
        super(nombre, edad, "Perro", raza)
    }
}

//Ejemplo de polimorfismo

interface IAnimal2 {
    hacerSonido(): void;
}

class Caballo implements IAnimal2 {
    hacerSonido(): void {
        console.log("Hiiii")
    }
}

class Gato implements IAnimal2 {
    hacerSonido(): void {
        console.log("Miau")
    }
}

function escucharAnimal(animal: IAnimal2) {
    animal.hacerSonido()
}

let nuevoPerro: IAnimal2 = {
    hacerSonido: () => {
        console.log("Guau")
    }
}


let miCaballo: Caballo = new Caballo()
let miGato: Gato = new Gato()

escucharAnimal(miCaballo)
escucharAnimal(miGato)
escucharAnimal(nuevoPerro)
























